<?php
namespace app\core\models\dao;

use app\core\models\dao\base\BaseDao;
use app\core\models\dao\base\InterfaceDao;

final class SaleDao extends BaseDao implements InterfaceDao {

    public function __construct(\PDO $conn) {
        parent::__construct($conn, "ventas");
    }

    public function save(array $data): void {
        // 1. REQUISITO DEL PROFESOR: Bloquear la tabla de numeración
        $this->conn->exec("LOCK TABLES ventas_numeracion WRITE");
        
        // Obtenemos el número actual
        $stmtNum = $this->conn->query("SELECT numero FROM ventas_numeracion");
        $numeroVenta = (int) $stmtNum->fetchColumn();
        
        // Incrementamos para el próximo cajero y liberamos la tabla
        $this->conn->exec("UPDATE ventas_numeracion SET numero = numero + 1");
        $this->conn->exec("UNLOCK TABLES");

        // 2. INICIAMOS LA TRANSACCIÓN PARA LA VENTA
        $this->conn->beginTransaction();

        try {
            // Guardamos la cabecera (Tabla ventas)
            $sqlVenta = "INSERT INTO ventas (numero_venta, fecha, cliente, forma_pago, total, usuarioId, estado) 
                         VALUES (:numero_venta, NOW(), :cliente, :forma_pago, :total, :usuarioId, 1)";
            $stmtVenta = $this->conn->prepare($sqlVenta);
            $stmtVenta->execute([
                'numero_venta' => $numeroVenta,
                'cliente'      => $data['cliente'],
                'forma_pago'   => $data['forma_pago'],
                'total'        => $data['total'],
                'usuarioId'    => $data['usuarioId']
            ]);

            $ventaId = $this->conn->lastInsertId();

            // Guardamos los detalles y descontamos el stock
            $sqlDetalle = "INSERT INTO ventas_detalle (ventaId, productoId, cantidad, precio_unitario, subtotal) 
                           VALUES (:ventaId, :productoId, :cantidad, :precio, :subtotal)";
            $stmtDetalle = $this->conn->prepare($sqlDetalle);

            $sqlStock = "UPDATE productos SET stock = stock - :cantidad WHERE id = :productoId AND stock >= :cantidad";
            $stmtStock = $this->conn->prepare($sqlStock);

            foreach ($data['detalles'] as $item) {
                // Insertamos en ventas_detalle
                $stmtDetalle->execute([
                    'ventaId'    => $ventaId,
                    'productoId' => $item['id'],
                    'cantidad'   => $item['cantidad'],
                    'precio'     => $item['precio'],
                    'subtotal'   => $item['subtotal']
                ]);

                // Descontamos el stock
                $stmtStock->execute([
                    'cantidad'   => $item['cantidad'],
                    'productoId' => $item['id']
                ]);

                // Validación extra: Si el stock queda negativo, MySQL no lo actualizará (por la condición WHERE)
                if ($stmtStock->rowCount() == 0) {
                    throw new \Exception("No hay stock suficiente para el producto: " . $item['nombre']);
                }
            }

            // Si todo salió perfecto, guardamos los cambios en la base de datos permanentemente
            $this->conn->commit();

        } catch (\Exception $e) {
            // Si algo falla (ej: falta de stock), deshacemos todo lo que hicimos en este bloque
            $this->conn->rollBack();
            throw $e;
        }
    }

    public function list(array $filters = []): array {
        $sql = "SELECT v.id, v.numero_venta, DATE_FORMAT(v.fecha, '%d/%m/%Y %H:%i') as fecha, 
                       v.cliente, v.forma_pago, v.total, v.estado, u.cuenta as vendedor
                FROM ventas v
                LEFT JOIN usuarios u ON v.usuarioId = u.id";
                
        $clauses = [];
        $parameters = []; // <-- Este es el arreglo que nos pedía el error

        // Aplicamos el filtro si el usuario escribió algo en el buscador
        if (isset($filters['filtroCliente']) && $filters['filtroCliente'] !== '') {
            $clauses[] = "(v.cliente LIKE :filtro OR v.numero_venta LIKE :filtro)";
            $parameters['filtro'] = "%" . $filters['filtroCliente'] . "%";
        }

        if (count($clauses) > 0) {
            $sql .= " WHERE " . implode(" AND ", $clauses);
        }

        $sql .= " ORDER BY v.id DESC";
        
        // ¡Problema solucionado! Ahora pasamos ambos argumentos
        return $this->selectQuery($sql, $parameters);
    }

    // Métodos obligatorios vacíos (por ahora)
    public function load(int $id): array {
        // 1. Buscamos la cabecera de la venta
        $sql = "SELECT v.*, DATE_FORMAT(v.fecha, '%d/%m/%Y %H:%i') as fecha_formateada, u.cuenta as vendedor 
                FROM ventas v 
                LEFT JOIN usuarios u ON v.usuarioId = u.id 
                WHERE v.id = :id";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute(['id' => $id]);
        $venta = $stmt->fetch(\PDO::FETCH_ASSOC);

        if (!$venta) {
            throw new \Exception("Venta no encontrada.");
        }

        // 2. Buscamos los productos (detalles) de esa venta
        $sqlDetalles = "SELECT d.*, p.codigo, p.nombre 
                        FROM ventas_detalle d 
                        INNER JOIN productos p ON d.productoId = p.id 
                        WHERE d.ventaId = :ventaId";
        $stmtDetalles = $this->conn->prepare($sqlDetalles);
        $stmtDetalles->execute(['ventaId' => $id]);
        
        // 3. Empaquetamos todo junto
        $venta['detalles'] = $stmtDetalles->fetchAll(\PDO::FETCH_ASSOC);

        return $venta;
    }
    public function update(array $data): void {}
    public function delete(int $id): void {}
}
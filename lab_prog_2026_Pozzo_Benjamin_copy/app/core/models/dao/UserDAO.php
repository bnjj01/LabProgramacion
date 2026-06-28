<?php
namespace app\core\models\dao;
use app\core\models\dao\base\BaseDao;
use app\core\models\dao\base\InterfaceDao;

final class UserDao extends BaseDao implements InterfaceDao{

    public function update(array $data): void{
            // 1. Antes de actualizar, validamos que la nueva cuenta o correo 
            // no le pertenezcan ya a otro usuario (usando los métodos privados del profe)
            $this->validateCuenta($data['id'], $data['cuenta']);
            $this->validateCorreo($data['id'], $data['correo']);
    
            // 2. Preparamos el SQL usando la variable de la tabla heredada
            $sql = "UPDATE {$this->table} 
                    SET apellido = :apellido, 
                        nombres = :nombres, 
                        cuenta = :cuenta, 
                        perfil = :perfil, 
                        correo = :correo 
                    WHERE id = :id";
            
            $stmt = $this->conn->prepare($sql);
            
            // 3. Ejecutamos la consulta. (Asumimos que $data trae todas las claves necesarias)
            // Nota: En una actualización real, no solemos actualizar la clave acá a menos 
            // que el usuario lo pida explícitamente, por eso no la incluí en el SET.
            $stmt->execute([
                'apellido' => $data['apellido'],
                'nombres'  => $data['nombres'],
                'cuenta'   => $data['cuenta'],
                'perfil'   => $data['perfil'],
                'correo'   => $data['correo'],
                'id'       => $data['id']
            ]);
        }
    public function delete(int $id): void{
        // Preparamos la consulta para borrar físicamente el registro
        $sql = "DELETE FROM {$this->table} WHERE id = :id";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute(['id' => $id]);
    }

    public function list(array $filters): array{
        // 1. Armamos la consulta base
        $sql = "SELECT * FROM {$this->table} WHERE 1=1";
        $params = [];

        // 2. Si viene el filtro de nombre/cuenta, lo concatenamos
        if (isset($filters['nombre']) && $filters['nombre'] !== '') {
            $sql .= " AND (nombres LIKE :nombre OR apellido LIKE :nombre OR cuenta LIKE :nombre)";
            // Los % son comodines de SQL para buscar coincidencias parciales
            $params['nombre'] = '%' . $filters['nombre'] . '%'; 
        }

        // 3. Si viene el filtro de perfil, lo concatenamos
        if (isset($filters['perfil']) && $filters['perfil'] !== 'Todos...') {
            $sql .= " AND perfil = :perfil";
            $params['perfil'] = $filters['perfil'];
        }

        // 4. Preparamos y ejecutamos
        $stmt = $this->conn->prepare($sql);
        $stmt->execute($params);
        
        // 5. Devolvemos el array con todos los registros que coincidan
        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }
}
?>
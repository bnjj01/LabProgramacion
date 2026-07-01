<?php
namespace app\core\services;

use app\core\models\dao\SaleDao;
use app\core\models\dto\SaleDto;
use app\core\services\base\BaseService;
use app\libs\database\Connection;

final class SaleService extends BaseService {
    
    function __construct() {
        parent::__construct(new SaleDao(Connection::get()));
    }

    public function save(SaleDto $dto, int $usuarioId): void {
        if (empty($dto->getDetalles())) {
            throw new \Exception("La venta no puede estar vacía.");
        }
        
        $data = $dto->toArrayForSave();
        $data['usuarioId'] = $usuarioId; // Inyectamos el ID del cajero/usuario

        $this->dao->save($data);
    }

    public function list(array $filters = []): array {
        return $this->dao->list($filters);
    }
}
<?php
namespace app\core\controllers;

use app\core\controllers\base\BaseController;
use app\core\models\dto\SaleDto;
use app\core\services\SaleService;
use app\libs\http\Request;
use app\libs\http\Response;

class SaleController extends BaseController {
    public $venta;
    public function __construct() {
        parent::__construct();
        
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }
        if (!isset($_SESSION['usuarioId'])) {
            header("Location: " . APP_URL);
            exit();
        }
    }

    public function index(Request $request, Response $response){
        $this->setCurrentView($request);
        $this->styles = ['app/css/user-index.css']; 
        $this->modules = ['app/js/sale/index.js']; 
        require_once(APP_FILE_TEMPLATE);
    }

    public function create(Request $request, Response $response){
        $this->setCurrentView($request);
        $this->styles = ['app/css/user-index.css'];
        $this->modules = ['app/js/sale/create.js'];
        require_once(APP_FILE_TEMPLATE);
    }

    public function save(Request $request, Response $response){
        $data = $request->getDataFromInput() ?? [];
        $usuarioId = (int)$_SESSION['usuarioId'];

        try {
            $dto = new SaleDto($data);
            $service = new SaleService();
            $service->save($dto, $usuarioId);
            
            $response->setMessage("Venta registrada con éxito.");
            $response->send(true);
        } catch (\Throwable $e) {
            $response->setMessage("Error: " . $e->getMessage());
            $response->send(false);
        }
    }

    public function list(Request $request, Response $response){
        $filters = $request->getDataFromInput() ?? [];
        try {
            $service = new SaleService();
            $result = $service->list($filters);
            $response->setData($result);
            $response->send(true);
        } catch (\Exception $e) {
            $response->setMessage($e->getMessage());
            $response->send(false);
        }
    }

    public function view(Request $request, Response $response){
        $id = (int) $request->getId();
        $service = new SaleService();
        try {
            $this->venta = $service->getById($id);
        } catch (\Exception $e) {
            header("Location: " . APP_URL . "sale");
            exit();
        }
        $this->setCurrentView($request);
        require_once(APP_FILE_TEMPLATE);
    }
}
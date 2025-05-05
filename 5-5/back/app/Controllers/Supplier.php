<?php
// require_once __DIR__ . "/../../vendor/DB.php"; // 修正路徑
// require_once __DIR__ . "/../../vendor/Controller.php";
namespace app\Controllers;
use vendor\Controller;
use app\Models\Supplier as SupplierModels;

class Supplier extends Controller{
    private $su;
    public function __construct() {
        $this->su = new SupplierModels();
    }

    public function getSuppliers(){
        if (isset($_POST['sid'])) {
            $sid = $_POST['sid'];

            return $this->su->getSupplier($sid);
        } else {
            return $this->su->getSuppliers();
        }
    }

    public function newSupplier() {
        $name = $_POST['name'];
        $person = $_POST['person'];
        $phone = $_POST['phone'];
        $address = $_POST['address'];
        // 檢查供應商名稱是否已存在
        $count = $this->su->checkNewName($name);
        if ($count['result'][0]['COUNT(*)'] != 0) {
            return $this->response(409, $count['result'][0]['COUNT(*)']); // 409 Conflict
        }
        return $this->su->newSupplier($name, $person, $phone, $address);
    }

    public function removeSupplier() {
        $sid = $_POST['sid'];

        return $this->su->removeSupplier($sid);
    }

    public function updateSupplier() {
        $sid = $_POST['sid'];
        $name = $_POST['name'];
        $person = $_POST['person'];
        $phone = $_POST['phone'];
        $address = $_POST['address'];
        // 檢查供應商名稱是否已存在 (排除自身)
        $count = $this->su->checkUpdataName($name, $sid);
        if ($count['result'][0]['COUNT(*)'] != 0) {
            return $this->response(409, $count['result'][0]['COUNT(*)']); // 409 Conflict
        }
        return $this->su->updateSupplier($sid, $name, $person, $phone, $address);
    }
}
?>
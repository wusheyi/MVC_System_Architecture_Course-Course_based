<?php
// require_once __DIR__ . "/../../vendor/DB.php"; // 修正路徑
// require_once __DIR__ . "/../../vendor/Controller.php";
namespace app\Controllers;
use vendor\Controller;
use app\Models\Roles as RolesModel;

class Roles extends Controller{
    private $rm;
    public function __construct() {
        $this->rm = new RolesModel();
    }
    public function getRoles(){
        if (isset($_POST['rid'])) {
            $rid = $_POST['rid'];

            return $this->rm->getRole($rid);
        } else {
            return $this->rm->getRoles();
        }
    }

    public function newRole() {
        $name = $_POST['name'];
        // 檢查角色名稱是否已存在
        $count =  $this->rm->checkNewName($name);
        if ($count['result'][0]['COUNT(*)'] != 0) {
            return $this->response(409, '已有此角色'); // 409 Conflict
        }

        return $this->rm->newRole($name);
    }

    public function removeRole() {
        $rid = $_POST['rid'];

        return $this->rm->removeRole($rid);
    }

    public function updateRole() {
        $rid = $_POST['rid'];
        $name = $_POST['name'];
        // 檢查角色名稱是否已存在 (排除自身)
        $count = $this->rm->checkUpdataName($name, $rid);

        if ($count['result'][0]['COUNT(*)'] != 0) {
            return $this->response(409, "角色名稱已存在"); // 409 Conflict
        }

        return $this->rm->updateRole($rid, $name);
    }
}
?>
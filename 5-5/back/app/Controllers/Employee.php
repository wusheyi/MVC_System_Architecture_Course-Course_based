<?php
// require_once __DIR__ . "/../../vendor/DB.php"; // 修正路徑
// require_once __DIR__ . "/../../vendor/Controller.php";
namespace app\Controllers;
use vendor\Controller;
use app\Models\Employee as EmployeeModel;


class Employee extends Controller {
    private $em;
    public function __construct() {
        $this->em = new EmployeeModel();
    }
    public function getUsers() {
        if (isset($_POST['eid'])) {
            $eid = $_POST['eid'];
            return $this->em->getUser($eid);
        } else {
            return $this->em->getUsers();
        }
    }
    
    public function newUser() {
        $eid = $_POST['eid'];
        $name = $_POST['name'];
        $password = $_POST['password'];
        $hire_date = date('Y-m-d');
        $address = $_POST['address'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];

        return $this->em->newUser($eid, $name, $password, $hire_date, $address, $email, $phone);
    }
    
    public function removeUser() {
        $eid = $_POST['eid'];

        return $this->em->removeUser($eid);
    }
    
    public function updateUser() {
        $eid = $_POST['eid'];
        $password = $_POST['password'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];

        return $this->em->updateUser($eid, $password, $email, $phone);
    }
}
?>
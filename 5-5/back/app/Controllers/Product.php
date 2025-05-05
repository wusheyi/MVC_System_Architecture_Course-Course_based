<?php
// require_once __DIR__ . "/../../vendor/DB.php"; // 修正路徑
// require_once __DIR__ . "/../../vendor/Controller.php";
namespace app\Controllers;
use vendor\Controller;
use app\Models\Product as ProductModel;

class Product extends Controller{
    private $pm;
    public function __construct() {
        $this->pm = new ProductModel();
    }
    public function getProducts(){
        if (isset($_POST['pid'])) {
            $pid = $_POST['pid'];
            
            return $this->pm->getProduct($pid);
        } else {
            return $this->pm->getProducts();
        }
    }

    public function newProduct() {
        $pid = $_POST['pid'];
        $name = $_POST['name'];
        $cost = $_POST['cost'];
        $price = $_POST['price'];
        $quantity = $_POST['quantity'];

        return $this->pm->newProduct($pid, $name, $cost, $price, $quantity);
        }

    public function removeProduct() {
        $pid = $_POST['pid'];

        return $this->pm->removeProduct($pid);
    }

    public function updateProduct() {
        $pid = $_POST['pid'];
        $name = $_POST['name'];
        $cost = $_POST['cost'];
        $price = $_POST['price'];
        $quantity = $_POST['quantity'];

        return $this->pm->updateProduct($pid, $name, $cost, $price, $quantity);
    }
}
?>
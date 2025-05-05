<?php

namespace app\Models;
use vendor\DB;

class Product {
    public function getProducts(){
        $sql = "SELECT * FROM `product`";
        $arg = NULL;
        return DB::select($sql, $arg);
    }

    public function getProduct($pid){
        $sql = "SELECT * FROM `product` WHERE `pid`=?";
        $arg = array($pid);
        return DB::select($sql, $arg);
    }

    public function newProduct($pid, $name, $cost, $price, $quantity){
        $sql = "INSERT INTO `product` (`pid`, `name`, `cost`, `price`, `quantity`) VALUES (?, ?, ?, ?, ?)";
        return DB::insert($sql, array($pid, $name, $cost, $price, $quantity));
    }

    public function removeProduct($pid){
        $sql = "DELETE FROM `product` WHERE pid=?";
        return DB::delete($sql, array($pid));        
    }

    public function updateProduct($pid, $name, $cost, $price, $quantity){
        $sql = "UPDATE `product` SET `name`=?, `cost`=?, `price`=?, `quantity`=? WHERE pid=?";
        return DB::update($sql, array($name, $cost, $price, $quantity, $pid));
    }
}
<?php

namespace app\Models;
use vendor\DB;

class Supplier {
    public function getSuppliers(){
        $sql = "SELECT * FROM `supplier`";
        $arg = NULL;
        return DB::select($sql, $arg);
    }

    public function getSupplier($sid){
        $sql = "SELECT * FROM `supplier` WHERE `sid`=?";
        $arg = array($sid);
        return DB::select($sql, $arg);
    }

    public function newSupplier($name, $person, $phone, $address){
        $sql = "INSERT INTO `supplier` (`name`, `person`, `phone`, `address`) VALUES (?, ?, ?, ?)";
        return DB::insert($sql, array($name, $person, $phone, $address));
    }

    public function removeSupplier($sid){
        $sql = "DELETE FROM `supplier` WHERE sid=?";
        return DB::delete($sql, array($sid));        
    }

    public function updateSupplier($sid, $name, $person, $phone, $address){
        $sql = "UPDATE `supplier` SET `name`=?, `person`=?, `phone`=?, `address`=? WHERE sid=?";
        return DB::update($sql, array($name, $person, $phone, $address, $sid));
    }

    public function checkNewName($name){
        $sql = "SELECT COUNT(*) FROM `supplier` WHERE `name` = ?";
        $arg = array($name);
        return DB::select($sql, $arg);
    }

    public function checkUpdataName($name, $sid){
        $sql = "SELECT COUNT(*) FROM `supplier` WHERE `name` = ? AND `sid` != ?";
        $arg = array($name, $sid);
        return DB::select($sql, $arg);
    }
}
    

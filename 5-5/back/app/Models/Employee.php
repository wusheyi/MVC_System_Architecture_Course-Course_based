<?php

namespace app\Models;
use vendor\DB;

class Employee {
    public function getUsers(){
        $sql = "SELECT * FROM `employee`";
        $arg = NULL;
        return DB::select($sql, $arg);
    }

    public function getUser($eid){
        $sql = "SELECT * FROM `employee` WHERE `eid`=?";
        $arg = array($eid);
        return DB::select($sql, $arg);
    }

    public function newUser($eid, $name, $password, $address, $email, $phone){
        $hire_date = date('Y-m-d');
        $sql = "INSERT INTO `employee` (`eid`, `name`, `password`, `hire_date`, `address`, `email`, `phone`) VALUES (?, ?, ?, ?, ?, ?, ?)";
        return DB::insert($sql, array($eid, $name, $password, $hire_date, $address, $email, $phone));
    }

    public function removeUser($eid){
        $sql = "DELETE FROM `employee` WHERE eid=?";
        return DB::delete($sql, array($eid));
    }

    public function updateUser($eid, $password, $email, $phone){
        $sql = "UPDATE `employee` SET `password`=?, `email`=?, `phone`=? WHERE eid=?";
        return DB::update($sql, array($password, $email, $phone, $eid));
    }
}
<?php

namespace app\Models;
use vendor\DB;

class Roles {
    public function getRoles(){
        $sql = "SELECT * FROM `roles`";
        $arg = NULL;
        return DB::select($sql, $arg);
    }

    public function getRole($rid){
        $sql = "SELECT * FROM `roles` WHERE `rid`=?";
        $arg = array($rid);
        return DB::select($sql, $arg);
    }

    public function newRole($name){
        $sql = "INSERT INTO `roles` (`name`) VALUES (?)";
        return DB::insert($sql, array($name));
    }

    public function removeRole($rid){
        $sql = "DELETE FROM `roles` WHERE rid=?";
        return DB::delete($sql, array($rid));        
    }

    public function updateRole($rid, $name){
        $sql = "UPDATE `roles` SET `name`=? WHERE rid=?";
        return DB::update($sql, array($name, $rid));
    }
    public function checkNewName($name){
        $sql = "SELECT COUNT(*) FROM `roles` WHERE `name` = ?";
        $arg = array($name);
        return DB::select($sql, $arg);
    }
    public function checkUpdataName($name, $rid){
        $sql = "SELECT COUNT(*) FROM `roles` WHERE `name` = ? AND `rid` != ?";
        $arg = array($name, $rid);
        return DB::select($sql, $arg);
    }
}
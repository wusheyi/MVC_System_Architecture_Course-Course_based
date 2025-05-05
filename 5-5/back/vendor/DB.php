<?php
// require_once __DIR__ . "/../vendor/Controller.php"; // 確保路徑正確
namespace vendor;
use vendor\Controller;
use PDO;
use PDOException;

class DB extends Controller{
    public static $dbhost;
    public static $dbName;
    public static $dbUser;
    public static $dbPassword;
    private static $conn = null;

    static function connect(){
        if(self::$conn != null)return;
        $dsn = sprintf("mysql:host=%s;dbname=%s;charset=utf8", self::$dbhost, self::$dbName);
        try{
            self::$conn = new PDO($dsn, self::$dbUser, self::$dbPassword);
        } catch(PDOException $e){
            self::$conn = null;
        }
    }

    static function select($sql, $args){
        self::connect();
        if (self::$conn == null) return self::response(500, "無法開啟DB");
        $stmt = self::$conn->prepare($sql);
        $result = $stmt->execute($args);
        if($result){
            $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return self::response(200, "查詢成功", $rows);
        } else {
            return self::response(400, "SQL錯誤");
        }
    }   

    static function insert($sql, $args){
        self::connect();
        if (self::$conn == null) return self::response(500, "無法開啟DB");
        $stmt = self::$conn->prepare($sql);
        $result = $stmt->execute($args);
        if($result){
            $count = $stmt->rowCount();
            return ($count < 1) ? self::response(204, "新增失敗") : self::response(200, "新增成功");
        } else {
            return self::response(400, "SQL錯誤");
        }
    }

    static function delete($sql, $args){
        self::connect();
        if (self::$conn == null) return self::response(500, "無法開啟DB");
        $stmt = self::$conn->prepare($sql);
        $result = $stmt->execute($args);
        if($result){
            $count = $stmt->rowCount();
            return ($count < 1) ? self::response(204, "刪除失敗") : self::response(200, "刪除成功");
        } else {
            return self::response(400, "SQL錯誤");
        }
    }

    static function update($sql, $args){
        self::connect();
        if (self::$conn == null) return self::response(500, "無法開啟DB");
        $stmt = self::$conn->prepare($sql);
        $result = $stmt->execute($args);
        if($result){
            $count = $stmt->rowCount();
            return ($count < 1) ? self::response(204, "更新失敗") : self::response(200, "更新成功");
        } else {
            return self::response(400, "SQL錯誤");
        }
    }
}
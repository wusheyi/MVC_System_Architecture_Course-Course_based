<?php

namespace vendor;

class Router {
    private $routesTable;
    public function __construct() {
        $this->routesTable = array();
    }
    public function register($action, $class, $method) {
        $arr['class'] = $class;
        $arr['method'] = $method;
        $this->routesTable[$action] = $arr;
    }
    public function run($action) {
        if (isset($this->routesTable[$action])) {
            $class = $this->routesTable[$action]['class'];
            $method = $this->routesTable[$action]['method'];
            // require_once __DIR__ . "/../app/Controllers/" . $class . ".php";
            $class = "app\\Controllers\\" . $class;
            $controller = new $class();
            $response = $controller->$method();
            return $response;
        } else {
            return array('error' => '此動作不存在' . $action);
        }
    }
}
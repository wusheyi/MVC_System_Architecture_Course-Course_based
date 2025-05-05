<?php
require_once __DIR__ . "/../vendor/Autoload.php";
// require_once __DIR__ . "/../vendor/Router.php";
// require_once __DIR__ . "/../vendor/DB.php"; // 修正路徑
use vendor\DB;
use vendor\Router;

class Main {
    public static function run() {
        $conf = parse_ini_file(__DIR__ . '/../vendor/.env');
        DB::$dbhost=$conf['dbhost'];
        DB::$dbName=$conf['dbName'];
        DB::$dbUser=$conf['dbUser'];
        DB::$dbPassword=$conf['dbPassword'];

        if (isset($_GET['action'])) {
            $action = $_GET['action'];
        } else {
            $action = "no_action";
        }

        $router = new Router();
        require_once __DIR__ . '/../routes/web.php';

        $response = $router->run($action);

        echo json_encode($response);
    }
}
?>

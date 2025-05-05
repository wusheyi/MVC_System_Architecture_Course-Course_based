<?php

class Autoloader {
    static function myautoLoad($class_Name) {
        $filename = str_replace('\\', '/', $class_Name);
        $filename = __DIR__ . "/../" . $filename . ".php";
        if (file_exists($filename)) {
            include $filename;
        }
    }
}
spl_autoload_register(array('Autoloader', 'myautoLoad'));
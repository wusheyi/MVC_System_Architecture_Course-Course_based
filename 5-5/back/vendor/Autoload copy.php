<?php

function myautoload($class_Name) {
    $filename = str_replace('\\', '/', $class_Name) . '.php';
    if (file_exists($filename)) {
        include $filename;
    } else {
        throw new Exception("Class file not found: " . $filename);
    }
}
spl_autoload_register('myautoload');
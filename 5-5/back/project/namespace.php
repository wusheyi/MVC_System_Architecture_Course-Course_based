<?php

require_once __DIR__ . '/../vendor/Autoload.php';

// $c1 = new namespace1\sub1\MyClass();
// $c2 = new namespace2\sub2\MyClass();
// $c1->hi();
// $c2->hi();

// use namespace1\sub1\MyClass;
// use namespace2\sub2\MyClass;

// $c1 = new MyClass();
// $c2 = new MyClass();
// $c1->hi();
// $c2->hi();

use namespace1\sub1\MyClass1 as Mc1;
use namespace2\sub2\MyClass2 as Mc2;
$c1 = new Mc1();
$c2 = new Mc2();
$c1->hi();
$c2->hi();

// use namespace1\sub1 as ns1;
// use namespace2\sub2 as ns2;
// $c1 = new ns1\MyClass1();
// $c2 = new ns2\MyClass2();
// $c1->hi();
// $c2->hi();
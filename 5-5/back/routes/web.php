<?php

// Employee
$router->register('getUsers','Employee','getUsers');
$router->register('newUser','Employee','newUser');
$router->register('removeUser','Employee','removeUser');
$router->register('updateUser','Employee','updateUser');
// Product
$router->register('getProducts','Product','getProducts');
$router->register('newProduct','Product','newProduct');
$router->register('removeProduct','Product','removeProduct');
$router->register('updateProduct','Product','updateProduct');
// Roles
$router->register('getRoles','Roles','getRoles');
$router->register('newRole','Roles','newRole');
$router->register('removeRole','Roles','removeRole');
$router->register('updateRole','Roles','updateRole');
// Supplier
$router->register('getSuppliers','Supplier','getSuppliers');
$router->register('newSupplier','Supplier','newSupplier');
$router->register('removeSupplier','Supplier','removeSupplier');
$router->register('updateSupplier','Supplier','updateSupplier');

?>
import startPage from './startPage.js';
import employeeInfo from './employee/employeeInfo.js';
import productInfo from './product/productInfo.js';
import rolesInfo from './roles/rolesInfo.js';
import supplierInfo from './supplier/supplierInfo.js';

window.onload = function(){
    document.getElementById("root").innerHTML = startPage();
    document.getElementById("employee").onclick = function(){
        employeeInfo();
    }
    document.getElementById("product").onclick = function(){
        productInfo();
    }
    document.getElementById("roles").onclick = function(){
        rolesInfo();
    }
    document.getElementById("supplier").onclick = function(){
        supplierInfo();
    }
}
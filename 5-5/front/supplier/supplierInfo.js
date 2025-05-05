import showInsertSupplierPage from "./showInsertSupplierPage.js";
import showUpdateSupplierPage from "./showUpdateSupplierPage.js";
import doDeleteSupplier from "./doDeleteSupplier.js";
import doSelect from "../Models/doSelect.js";

export default async function supplierInfo(){

    const rows = await doSelect(null, 'getSuppliers');
    
    let str = `<table border="1">`;
    str += `<tr><td>供應商編號</td><td>名稱</td><td>聯絡人</td><td>電話</td><td>地址</td><td><button id='newSupplier'>新增供應商</button></td></tr>`;
    rows.forEach(element => {
        str += `<tr>`;
        str += `<td name='sid'>` + element['sid'] + `</td>`;
        str += `<td>` + element['name'] + `</td>`;
        str += `<td>` + element['person'] + `</td>`;
        str += `<td>` + element['phone'] + `</td>`;
        str += `<td>` + element['address'] + `</td>`;
        str += `<td><button name='updateSupplier'>修改</button><button name='deleteSupplier'>刪除</button></td>`;
        str += `</tr>`;
    });
    str += `</table>`;
    document.getElementById("content").innerHTML=str;

    document.getElementById("newSupplier").onclick = function(){
        showInsertSupplierPage();
    }
    const sids = Array.from(document.querySelectorAll("td[name='sid']"));

    const updateButtons = document.getElementsByName("updateSupplier");
    for(let i=0; i<updateButtons.length; i++){
        updateButtons[i].onclick = function(){
            console.log(sids[i].innerText);
            showUpdateSupplierPage(sids[i].innerText);
        };
    }

    const deleteButtons = document.getElementsByName("deleteSupplier");
    for(let i=0; i<deleteButtons.length; i++){
        deleteButtons[i].onclick = function(){
            doDeleteSupplier(sids[i].innerText);
        };
    }
}

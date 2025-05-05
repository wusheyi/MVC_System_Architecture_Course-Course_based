import showInsertPage from "./showInsertPage.js";
import showUpdatePage from "./showUpdatePage.js";
import doDelete from "./doDeleteEmployee.js";
import doSelect from "../Models/doSelect.js";

export default async function employeeInfo(){
    const rows = await doSelect(null, "getUsers");
    
    let str = `<table border="1">`;
    str += `<tr><td>員工編號</td><td>名稱</td><td>密碼</td><td>雇用日期</td><td>地址</td><td>Email</td><td>電話</td><td><button id='newUser'>新增員工</button></td></tr>`;
    rows.forEach(element => {
        str += `<tr>`;
        str += `<td name='eid'>` + element['eid'] + `</td>`;
        str += `<td name='name'>` + element['name'] + `</td>`;
        str += `<td name='password'>` + element['password'] + `</td>`;
        str += `<td name='hire_date'>` + element['hire_date'] + `</td>`;
        str += `<td name='address'>` + element['address'] + `</td>`;
        str += `<td name='email'>` + element['email'] + `</td>`;
        str += `<td name='phone'>` + element['phone'] + `</td>`;
        str += `<td><button name='updateUser'>修改</button><button name='deleteUser'>刪除</button></td>`;
        str += `</tr>`;
    });
    str += `</table>`;
    document.getElementById("content").innerHTML=str;

    document.getElementById("newUser").onclick = function(){
        showInsertPage();
    }
    const eids = Array.from(document.querySelectorAll("td[name='eid']"));

    const updateButtons = document.getElementsByName("updateUser");
    for(let i=0; i<updateButtons.length; i++){
        updateButtons[i].onclick = function(){
            console.log(eids[i].innerText);
            showUpdatePage(eids[i].innerText);
        };
    }

    const deleteButtons = document.getElementsByName("deleteUser");
    for(let i=0; i<deleteButtons.length; i++){
        deleteButtons[i].onclick = function(){
            doDelete(eids[i].innerText);
        };
    }
}

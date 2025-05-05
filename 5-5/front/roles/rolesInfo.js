import showInsertRolePage from "./showInsertRolePage.js";
import showUpdateRolePage from "./showUpdateRolePage.js";
import doDeleteRole from "./doDeleteRole.js";
import doSelect from "../Models/doSelect.js";

export default async function rolesInfo(){

    const rows = await doSelect(null, "getRoles")

    let str = `<table border="1">`;
    str += `<tr><td>角色編號</td><td>名稱</td><td><button id='newRole'>新增角色</button></td></tr>`;
    rows.forEach(element => {
        str += `<tr>`;
        str += `<td name='rid'>` + element['rid'] + `</td>`;
        str += `<td>` + element['name'] + `</td>`;
        str += `<td><button name='updateRole'>修改</button><button name='deleteRole'>刪除</button></td>`;
        str += `</tr>`;
    });
    str += `</table>`;
    document.getElementById("content").innerHTML=str;

    document.getElementById("newRole").onclick = function(){
        showInsertRolePage();
    }
    const rids = Array.from(document.querySelectorAll("td[name='rid']"));

    const updateButtons = document.getElementsByName("updateRole");
    for(let i=0; i<updateButtons.length; i++){
        updateButtons[i].onclick = function(){
            console.log(rids[i].innerText);
            showUpdateRolePage(rids[i].innerText);
        };
    }

    const deleteButtons = document.getElementsByName("deleteRole");
    for(let i=0; i<deleteButtons.length; i++){
        deleteButtons[i].onclick = function(){
            doDeleteRole(rids[i].innerText);
        };
    }
}

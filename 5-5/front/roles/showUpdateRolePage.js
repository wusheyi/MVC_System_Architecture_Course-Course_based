import doUpdateRole from './doUpdateRole.js';
import doSelect from '../Models/doSelect.js';

export default async function showUpdateRolePage(rid) {
    let data = {
        "rid": rid,
    };
    console.log(data);

    // 等待 doSelect 的結果
    const rows = await doSelect(data, "getRoles");    
    
    const row = rows[0];
    let str = `角色編號：<input type="text" id="rid" value="` + row['rid'] + `" readonly><br>`;
    str += `名稱：<input type="text" id="name" value="` + row['name'] + `"><br>`;
    str += `<button id="doUpdateRole">修改</button>`;

    document.getElementById("content").innerHTML = str;
    document.getElementById("doUpdateRole").onclick = function () {
        doUpdateRole();
    };
}
import doUpdate from './doUpdateEmployee.js';
import doSelect from '../Models/doSelect.js';

export default async function showUpdatePage(eid){
    let data = {
        "eid": eid,
    };
    console.log(data);

    const rows = await doSelect(data, "getUsers")
    
    const row = rows[0];
    let str = `員工編號：<input type="text" id="eid" value="` + row['eid'] + `" readonly><br>`;
        str += `名稱：<input type="text" id="name" value="` + row['name'] + `"><br>`;
    str += `密碼：<input type="text" id="password" value="` + row['password'] + `"><br>`;
    str += `雇用日期：<input type="text" id="hire_date" value="` + row['hire_date'] + `"><br>`;
    str += `地址：<input type="text" id="address" value="` + row['address'] + `"><br>`;
    str += `Email：<input type="text" id="email" value="` + row['email'] + `"><br>`;
    str += `電話：<input type="text" id="phone" value="` + row['phone'] + `"><br>`;
    str += `<button id="doUpdate">修改</button>`;

    document.getElementById("content").innerHTML = str;
    document.getElementById("doUpdate").onclick = function(){
        doUpdate()
    }
}

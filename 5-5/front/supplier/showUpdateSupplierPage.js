import doUpdateSupplier from './doUpdateSupplier.js';
import doSelect from '../Models/doSelect.js';

export default async function showUpdateSupplierPage(sid){
    let data = {
        "sid": sid,
    };
    console.log(data);
    const rows = await doSelect(data, 'getSuppliers');
    
    const row = rows[0];
    let str = `供應商編號：<input type="text" id="sid" value="` + row['sid'] + `" readonly><br>`;
    str += `名稱：<input type="text" id="name" value="` + row['name'] + `"><br>`;
    str += `聯絡人：<input type="text" id="person" value="` + row['person'] + `"><br>`;
    str += `電話：<input type="text" id="phone" value="` + row['phone'] + `"><br>`;
    str += `地址：<input type="text" id="address" value="` + row['address'] + `"><br>`;
    str += `<button id="doUpdateSupplier">修改</button>`;

    document.getElementById("content").innerHTML = str;
    document.getElementById("doUpdateSupplier").onclick = function(){
        doUpdateSupplier()
    }
}

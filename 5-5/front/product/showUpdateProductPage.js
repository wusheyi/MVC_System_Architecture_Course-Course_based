import doUpdateProduct from './doUpdateProduct.js';
import doSelect from '../Models/doSelect.js';

export default async function showUpdateProductPage(pid){
    let data = {
        "pid": pid,
    };
    console.log(data);

    const rows = await doSelect(data, 'getProducts');
    console.log(rows);

    const row = rows[0];
    let str = `產品編號：<input type="text" id="pid" value="` + row['pid'] + `" readonly><br>`;
    str += `名稱：<input type="text" id="name" value="` + row['name'] + `"><br>`;
    str += `成本：<input type="text" id="cost" value="` + row['cost'] + `"><br>`;
    str += `價格：<input type="text" id="price" value="` + row['price'] + `"><br>`;
    str += `數量：<input type="text" id="quantity" value="` + row['quantity'] + `"><br>`;
    str += `<button id="doUpdateProduct">修改</button>`;

    document.getElementById("content").innerHTML = str;
    document.getElementById("doUpdateProduct").onclick = function(){
        doUpdateProduct()
    }
}

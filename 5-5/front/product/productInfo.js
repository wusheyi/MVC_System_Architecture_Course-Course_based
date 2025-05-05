import showInsertProductPage from "./showInsertProductPage.js";
import showUpdateProductPage from "./showUpdateProductPage.js";
import doDeleteProduct from "./doDeleteProduct.js";
import doSelect from "../Models/doSelect.js";

export default async function productInfo(){
    const rows = await doSelect(null, 'getProducts');
    
    let str = `<table border="1">`;
    str += `<tr><td>產品編號</td><td>名稱</td><td>成本</td><td>價格</td><td>數量</td><td><button id='newProduct'>新增產品</button></td></tr>`;
    rows.forEach(element => {
        str += `<tr>`;
        str += `<td name='pid'>` + element['pid'] + `</td>`;
        str += `<td>` + element['name'] + `</td>`;
        str += `<td>` + element['cost'] + `</td>`;
        str += `<td>` + element['price'] + `</td>`;
        str += `<td>` + element['quantity'] + `</td>`;
        str += `<td><button name='updateProduct'>修改</button><button name='deleteProduct'>刪除</button></td>`;
        str += `</tr>`;
    });
    str += `</table>`;
    document.getElementById("content").innerHTML=str;

    document.getElementById("newProduct").onclick = function(){
        showInsertProductPage();
    }
    const pids = Array.from(document.querySelectorAll("td[name='pid']"));

    const updateButtons = document.getElementsByName("updateProduct");
    for(let i=0; i<updateButtons.length; i++){
        updateButtons[i].onclick = function(){
            console.log(pids[i].innerText);
            showUpdateProductPage(pids[i].innerText);
        };
    }

    const deleteButtons = document.getElementsByName("deleteProduct");
    for(let i=0; i<deleteButtons.length; i++){
        deleteButtons[i].onclick = function(){
            doDeleteProduct(pids[i].innerText);
        };
    }
}

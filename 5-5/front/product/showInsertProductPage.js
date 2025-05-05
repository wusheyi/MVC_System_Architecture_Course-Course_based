import doInsertProduct from './doInsertProduct.js';

export default function showInsertProductPage() {
    console.log('newProduct');
    const html = `
            <div>編號:<input type="text" id="pid"> </input> </div>
            <div>名稱:<input type="text" id="name"> </input> </div>
            <div>成本:<input type="text" id="cost"> </input> </div>
            <div>價格:<input type="text" id="price"> </input> </div>
            <div>數量:<input type="text" id="quantity"> </input> </div>
            <button id="star">開始新增</button>
            `
        document.getElementById('content').innerHTML =  html
        document.getElementById('star').onclick = function () {
            doInsertProduct();
        };
}

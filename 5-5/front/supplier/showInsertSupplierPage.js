import doInsertSupplier from './doInsertSupplier.js';

export default function showInsertSupplierPage() {
    console.log('newSupplier');
    const html = `
            <div>名稱:<input type="text" id="name"> </input> </div>
            <div>聯絡人:<input type="text" id="person"> </input> </div>
            <div>電話:<input type="text" id="phone"> </input> </div>
            <div>地址:<input type="text" id="address"> </input> </div>
            <button id="star">開始新增</button>
            `
        document.getElementById('content').innerHTML =  html
        document.getElementById('star').onclick = function () {
            doInsertSupplier();
        };
}

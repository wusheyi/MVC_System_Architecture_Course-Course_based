import doInsert from './doInsertEmployee.js';

export default function showInsertPage() {
    console.log('newUser');
    const html = `
            <div>員工編號:<input type="text" id="eid"> </input> </div>
            <div>名稱:<input type="text" id="name"> </input> </div>
            <div>密碼:<input type="text" id="password"> </input> </div>
            <div>雇用日期:<input type="text" id="hire_date"> </input> </div>
            <div>地址:<input type="text" id="address"> </input> </div>
            <div>Email:<input type="text" id="email"> </input> </div>
            <div>電話:<input type="text" id="phone"> </input> </div>
            <button id="star">開始新增</button>
            `
        document.getElementById('content').innerHTML =  html
        document.getElementById('star').onclick = function () {
            doInsert();
        };
}

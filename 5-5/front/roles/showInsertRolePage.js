import doInsertRole from './doInsertRole.js';

export default function showInsertRolePage() {
    console.log('newRole');
    const html = `
            <div>名稱:<input type="text" id="name"> </input> </div>
            <button id="star">開始新增</button>
            `
        document.getElementById('content').innerHTML =  html
        document.getElementById('star').onclick = function () {
            doInsertRole();
        };
}
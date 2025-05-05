import doUpdate from '../Models/doUpdate.js';

export default function doUpdateEmployee() {
    let data = {
        eid: document.getElementById('eid').value,
        name: document.getElementById('name').value,
        password: document.getElementById('password').value,
        hire_date: document.getElementById('hire_date').value,
        address: document.getElementById('address').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
    }
    console.log(data);

    doUpdate(data, "updateUser")
}

import doUpdate from '../Models/doUpdate.js';

export default function doUpdateRole() {
    let data = {
        rid: document.getElementById('rid').value,
        name: document.getElementById('name').value,
    }
    console.log(data);

    doUpdate(data, "updateRole")
}
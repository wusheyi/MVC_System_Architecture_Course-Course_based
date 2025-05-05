import doUpdate from "../Models/doUpdate.js";

export default function doUpdateSupplier() {
    let data = {
        sid: document.getElementById('sid').value,
        name: document.getElementById('name').value,
        person: document.getElementById('person').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
    }
    console.log(data);
    
    doUpdate(data, 'updateSupplier')
}
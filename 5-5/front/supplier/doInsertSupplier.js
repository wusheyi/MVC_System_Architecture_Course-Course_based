import doInsert from '../Models/doInsert.js';

export default function doInsertSupplier() {
    let data = {
        name: document.getElementById('name').value,
        person: document.getElementById('person').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
    }
    console.log(data);
    
    doInsert(data, 'newSupplier')
}

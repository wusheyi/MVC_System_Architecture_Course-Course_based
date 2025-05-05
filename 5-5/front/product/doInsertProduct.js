import doInsert from '../Models/doInsert.js';

export default function doInsertProduct() {
    let data = {
        pid: document.getElementById('pid').value,
        name: document.getElementById('name').value,
        cost: document.getElementById('cost').value,
        price: document.getElementById('price').value,
        quantity: document.getElementById('quantity').value,
    }
    console.log(data);

    doInsert(data, 'newProduct');
}

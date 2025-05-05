import doUpdate from "../Models/doUpdate.js";

export default function doUpdateProduct() {
    let data = {
        pid: document.getElementById('pid').value,
        name: document.getElementById('name').value,
        cost: document.getElementById('cost').value,
        price: document.getElementById('price').value,
        quantity: document.getElementById('quantity').value,
    }
    console.log(data);

    doUpdate(data, 'updateProduct');
}

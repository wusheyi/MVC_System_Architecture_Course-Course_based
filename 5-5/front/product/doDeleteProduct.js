import doDelete from '../Models/doDelete.js';

export default function doDeleteProduct(pid) {
    let data = {
        "pid": pid,
    };

    doDelete(data, 'removeProduct');
}

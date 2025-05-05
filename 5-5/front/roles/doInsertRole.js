import doInsert from "../Models/doInsert.js";

export default function doInsertRole() {
    let data = {
        name: document.getElementById('name').value,
    }
    console.log(data);

    doInsert(data, "newRole")
}
import doDelete from "../Models/doDelete.js";

export default function doDeleteRole(rid) {
    let data = {
        "rid": rid,
    };

    doDelete(data, "removeRole")
}
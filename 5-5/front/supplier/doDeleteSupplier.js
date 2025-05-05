import doDelete from "../Models/doDelete.js";

export default function doDeleteSupplier(sid) {
    let data = {
        "sid": sid,
    };
    console.log(data);

    doDelete(data, "removeSupplier")
}
import doDelete from "../Models/doDelete.js";

export default function doDeleteEmployee(eid) {
    let data = {
        "eid": eid,
    };

    doDelete(data, "removeUser");
}

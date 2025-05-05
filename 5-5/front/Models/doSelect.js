import getHttp from "../gethttp.js";

export default async function doSelect(data, status) {
    let path = getHttp() + status;

    try {
        let res = null;
        if (data == null) {
            res = await axios.post(path);
        }   else {
            res = await axios.post(path, Qs.stringify(data));
        }

        let response = res['data'];
        console.log(response);
        switch (response['status']) {
            case 200:
                console.log(response['result']);
                return response['result']; // 返回結果
            default:
                document.getElementById("content").innerHTML = response['message'];
                return null;
        }
    } catch (err) {
        console.error(err);
        document.getElementById("content").innerHTML = err;
        return null;
    }
}
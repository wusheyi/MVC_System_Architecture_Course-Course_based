import getHttp from '../gethttp.js';

export default function doDelete(data, status) {
    let path = getHttp() + status;
    console.log(path);
    
    axios.post(path, Qs.stringify(data))
    .then(res => {
        console.log(res)
        let response = res['data'];
        document.getElementById("content").innerHTML = response['message'];
    })
    .catch(err => {
        console.error(err);
        document.getElementById("content").innerHTML = err;
    })
}
import axios from "axios";

axios.defaults.headers = {}

// 错误码管控
function responseCode(code, info) {

}

// 请求封装
export const Http = (url, type, params) => {
    return new Promise((resolve, reject) => {
        if (type === 'get' || type === 'GET') {
            axios.get(url, {
                params,
            }).then(res => {
                resolve(res.data)
                responseCode(res.data.code, res.data.msg)
            }).catch(err => {
                reject(err)
            })
        } else {
            axios.post(
                url,
                params // QS.stringify( params ),
            ).then(res => {
                resolve(res.data)
                responseCode(res.data.code, res.data.msg)
            }).catch(err => {
                reject(err)
            })
        }
    })
}
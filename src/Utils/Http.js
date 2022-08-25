import axios from "axios";
// import { message } from 'antd';

axios.defaults.headers = {
    'authorization': typeof localStorage.k ==='undefined'?'': localStorage.k
}

// 错误码管控
function responseCode(code, info) {
    if( code==='401' ){
        // message.destroy();
        // message.error('登录超时,请重新登录.')
        localStorage.clear();
    }
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
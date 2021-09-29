import axios from "axios";
//请求超时时间
axios.defaults.timeout = 5000;
//请求头
// axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
//该地址不支持跨域请求，如要跨域要在后端配置拦截器才可支持跨域
//axios.defaults.baseURL = "http://localhost:8081";
//该地址支持跨域请求，需先在config下的index.js的proxyTable属性配置才行
//POST传参序列化
axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.resolve(error.response);
    }
);
export function postData(url, data) {
    return axios({
        method: "post",
        url,
        data: data
    }).then(response => {
        if (response && response.status === 200) {
            if (response.data.code === 0 || response.data.code === 200) {
                if (response.data.data !== null && response.data.data !== undefined) {
                    return response.data.data;
                } else if (response.data.rows !== null && response.data.rows !== undefined) {
                    return response.data.rows;
                } else {
                    return response.data.msg;
                }
            } else {
                return "请求超时,接口异常";
            }
        }
    });
}
export function getData(url, params) {
    return axios({
        method: "get",
        url,
        params
    }).then(response => {
        if (response.status === 200) {
            if (response.data.code === 0 || response.data.code === 200) {
                if (response.data.data !== null && response.data.data !== undefined) {
                    return response.data.data;
                } else if (response.data.rows !== null && response.data.rows !== undefined) {
                    return response.data.rows;
                } else {
                    return response.data.msg;
                }
            } else {
                return "请求超时,接口异常";
            }
        }
    });
}
export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params)
            .then(
                response => {
                    resolve(response.data);
                },
                err => {
                    reject(err);
                }
            )
            .catch(error => {
                reject(error);
            });
    });
}
//封装请求，在组件中调用该方法即可
export default {
    axios,
    fetch
};

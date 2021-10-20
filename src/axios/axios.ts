import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

// 获取host
function renderBaseUrl(config:AxiosRequestConfig):AxiosRequestConfig{
    const envs = import.meta.env;
    if(envs.MODE === 'development'){
        if(config.url.indexOf('auth') !== -1){
            return {
                ...config,
                url: '/api/' + config.url
            }
        }
        return {
            ...config,
            url: '/mock/' + config.url
        }
    }
    return {
        ...config,
        baseURL: '/api/'
    }
}
export const service: AxiosInstance = axios.create({
    baseURL: '/',
    timeout: 10000, // 设置统一的超时时长
    // `transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    transformRequest: [function (data, headers) {
        // 对 data 进行任意转换处理
        // return qs.stringify(data);
        if (data instanceof FormData) return data
        return JSON.stringify(data)
    }],
    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [function (data) {
        // 对 data 进行任意转换处理
        return data;

    }],
    // `headers` 是即将被发送的自定义请求头
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json;charset=utf-8'
    },
    // `params` 是即将与请求一起发送的 URL 参数
    // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
    params: {
    },
    // `data` 是作为请求主体被发送的数据
    // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
    // 在没有设置 `transformRequest` 时，必须是以下类型之一：
    // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // - 浏览器专属：FormData, File, Blob
    // - Node 专属： Stream
    data: {

    },
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: false, // default
});

service.interceptors.request.use(
    config => {
        config.headers.Authorization = 'zhangpingcloud';
        return renderBaseUrl(config);
    },
    error => {
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        }
        return response;
    },
    ({response}) => {
        const { Message } = window as any;
        if(Message){
            if(!response){
                Message.error('网络开小差了，请稍后重试')
                throw new Error('网络开小差了，请稍后重试')
            }else{
                const errInfo = JSON.parse(response.data);
                Message.error(errInfo.message)
                throw new Error(errInfo)
            }
        }
        // switch(error.status){
        //     case 400: 
                
        // }
        return Promise.reject(JSON.parse(response.data));
    }
);

export const get: <T, U>(url: string, params?: T) => Promise<U> = <T, U>(url: string, params?: T): Promise<U> => {
    return new Promise((resolve, reject) => {
        resolve(service.get(url, {
            params
        }))
    })
}

export const post: <T, U>(url: string, params?: T) => Promise<U> = <T, U>(url: string, params?: T): Promise<U> => {
    return new Promise((resolve, reject) => {
        resolve(service.post(url, {
            ...params
        }))
    })
}
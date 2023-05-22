import axios, { type AxiosPromise, AxiosRequestConfig } from 'axios'

export default function<T>(options: AxiosRequestConfig): AxiosPromise<T> {
    const instance = axios.create({
        baseURL: '/'
    })
    instance.interceptors.request.use(config => {
        return config
    })
    instance.interceptors.response.use(res => {
        if (res.data.success) {
            if (res.data.msg && res.config.method?.toUpperCase() !== 'GET') {
                console.log(`success: ${res.data.msg}`)
            }
            return res
        } else {
            if (res.data.msg) {
                console.log(`error: ${res.data.msg}`)
            }
            return Promise.reject(res)
        }
    }, error => {
        return Promise.reject(error)
    })
    return instance(options)
}
import axios from 'axios'

const http = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
})

http.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.token = token
        }
        return config
    },
    (error) => Promise.reject(error),
)

http.interceptors.response.use(
    (response) => response.data,
    (error) => {
        const message = error.response?.data?.message || error.message || '请求失败'
        return Promise.reject(new Error(message))
    },
)

export const request = (options) => http(options)

export const get = (url, params, config = {}) => http({ url, method: 'get', params, ...config })

export const post = (url, data, config = {}) => http({ url, method: 'post', data, ...config })

export default http

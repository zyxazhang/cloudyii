import http from './axios'

export default {
    userLogin: (data) => http.post('/user/login', data),

    userRegister: (data) => http.post('/user/register', data),

    getArticleList: (params) => http.get('/article', params),
}

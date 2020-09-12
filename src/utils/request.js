import axios from 'axios'

// 1. 创建一个自定义的 axios 对象
const request = axios.create({
    // 请求‘db.json’ => 通过axios => 变成‘/dev-api/db.json’ => 通过代理转发(vue.config.js)后变为‘http://localhost:8001/db.json’
    // baseURL: '/dev-api',
    baseURL: process.env.VUE_APP_BASE_API, // 注意：当前后端代码放到一起进行部署时，需要注释此行。
    timeout: 5000 // 请求超时时间：5000毫秒
})

// 发送请求（注意：'/db.json' 默认是在项目的 public 目录下进行查找。）
// request.get('/db.json').then(response => {
//     const data = response.data
//     console.log(data)
// })

// 请求拦截器
request.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})
// 响应拦截器
request.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject(error)
})

// 2. 导出自定义的 axios 对象
export default request

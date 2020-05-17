// 引入 request.js（注意：‘@’代表当前项目的 /src 目录，脚手架中已配置。）
import request from '@/utils/request'

const BASE_URI = process.env.VUE_APP_BASE_API

// request({
//     method: 'get',
//     url: '/db.json'
// }).then(response => {
//     console.log(response.data)
// })

// 导出对象
export default {
    getList() {
        const req = request({
            method: 'get',
            url: '/db.json'
        })
        console.log(req) // Promise.then()
        return req
    }
}

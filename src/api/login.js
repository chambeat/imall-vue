import request from '@/utils/request'

// 导出 login 方法
export function login(username, password) {
    return request({
        url: '/user/login',
        method: 'post',
        data: {
            username, // 即 username: username
            password
        }
    })
}

// 导出 getUserInfo 方法
export function getUserInfo(token) {
    return request({
        url: `/user/info/${token}`,
        method: 'get'
    })
}
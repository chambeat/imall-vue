import router from './router'
import { getUserInfo } from './api/login'

/* 使用'路由守卫'实现权限校验 */
router.beforeEach((to, from, next) => {
    // 获取 token
    const token = localStorage.getItem('mxg-msm-token')

    /* 情况一：请求登录页 */
    if (to.path === '/login') {
        next()
    } else {
        /* 情况二：请求非登录页 */
        // 1. 没有 token
        if (!token) {
            next({ path: '/login' })
        } else {
            // 2. 有 token
            // 获取用户信息
            const userInfo = localStorage.getItem('mxg-msm-user')
            // 2.1 没有用户信息：通过 token 获取用户信息
            if (!userInfo) {
                getUserInfo(token).then(response => {
                    const resp = response.data
                    // 2.1.1 获取到：保存数据到本地，并放行
                    if (resp.flag) {
                        localStorage.setItem('mxg-msm-user', JSON.stringify(resp.data))
                        next()
                    } else {
                        // 2.1.2 没有获取到：重新登录
                        next({ path: '/login' })
                    }
                })
            } else {
                // 2.2 有用户信息：放行
                next()
            }
        }
    }
})

module.exports = {
    /* 开发环境的相关配置 */
    devServer: {
        port: 8888, // 端口号（若端口被占用，则自动+1。）
        host: "localhost", // 主机名（手机真机则为 0.0.0.0）
        https: false, // 协议
        open: true, // 启动服务时是否自动打开浏览器
        // 解决跨域问题：配置代理
        /*
        proxy: {
            // '/dev-api'或'/prod-api': {
            [process.env.VUE_APP_BASE_API]: {
                // 动态获取目标服务器地址，用于代理访问
                target: process.env.VUE_APP_SERVICE_URL,
                // 开启代理服务器
                changeOrigin: true,
                // 替换指定路径
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: '' // 将请求地址前缀替换为空
                }
            }
        }
        */
    },

    lintOnSave: false, // 关闭格式检查
    productionSourceMap: false // 打包时不生成 .map 文件，节省打包时间
}
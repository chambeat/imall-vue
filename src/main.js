import Vue from "vue";
// 1. 引入 ElementUI（注意：在 Vue 后和 App 前引入）
import ElementUI from "element-ui";
// 2. 引入 ElementUI 的样式
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";
// 导入自定义的图标样式（从'阿里矢量图标库'中下载）
import './assets/fonts/iconfont.css'

// 3. 使用 ElementUI
Vue.use(ElementUI);
Vue.config.productionTip = process.env.NODE_ENV === 'production';
console.log('当前为 ' + process.env.NODE_ENV + ' 环境'); // 输出当前的环境（开发环境：development,  生产环境：production）
// 测试环境变量是否已配置成功
console.log(process.env.VUE_APP_SERVICE_URL)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

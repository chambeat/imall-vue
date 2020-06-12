import Vue from "vue";
import VueRouter from "vue-router";
// import Login from "../views/login/index"
/* 
  以下写法默认会到‘../views/login/’目录下查找名为‘index.vue’的文件。
  等价于 '../views/login/index.vue' 和 '../views/login/index' 。
*/
import Login from "../views/login"
import Layout from "@/components/Layout"

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  // {
  //   path: "/",
  //   redirect: "/login"
  // },
  {
    path: '/',
    component: Layout
  }
];

const router = new VueRouter({
  mode: "history", // mode: "history" 是否配置的区别在于：url 末尾有无‘#/’(哈希)。
  base: process.env.BASE_URL,
  routes
});

export default router;

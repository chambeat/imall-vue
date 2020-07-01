import Vue from "vue";
import VueRouter from "vue-router";
// import Login from "../views/login/index"
/* 
  以下写法默认会到‘../views/login/’目录下查找名为‘index.vue’的文件。
  等价于 '../views/login/index.vue' 和 '../views/login/index' 。
*/
import Login from "../views/login"
import Layout from "@/components/Layout"
import Goods from '@/views/goods'
import Order from '@/views/order'
import User from '@/views/user'
import Authority from '@/views/authority'
import Statistics from '@/views/statistics'
import Monitor from '@/views/monitor'

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: '/',
    component: Layout,
    redirect: '/goods',
    children: [{
      path: '/goods',
      component: Goods,
      meta: { title: '商品列表' }
    }]
  },
  {
    path: '/order',
    component: Layout,
    children: [{
      path: '/',
      component: Order,
      meta: { title: '订单管理' }
    }]
  },
  {
    path: '/user',
    component: Layout,
    children: [{
      path: '/',
      component: User,
      meta: { title: '用户管理' }
    }]
  },
  {
    path: '/authority',
    component: Layout,
    children: [{
      path: '/',
      component: Authority,
      meta: { title: '权限管理' }
    }]
  },
  {
    path: '/statistics',
    component: Layout,
    children: [{
      path: '/',
      component: Statistics,
      meta: { title: '数据统计' }
    }]
  },
  {
    path: '/monitor',
    component: Layout,
    children: [{
      path: '/',
      component: Monitor,
      meta: { title: '访问监控' }
    }]
  }
];

const router = new VueRouter({
  mode: "history", // mode: "history" 是否配置的区别在于：url 末尾有无‘#/’(哈希)。
  base: process.env.BASE_URL,
  routes
});

export default router;

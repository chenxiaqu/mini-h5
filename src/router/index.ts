/*
 * @Author: 庞昭昭
 * @Date: 2021-06-25 14:23:34
 * @LastEditTime: 2021-07-06 15:21:45
 * @LastEditors: 庞昭昭
 * @Description: 路由配置
 * @FilePath: \mini-h5\src\router\index.ts
 * 记得注释
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import('@/views/Home/Home.vue')
const Cart = () => import('@/views/Cart/Cart.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Root',
    redirect: '/Home'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

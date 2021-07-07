/*
 * @Author: 庞昭昭
 * @Date: 2021-06-25 14:23:34
 * @LastEditTime: 2021-07-07 14:49:05
 * @LastEditors: 庞昭昭
 * @Description: 路由配置
 * @FilePath: \mini-h5\src\router\index.ts
 * 记得注释
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import('@/views/Home/Home.vue')
const Category = () => import('@/views/Category/Category.vue')
const Cart = () => import('@/views/Cart/Cart.vue')
const Mine = () => import('@/views/Mine/Mine.vue')

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
    path: '/Category',
    name: 'Category',
    component: Category
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/Mine',
    name: 'Mine',
    component: Mine
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

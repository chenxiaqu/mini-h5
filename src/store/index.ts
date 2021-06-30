/*
 * @Author: 庞昭昭
 * @Date: 2021-06-25 14:23:34
 * @LastEditTime: 2021-06-30 16:55:11
 * @LastEditors: 庞昭昭
 * @Description:
 * @FilePath: \mini-h5\src\store\index.ts
 * 记得注释
 */
import { Commit, createStore } from 'vuex'
import Cart from '@/model/Cart'
import User from '@/model/User'
import Line from '@/model/Line'
export interface State {
  cart: Cart
  userInfo: User
}

export default createStore<State>({
  state: {
    cart: new Cart(), // 购物车
    userInfo: new User() // 用户数据
  },
  mutations: {
    // 设置购物车
    setCart(state: State, cart: Cart) {
      state.cart = cart
    },
    // 设置用户信息
    setUserInfo(state: State, userInfo: User) {
      state.userInfo = userInfo
    }
  },
  actions: {
    // 设置购物车
    setCart(context: { commit: Commit }, cart: Cart) {
      context.commit('setCart', cart)
    },
    // 设置用户信息
    setUserInfo(context: { commit: Commit }, userInfo: User) {
      context.commit('setUserInfo', userInfo)
    }
  },
  getters: {
    // 计算购物车选中商品数量
    cartLinesSelectQtySum: (state: State) => {
      let selectedNum: number = 0
      state.cart.lines.forEach((line: Line) => {
        if (line.selected) selectedNum += line.qty
      })
      return selectedNum
    }
  },
  modules: {}
})

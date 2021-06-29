/*
 * @Author: 庞昭昭
 * @Date: 2021-06-25 14:23:34
 * @LastEditTime: 2021-06-29 17:34:42
 * @LastEditors: 庞昭昭
 * @Description:
 * @FilePath: \mini-h5\src\store\index.ts
 * 记得注释
 */
import { Commit, createStore } from 'vuex'
import Cart from '@/model/Cart'
export interface State {
  cart: Cart
}

export default createStore<State>({
  state: {
    cart: new Cart()
  },
  mutations: {
    setCart(state: State, cart: Cart) {
      state.cart = cart
    }
  },
  actions: {
    setCart(context: { commit: Commit }, cart: Cart) {
      context.commit('setCart', cart)
    }
  },
  modules: {}
})

/*
 * @Author: 庞昭昭
 * @Date: 2021-06-30 18:54:39
 * @LastEditTime: 2021-06-30 19:17:42
 * @LastEditors: 庞昭昭
 * @Description: 购物车
 * @FilePath: \mini-h5\src\views\Cart\Cart.ts
 * 记得注释
 */

import Cart from '@/model/Cart'
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const cartData = ref<Cart>(new Cart()) // 购物车数据

    // 购物车商品行
    const cartLines = computed(() => {
      return cartData.value.lines
    })

    onMounted(() => {
      cartData.value = store.state.cart
    })

    return {
      cartData,
      cartLines
    }
  }
})

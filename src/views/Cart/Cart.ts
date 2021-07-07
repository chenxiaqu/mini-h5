/*
 * @Author: 庞昭昭
 * @Date: 2021-06-30 18:54:39
 * @LastEditTime: 2021-07-07 14:43:19
 * @LastEditors: 庞昭昭
 * @Description: 购物车
 * @FilePath: \mini-h5\src\views\Cart\Cart.ts
 * 记得注释
 */

import Cart from '@/model/Cart'
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { Button, SubmitBar, Checkbox } from 'vant'
import TabBar from '@/components/Business/TabBar/TabBar.vue'
import SkuCard from './cmp/SkuCard.vue'
import { cloneDeep } from '@/utils/ObjectUtil'
import Line from '@/model/Line'
import { cartFun } from '@/common/Cart'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {
    TabBar,
    SkuCard,
    [Button.name]: Button,
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const emptyCartImg = require('@/assets/img/cart_empty.gif') // 空购物车图片

    // 购物车数据
    const cartData = computed(() => {
      return store.state.cart
    })

    // 勾选的购物车数据
    const submitCart = computed(() => {
      const cart: Cart = cloneDeep(cartData)
      cart.lines = cartData.value.lines.filter((line: Line) => {
        return line.selected
      })
      // 计算购物车优惠后金额
      cart.promotAmount = cart.lines.reduce((pre: number, cur: Line) => {
        return pre + cur.promotPrice * cur.qty
      }, 0)

      // 计算购物车原价
      cart.amount = cart.lines.reduce((pre: number, cur: Line) => {
        return pre + cur.price * cur.qty
      }, 0)
      return cart
    })

    // 购物车商品行
    const cartLines = computed(() => {
      return cartData.value.lines
    })

    // 是否可以提交
    const canSubmit = computed(() => {
      return cartLines.value.length > 0
    })

    // 优惠后的价钱
    const realAmount = computed(() => {
      return submitCart.value.promotAmount * 100 || 0
    })

    // 原价
    const rtlAmount = computed(() => {
      return submitCart.value.amount * 100 || 0
    })

    // 获取删除商品方法
    const { doDeleteSku, doSubmitCar } = cartFun()

    /**
     * 删除商品
     * @param skuId 商品id
     */
    function doDelete(skuId: string) {
      doDeleteSku(skuId)
    }

    /**
     * 提交购物车
     */
    function doSubmit() {
      doSubmitCar(submitCart.value)
    }

    /**
     * 去首页
     */
    function doBrowse() {
      router.push('./Home')
    }

    return {
      emptyCartImg,
      cartData,
      cartLines,
      canSubmit,
      realAmount,
      rtlAmount,
      doDeleteSku,
      doDelete,
      doSubmit,
      doBrowse
    }
  }
})

/*
 * @Author: 庞昭昭
 * @Date: 2021-06-30 16:51:46
 * @LastEditTime: 2021-07-06 18:19:40
 * @LastEditors: 庞昭昭
 * @Description: 购物车相关操作
 * @FilePath: \mini-h5\src\common\Cart.ts
 * 记得注释
 */
import Cart from '@/model/Cart'
import { modCartLinesType } from '@/model/CartEnum'
import Line from '@/model/Line'
import Sku from '@/model/Sku'
import { cloneDeep } from '@/utils/ObjectUtil'
import { useStore } from 'vuex'
import { Dialog } from 'vant'
export function cartFun() {
  const store = useStore()
  const modType = modCartLinesType // 修改商品行操作类型枚举
  /**
   * 模拟修改购物车
   * @param sku 修改的商品
   * @param type 操作类型
   * @param number 修改的数量
   */
  const modCartNet = (sku: Sku, type: string, number: number) => {
    // 深拷贝vuex购物车数据
    const cart: Cart = cloneDeep(store.state.cart)
    // 首次进入购物车
    let first = true
    cart.lines.forEach((line: Line) => {
      if (line.id == sku.id) {
        // 根据操作类型修改商品行数据
        if (type == modType.plus) {
          line.qty += number
        } else if (type == modType.minus) {
          line.qty -= number
        } else {
          line.qty = number
        }
        first = false
      }
    })
    if (first) {
      // 首次进入购物车
      const line = { ...new Line(), ...sku }
      line.qty = number
      line.selected = true
      cart.lines.push(line)
    }

    // 计算购物车优惠后金额
    cart.promotAmount = cart.lines.reduce((pre: number, cur: Line) => {
      return pre + cur.promotPrice * cur.qty
    }, 0)

    // 计算购物车原价
    cart.amount = cart.lines.reduce((pre: number, cur: Line) => {
      return pre + cur.price * cur.qty
    }, 0)

    store.dispatch('setCart', cart)
  }

  /**
   * 删除商品
   * @param skuId 商品id
   */
  const doDeleteSku = (skuId: string) => {
    // 深拷贝vuex购物车数据
    const cart: Cart = cloneDeep(store.state.cart)
    cart.lines = cart.lines.filter((line: Line) => {
      return line.id != skuId
    })
    store.dispatch('setCart', cart)
  }

  const doSubmitCar = (submitCart: Cart) => {
    return new Promise((resolve, reject) => {
      Dialog.alert({
        message: `您已成功付款${submitCart.promotAmount}元，老铁，666！`
      }).then(() => {
        submitCart.lines.forEach((line: Line) => {
          doDeleteSku(line.id)
        })
        resolve('')
      })
    })
  }

  return {
    modCartNet,
    doDeleteSku,
    doSubmitCar
  }
}

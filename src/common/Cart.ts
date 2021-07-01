/*
 * @Author: 庞昭昭
 * @Date: 2021-06-30 16:51:46
 * @LastEditTime: 2021-07-01 10:13:31
 * @LastEditors: 庞昭昭
 * @Description: 购物车相关操作
 * @FilePath: \mini-h5\src\common\Cart.ts
 * 记得注释
 */
import { modCartLinesType } from '@/model/CartEnum'
import Line from '@/model/Line'
import Sku from '@/model/Sku'
import { cloneDeep } from '@/utils/ObjectUtil'
import { useStore } from 'vuex'
export function cartFun() {
  const store = useStore()
  const modType = modCartLinesType // 修改商品行操作类型枚举
  /**
   * 模拟修改购物车
   * @param sku 修改的商品
   * @param type 修改的商品
   * @param number 修改的数量
   */
  const modCartNet = (sku: Sku, type: string, number: number) => {
    // 深拷贝vuex购物车数据
    const cart = cloneDeep(store.state.cart)
    // 首次进入购物车
    let first = true
    cart.lines.forEach((line: Line) => {
      if (line.id == sku.id) {
        // 根据操作类型修改商品行数据
        if (type == modType.plus) line.qty += number
        else if (type == modType.minus) line.qty -= number
        else line.qty = number
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
    store.dispatch('setCart', cart)
  }

  return {
    modCartNet
  }
}

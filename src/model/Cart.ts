/*
 * @Author: 庞昭昭
 * @Date: 2021-06-29 17:12:27
 * @LastEditTime: 2021-06-30 16:50:05
 * @LastEditors: 庞昭昭
 * @Description: 购物车
 * @FilePath: \mini-h5\src\model\Cart.ts
 * 记得注释
 */
import Line from './Line'
export default class Cart {
  // 商品行明细
  lines: Line[] = []
  // 整单商品原价
  amount: number = 0
  // 优惠后价钱
  promotAmount: number = 0
  // 运费
  freightAmount: number = 0
}

/*
 * @Author: 庞昭昭
 * @Date: 2021-06-30 17:16:23
 * @LastEditTime: 2021-06-30 17:20:40
 * @LastEditors: 庞昭昭
 * @Description: 购物车相关枚举
 * @FilePath: \mini-h5\src\model\CartEnum.ts
 * 记得注释
 */

// 修改商品行操作类型枚举
export enum modCartLinesType {
  normal = 'normal', // 直接赋值数量，不论增加还是减少
  plus = 'plus', // 加
  minus = 'minus' // 减
}

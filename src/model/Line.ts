/*
 * @Author: 庞昭昭
 * @Date: 2021-06-30 15:39:53
 * @LastEditTime: 2021-07-06 17:29:41
 * @LastEditors: 庞昭昭
 * @Description: 商品行数据
 * @FilePath: \mini-h5\src\model\Line.ts
 * 记得注释
 */
export default class Line {
  // 商品名称
  name: string = ''
  // 商品id
  id: string = ''
  // 商品Code
  code: string = ''
  // 商品展示图片
  imgUrl: string = ''
  // 商品展示轮播图
  imgList: string[] = []
  // 商品原价
  price: number = 0
  // 促销价
  promotPrice: number = 0
  // 商品单位
  unit: string = ''
  // 商品总数
  count: number = 0
  // 商品剩余数量
  existing: number = 0
  // 商品描述
  desc: string = ''
  // 数量
  qty: number = 0
  // 是否已勾选
  selected: boolean = false
}

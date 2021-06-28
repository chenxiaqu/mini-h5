/*
 * @Author: 庞昭昭
 * @Date: 2021-06-28 14:35:44
 * @LastEditTime: 2021-06-28 17:11:08
 * @LastEditors: 庞昭昭
 * @Description: 商品信息
 * @FilePath: \mini-h5\src\model\Sku.ts
 * 记得注释
 */
export default class Sku {
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
  price: string = ''
  // 促销价
  promotPrice: string = ''
  // 商品单位
  unit: string = ''
  // 商品总数
  count: number = 0
  // 商品剩余数量
  existing: number = 0
  // 商品描述
  desc: string = ''
}

/*
 * @Author: 庞昭昭
 * @Date: 2021-06-28 14:23:35
 * @LastEditTime: 2021-06-28 14:41:31
 * @LastEditors: 庞昭昭
 * @Description: 首页初始化数据
 * @FilePath: \mini-h5\src\model\HomeInit.ts
 * 记得注释
 */
import NormalImgInfo from '@/model/NormalImgInfo'
import HomeCategory from '@/model/HomeCategory'
import Sku from '@/model/Sku'
export default class HomeInit {
  // 轮播图数据
  swiperImgUrl: NormalImgInfo[] = []
  // 金刚区数据
  category: HomeCategory[] = []
  // 推送的商品数据
  skuList: Sku[] = []
}

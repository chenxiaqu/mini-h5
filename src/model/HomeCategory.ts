/*
 * @Author: 庞昭昭
 * @Date: 2021-06-28 14:31:20
 * @LastEditTime: 2021-06-28 14:35:23
 * @LastEditors: 庞昭昭
 * @Description: 类目跳转信息
 * @FilePath: \mini-h5\src\model\homeCategory.ts
 * 记得注释
 */
export default class homeCategory {
  // 名称
  title: string = ''
  // 图片地址
  imgUrl: string = ''
  // 类型
  type: string = ''
  // 内部页面
  targetPage: string = ''
  // 跳转外部地址
  url: string = ''
  // 外部页面携带的参数
  params: any = null
}

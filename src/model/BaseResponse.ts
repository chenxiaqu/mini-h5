/*
 * @Author: 庞昭昭
 * @Date: 2021-06-28 14:20:39
 * @LastEditTime: 2021-06-28 14:22:13
 * @LastEditors: 庞昭昭
 * @Description:
 * @FilePath: \mini-h5\src\modal\BaseResponse.ts
 * 记得注释
 */
export default class BaseResponse<T> {
  // 响应码
  code: number = 0
  // 结果信息
  msg: string = ''
  // 响应数据
  data: T | undefined
  // 总数
  total: number = 0
  //
  more: boolean = false
  //
  success: boolean = false
  // 提示信息
  fields: any
}

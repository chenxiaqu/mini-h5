/*
 * @Author: 庞昭昭
 * @Date: 2021-06-28 14:09:30
 * @LastEditTime: 2021-06-28 17:36:16
 * @LastEditors: 庞昭昭
 * @Description: 接口
 * @FilePath: \mini-h5\src\http\reqApi\reqApi.ts
 * 记得注释
 */
// import axios from 'axios'
import Apiclient from '../Apiclient'
import BaseResponse from '@/model/BaseResponse'
import HomeInit from '@/model/HomeInit'

export default class reqApi {
  static homeInit(): Promise<BaseResponse<HomeInit>> {
    return Apiclient.server()
      .post('/mini-h5/home/init', {}, {})
      .then((res) => {
        return res.data
      })
  }
}

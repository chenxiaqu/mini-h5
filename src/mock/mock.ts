/*
 * @Author: 庞昭昭
 * @Date: 2021-06-28 11:36:20
 * @LastEditTime: 2021-06-28 16:38:43
 * @LastEditors: 庞昭昭
 * @Description: mock
 * @FilePath: \mini-h5\src\mock\mock.ts
 * 记得注释
 */
// 使用 Mock
import Mock from 'mockjs'
import reqApiMock from './reqApiMock'
const Random = Mock.Random

Mock.mock('/mini-h5/home/init', reqApiMock.HomeInit(Random))

export default Mock

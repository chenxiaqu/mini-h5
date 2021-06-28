/*
 * @Author: 庞昭昭
 * @Date: 2021-06-25 14:23:34
 * @LastEditTime: 2021-06-28 14:58:40
 * @LastEditors: 庞昭昭
 * @Description:
 * @FilePath: \mini-h5\src\shims-vue.d.ts
 * 记得注释
 */
/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'mockjs'

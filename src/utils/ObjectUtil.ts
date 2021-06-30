/*
 * @Author: 庞昭昭
 * @Date: 2021-06-30 16:58:06
 * @LastEditTime: 2021-06-30 16:58:46
 * @LastEditors: 庞昭昭
 * @Description: 对象操作
 * @FilePath: \mini-h5\src\utils\ObjectUtil.ts
 * 记得注释
 */
export const cloneDeep = (object: any) => {
  if (!object) return object
  const target: any = object instanceof Array ? [] : {}
  for (const [key, val] of Object.entries(object)) {
    target[key] = typeof val == 'object' ? cloneDeep(val) : val
  }
  return target
}

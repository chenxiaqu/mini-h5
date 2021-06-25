/*
 * @Author: 庞昭昭
 * @Date: 2021-06-25 14:23:34
 * @LastEditTime: 2021-06-25 17:37:34
 * @LastEditors: 庞昭昭
 * @Description:
 * @FilePath: \mini-h5\babel.config.js
 * 记得注释
 */
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [['import', { libraryName: 'vant', libraryDirectory: 'es', style: true }, 'vant']]
}

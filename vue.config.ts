/*
 * @Author: 庞昭昭
 * @Date: 2021-06-25 15:58:47
 * @LastEditTime: 2021-06-30 11:02:43
 * @LastEditors: 庞昭昭
 * @Description: 配置文件
 * @FilePath: \mini-h5\vue.config.ts
 * 记得注释
 */
import merge from 'webpack-merge'
import tsImportPluginFactory from 'ts-import-plugin'
import autoprefixer from 'autoprefixer'
import pxtoviewport from 'postcss-px-to-viewport'
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap((options) => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
              })
            ],
            compilerOptions: {
              module: 'es2015'
            }
          })
        })
        // 返回修改后的选项配置。
        return options
      })
    const oneOfsMap = config.module.rule('less').oneOfs.store
    oneOfsMap.forEach((item) => {
      item
        .use('style-resources-loader')
        .loader('style-resources-loader')
        .options({
          // or an array : ["./path/to/vars.less", "./path/to/mixins.less"] 这里的路径不能使用@，否则会报错
          patterns: './src/assets/base.less'
        })
        .end()
    })
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        pxtoviewport({
          viewportWidth: 375
        })
      ]
    }
  }
}

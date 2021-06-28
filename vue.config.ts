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
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // 这里填入你的样式文件地址
          resources: './static/base.less'
        })
        .end()
    })
  },
  css: {
    loaderOptions: {
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
}

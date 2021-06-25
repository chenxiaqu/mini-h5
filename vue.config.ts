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

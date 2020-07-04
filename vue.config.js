const path = require('path')
const merge = require('webpack-merge')
module.exports = {
  /**
   * 项目地址二级目录
   */
  publicPath: 'resume',
  /**
   * 文件打包目录，默认为dist文件夹
   */
  outputDir: 'dist',
  /**
   * 放置生成的静态资源（js、css、img、fonts）的（相对于outputDir的）目录
   */
  assetsDir: '',
  /**
   * 设置是否在开发环境下每次保存代码都启用eslint验证
   * @param false 关闭每次保存进行检测
   * @param true 开启每次保存都进行检测，效果与warning一样
   * @param 'warning' 开启每次保存都进行检测，lint错误将显示到控制台命令行，而且编译并不会失败。
   * @param 'error' 开启每次保存都进行检测，lint错误将显示到浏览器页面上，且编译失败
   * @param 'default' 同 'error'
   */
  lintOnSave: false,
  // transpileDependencies:,
  /**
   * 设置是否为生产环境构建生成source map
   */
  productionSourceMap: true,

  /**
   * 使用链式操作来修改配置
   */
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        return options
      })
    config.module
      .rule('image')
      .test(/\.(png|jpg|gif)$/i)
      .use('url-loader')
      .loader('url-loader')
      .tap(options =>
        merge(options, {
          limit: 5120
        })
      )
    config.module
      .rule('image')
      .test(/\.(png|jpg|gif)$/i)
      .use('file-loader')
      .loader('file-loader')
      .end()
    config.module
      .rule('html')
      .test(/\.html$/)
      .use('html-withimg-loader')
      .loader('html-withimg-loader')
      .end()
  },
  /**
   * 使用整体替换来修改配置
   */
  configureWebpack: config => {
    return {
      plugins: []
    }
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v7 中，这个选项名是 "data"
        prependData: `@import "~@/variables.sass"`
      },
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `data` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        prependData: `@import "~@/variables.scss";`
      },
      // 给 less-loader 传递 Less.js 相关选项
      less: {
        // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
        // `primary` is global variables fields name
        globalVars: {
          primary: '#fff'
        }
      }
    }
  },
  devServer: {
    open: true,
    hot: true,
    // contentBase: path.resolve(__dirname, 'dist'), //配置开发服务运行时的文件根目录
    host: 'localhost', //开发服务器监听的主机地址
    compress: true, //开发服务器是否启动gzip等压缩
    port: 8090, //开发服务器监听的端口
    // proxy: { //配置不同的后台API地址
    //   '/api': {
    //     target: '',
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/api": "/"
    //     }
    //   },
    //   '/foo': {
    //     target: ''
    //   }
    // }
  },
  // 是否为 Babel 或 TypeScript 使用 thread-loader
  parallel: require('os').cpus().length > 1,
  // 向 PWA 插件传递选项
  pwa: {},
  // 可以用来传递任何第三方插件选项
  pluginOptions: {}
}
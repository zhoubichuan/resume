const { name } = require("./package.json")
const lodash = require("lodash")
const path = require("path")
const merge = require("webpack-merge")
const CompressionWebpackPlugin = require("compression-webpack-plugin") // 开启gzip压缩， 按需引用
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const webpack = require("webpack")

const isDev = process.env.NODE_ENV === "dev"
console.error(process.env.NODE_ENV, "process.env.NODE_ENV ")

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  assetsDir: "dist",
  publicPath: "/resume/",
  runtimeCompiler: true,
  lintOnSave: false,
  transpileDependencies: ["vue-particles"],
  productionSourceMap: true,
  parallel: require("os").cpus().length > 1,
  pluginOptions: {},
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "我的简历"
      return args
    })
    // 修复热更新失效
    config.resolve.symlinks(true)

    // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中,对微前端有问题
    // config.plugin("html").tap((args) => {
    //   // 修复 Lazy loading routes Error
    //   args[0].chunksSortMode = "none";
    //   return args;
    // });
    config.optimization.minimizer("terser").tap((args) => {
      args[0].terserOptions.compress.drop_console = true
      args[0].terserOptions.compress.drop_debugger = true
      args[0].terserOptions.compress.pure_funcs = ["console.log"]
      args[0].terserOptions.output = {
        comments: false,
      }
      return args
    })
    // 配置别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set('assets',resolve('src/assets'))
      .set("static", resolve("static"))

    // 压缩图片
    // 需要 npm i -D image-webpack-loader
    config.module
      .rule("images")
      .use("image-webpack-loader")
      .loader("image-webpack-loader")
      .options({
        mozjpeg: {
          progressive: true,
          quality: 65,
        },
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: [0.65, 0.9],
          speed: 4,
        },
        gifsicle: {
          interlaced: false,
        },
        webp: {
          quality: 75,
        },
      })
      .end()

    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        let op = {
          ...options,
          loaders: {
            scss: "style-loader!css-loader!sass-loader",
            sass: "style-loader!css-loader!sass-loader?indentedSyntax",
          },
        }
        return op
      })

    config.module
      .rule("img")
      .test(/\.(png|jpg|gif)$/i)
      .use("url-loader")
      .loader("url-loader")
      // .tap((options) =>
      //   merge(options, {
      //     // limit: 5120,
      //   })
      // )

    config.module
      .rule("image")
      .test(/\.(png|jpg|gif)$/i)
      .use("file-loader")
      .loader("file-loader")
      .end()

    config.module
      .rule("html")
      .test(/\.html$/)
      .use("html-withimg-loader")
      .loader("html-withimg-loader")
      .end()

    config.module
      .rule("compile")
      .test(/\.[js|ts]$/)
      .include.add(resolve("src"))
      .add("/node_modules/")
      .end()
      .use("babel")
      .loader("babel-loader")
      .options({
        presets: [
          [
            "@babel/preset-env",
            {
              modules: false,
            },
          ],
        ],
      })
  },
  /**
   * 使用整体替换来修改配置
   */
  configureWebpack: () => {
    //提供全局的变量，在模块中使用无需用require引入
    new webpack.ProvidePlugin({
      _: lodash,
    })
    let targetobj = {
      output: {
        library: `${name}-[name]`,
        libraryTarget: "umd",
        jsonpFunction: `webpackJsonp_${name}`,
      },
    }
    if (isDev) {
      targetobj.plugins = [
        // 分析各种包的大小
        new webpack.DefinePlugin({
          "process.env": {
            NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          },
        }),
      ]
      return targetobj
    } else {
      targetobj.plugins = [
        // 需要 npm i -D compression-webpack-plugin
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: new RegExp("\\.(js|css)$"),
          threshold: 10240,
          minRatio: 0.8,
        }),
      ]
      return targetobj
    }
  },
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/scss/index.scss";`,
      },
      less: {
        globalVars: {
          primary: "#fff",
        },
      },
    },
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    overlay: {
      warnings: true,
      errors: true,
    },
    open: true,
    https: false, // https:{type:Boolean}
    hotOnly: true, // 热更新
    hot: true,
    // contentBase: path.resolve(__dirname, 'dist'), //配置开发服务运行时的文件根目录
    host: "localhost", //开发服务器监听的主机地址
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
}

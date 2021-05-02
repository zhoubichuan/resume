/* eslint-disable @typescript-eslint/no-var-requires */
const lodash = require("lodash");
const path = require("path");
const merge = require("webpack-merge");
const CompressionWebpackPlugin = require("compression-webpack-plugin"); // 开启gzip压缩， 按需引用
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const webpack = require("webpack");

const isDev = process.env.NODE_ENV === "dev";
console.error(process.env.NODE_ENV, "process.env.NODE_ENV ");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  /**
   * 项目地址二级目录
   */
  publicPath: "./",
  indexPath: "index.html", // 相对于打包路径index.html的路径
  /**
   * 文件打包目录，默认为dist文件夹
   */
  outputDir: "dist",
  /**
   * 放置生成的静态资源（js、css、img、fonts）的（相对于outputDir的）目录
   */
  assetsDir: "",
  /**
   * 设置是否在开发环境下每次保存代码都启用eslint验证
   * @param false 关闭每次保存进行检测
   * @param true 开启每次保存都进行检测，效果与warning一样
   * @param 'warning' 开启每次保存都进行检测，lint错误将显示到控制台命令行，而且编译并不会失败。
   * @param 'error' 开启每次保存都进行检测，lint错误将显示到浏览器页面上，且编译失败
   * @param 'default' 同 'error'
   */
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  lintOnSave: false,
  transpileDependencies: ["vue-particles"],
  /**
   * 设置是否为生产环境构建生成source map
   */
  productionSourceMap: true,
  // 是否为 Babel 或 TypeScript 使用 thread-loader
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  parallel: require("os").cpus().length > 1,
  // 向 PWA 插件传递选项
  pwa: {},
  // 可以用来传递任何第三方插件选项
  pluginOptions: {},
  /**
   * 使用链式操作来修改配置
   */
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "我的简历";
      return args;
    });
    // 修复热更新失效
    config.resolve.symlinks(true);

    // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
    config.plugin("html").tap((args) => {
      // 修复 Lazy loading routes Error
      args[0].chunksSortMode = "none";
      return args;
    });
    config.optimization.minimizer("terser").tap((args) => {
      // 注释console.*
      args[0].terserOptions.compress.drop_console = true;
      // remove debugger
      args[0].terserOptions.compress.drop_debugger = true;
      // 移除 console.log
      args[0].terserOptions.compress.pure_funcs = ["console.log"];
      // 去掉注释 如果需要看chunk-vendors公共部分插件，可以注释掉就可以看到注释了
      args[0].terserOptions.output = {
        comments: false,
      };
      return args;
    });
    // 配置别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("static", resolve("static"));

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
      .end();

    // 打包分析
    // 打包之后自动生成一个名叫report.html文件(可忽视)
    if (!isDev) {
      // config.plugin("webpack-report").use(BundleAnalyzerPlugin, [
      //   {
      //     analyzerMode: "static",
      //   },
      // ]);
    }

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
        };
        return op;
      });

    config.module
      .rule("image")
      .test(/\.(png|jpg|gif)$/i)
      .use("url-loader")
      .loader("url-loader")
      .tap((options) =>
        merge(options, {
          limit: 5120,
        })
      );

    config.module
      .rule("image")
      .test(/\.(png|jpg|gif)$/i)
      .use("file-loader")
      .loader("file-loader")
      .end();

    config.module
      .rule("html")
      .test(/\.html$/)
      .use("html-withimg-loader")
      .loader("html-withimg-loader")
      .end();

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
      });
  },
  /**
   * 使用整体替换来修改配置
   */
  configureWebpack: () => {
    //提供全局的变量，在模块中使用无需用require引入
    new webpack.ProvidePlugin({
      _: lodash,
    });
    if (isDev) {
      return {
        plugins: [
          // 分析各种包的大小
          new webpack.DefinePlugin({
            "process.env": {
              NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
          }),
        ],
      };
    } else {
      return {
        plugins: [
          // 开启Gzip压缩
          // 需要 npm i -D compression-webpack-plugin
          new CompressionWebpackPlugin({
            // 目标文件名称。[path] 被替换为原始文件的路径和 [query] 查询
            filename: "[path].gz[query]",
            // 使用 gzip 压缩
            algorithm: "gzip",
            // 处理与此正则相匹配的所有文件
            test: new RegExp("\\.(js|css)$"),
            // 只处理大于此大小的文件
            threshold: 10240,
            // 最小压缩比npm达到 0.8 时才会被压缩
            minRatio: 0.8,
          }),
        ],
      };
    }
  },
  css: {
    // 将组件内的CSS提取到一个单独的CSS文件（只用在生产环境中）
    extract: true,

    // 是否开启CSS source map
    sourceMap: false,

    // 为预处理器的loader传递自定义选项
    loaderOptions: {
      // 给 sass-loader 传递选项
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `data` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      // scss: {
      //   prependData: `@import "@/assets/scss/index.scss";`,
      // },
      // 给 less-loader 传递 Less.js 相关选项
      less: {
        // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
        // `primary` is global variables fields name
        globalVars: {
          primary: "#fff",
        },
      },
    },

    // 为所有的CSS及其预处理文件开启CSS Modules
    // 这个选项不会影响 *.vue文件
    // requireModuleExtension: false,
  },
  devServer: {
    overlay: {
      // 让浏览器 overlay 同时显示警告和错误
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
};

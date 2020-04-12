const path = require('path')
module.exports = {
  // 没有书写outputDir属性   默认'dist'  对应dev.assetsSubDirectory.
  outputDir: 'dist',

  // 没有书写baseUrl属性   默认'/'  对应dev.assetsPublicPath.
  // 从 Vue CLI 3.3 起baseUrl已弃用，请使用publicPath.
  publicPath: './',
  productionSourceMap: false,
  // output: {},
  // module: {},
  // plugins: [],
  // devServer: {
  //   contentBase: pathval.resolve(__dirname, 'dist'), //配置开发服务运行时的文件根目录
  //   host: 'localhost', //开发服务器监听的主机地址
  //   compress: true, //开发服务器是否启动gzip等压缩
  //   port: 8080, //开发服务器监听的端口
  // },
}

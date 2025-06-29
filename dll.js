// eslint-disable-next-line @typescript-eslint/no-var-requires
let path = require("path")
// eslint-disable-next-line @typescript-eslint/no-var-requires
let webpack = require("webpack")
module.exports = {
  mode: "dev",
  entry: {
    react: ["vue", "vuex"], // 这个例子我们打包 react react-dom 作为公共类库
  },
  output: {
    // filename: "[name].js",
    filename: "_dll_[name].js",
    path: path.resolve(__dirname, "dist"),
    // library: "ab",
    library: "_dll_[name]", // 打包后对外暴露的类库名称
    // libraryTarget: "var" //commonjs umd
  },
  plugins: [
    new webpack.DllPlugin({
      name: "_dll_[name]",
      path: path.resolve(__dirname, "dist", "manifest.json"), // 使用 DLLPlugin 在打包的时候生成一个 manifest 文件
    }),
  ],
}

module.exports = {
  chainWebpack: config => {
    config.module
      .rule(/\.(png|jpg|gif)$/)
      .use("url-loader")
      .tap(options => {
        limit: 200 * 1024;
      });
    config.module.rule(/\.html$/).use("html-withimg-loader");
  }
};

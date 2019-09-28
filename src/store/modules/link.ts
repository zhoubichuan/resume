export default {
  namespaced: true,
  state: {
    op: {
      id: "link",
      title: "联系我"
    },
    linkOp: [
      {
        name: "我的gitHub：",
        ico: require("@/assets/github.jpg"),
        link: "https://github.com/zhoubichuan"
      },
      {
        name: "我的微博：",
        ico: require("@/assets/weibo.jpg"),
        link: "https://github.com/zhoubichuan"
      },
      {
        name: "我的微信：",
        ico: require("@/assets/weixin.jpg"),
        text: "zbc159x"
      },
      {
        name: "我的掘金:",
        ico: require("@/assets/juejin.jpg"),
        link: "https://juejin.im/user/5aabd522f265da237a4cc764/posts"
      }
    ]
  }
};

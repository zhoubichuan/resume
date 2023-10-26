export default {
  namespaced: true,
  state: {
    op: {
      id: "project",
      title: "开源项目",
    },
    currentDate: new Date(),
    workOp: [
      {
        name: "javaScript",
        items: [
          {
            title: "企业网站",
            skill: "javaScript+css",
            link: "https://zhoubichuan.github.io/website/",
          },
          {
            title: "后台管理系统",
            skill: "jQuery+BootStrapt",
            link: "https://zhoubichuan.github.io/managment/",
          },
          {
            title: "flybird游戏",
            skill: "canvas+css",
            link: "https://zhoubichuan.github.io/flybird/",
          },
          {
            title: "微信跳一跳游戏",
            skill: "webGL(three.js)+css",
            link: "https://zhoubichuan.github.io/jump/",
          }
        ],
      },
      {
        name: "vue",
        items: [
          {
            title: "微信",
            skill: "Vue+less",
            link: "https://zhoubichuan.github.io/Project-Vue-weChat/",
          },
          {
            title: "饿了么",
            skill: "Vue+less",
            link: "/elesell",
          },
          {
            title: "点餐系统",
            skill: "Vue+less",
            link: "/order/",
          },
        ],
      },
      {
        name: "react",
        items: [
          {
            title: "zhufengCourseApp",
            skill: "React+TS+less",
            link: "/classroom/",
          },
          {
            title: "weChatApp",
            skill: "React+less",
            link: "http://zhoubichuan.github.io/Project-React-weChat",
          },
        ],
      },
      {
        name: "node",
        items: [
          {
            title: "CMS系统",
            skill: "Egg.js+AntDesignPro+MySQL",
            link: "wwww.123.com",
          },
        ],
      },
      {
        name: "express",
        items: [
          {
            title: "CMS系统",
            skill: "Egg.js+AntDesignPro+MySQL",
            link: "wwww.123.com",
          },
        ],
      },
      {
        name: "koa",
        items: [
          {
            title: "CMS系统",
            skill: "Egg.js+AntDesignPro+MySQL",
            link: "wwww.123.com",
          },
        ],
      },
      {
        name: "全栈项目",
        items: [
          {
            title: "CMS系统",
            skill: "Egg.js+AntDesignPro+MySQL",
            link: "wwww.123.com",
          },
          {
            title: "多人聊天室",
            skill: "React+Mongodb+websocket",
            link: "wwww.123.com",
          },
          {
            title: "新闻爬虫",
            skill: "cheerio+mysql+nodemailer",
            link: "wwww.123.com",
          },
          {
            title: "珠峰课堂",
            skill: "React+Redux",
            link: "wwww.123.com",
          },
        ],
      },
    ],
  },
};

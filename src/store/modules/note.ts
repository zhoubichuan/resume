export default {
  namespaced: true,
  state: {
    op: {
      id: "note",
      title: "我的笔记",
    },
    currentDate: new Date(),
    workOp: [
      {
        name: "javaScript相关",
        items: [
          {
            title: "我的博客",
            skill: "javaScript+css",
            img: "zhoubichuan.github.io",
            link: "https://github.com/zhoubichuan/zhoubichuan.github.io",
          },
          {
            title: "javascript笔记",
            skill: "javaScript+css",
            img: "Web-JavaScript",
            link: "https://zhoubichuan.github.io/web-javascript/",
          },
        ],
      },
      {
        name: "Vue相关",
        items: [
          {
            title: "Web-Vue",
            skill: "Vuepress",
            img: "Web-Vue",
            link: "https://zhoubichuan.github.io/web-vue/",
          },
        ],
      },
      {
        name: "React相关",
        items: [
          {
            title: "Web-Vue",
            skill: "Vuepress",
            img: "Web-React",
            link: "https://zhoubichuan.github.io/Web-React/",
          },
        ],
      },
      {
        name: "Angular",
        items: [],
      },
      {
        name: "Node相关",
        items: [
          {
            title: "Web-Node",
            skill: "Vuepress",
            img: "Web-Node",
            link: "https://zhoubichuan.github.io/Web-Node/",
          },
        ],
      },
      {
        name: "Express相关",
        items: [
          {
            title: "Web-Express",
            skill: "Vuepress",
            img: "Web-Express",
            link: "https://zhoubichuan.github.io/Web-Express/",
          },
        ],
      },
      {
        name: "Koa相关",
        items: [
          {
            title: "Web-Koa",
            skill: "Vuepress",
            img: "Web-Koa",
            link: "https://zhoubichuan.github.io/Web-Koa/",
          },
        ],
      },
      {
        name: "Egg相关",
        items: [
          {
            title: "Web-Egg",
            skill: "Vuepress",
            img: "Web-Egg",
            link: "https://zhoubichuan.github.io/Web-Egg/",
          },
        ],
      },
      {
        name: "Webpack相关",
        items: [
          {
            title: "Web-Webpack",
            skill: "Vuepress",
            img: "Web-Webpack",
            link: "https://zhoubichuan.github.io/Web-Webpack/",
          },
        ],
      },
    ],
  },
};

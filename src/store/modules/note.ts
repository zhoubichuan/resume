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
        name: "javaScript",
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
            link: "https://zhoubichuan.github.io/Web-JavaScript/",
          }
        ],
      },
      {
        name: "Vue",
        items: [
          {
            title: "vue笔记",
            skill: "Vuepress",
            img: "Web-Vue",
            link: "https://zhoubichuan.github.io/Web-Vue/",
          }
        ],
      },
      {
        name: "React",
        items: [
        
        ],
      },
      {
        name: "Angular",
        items: [
   
        ],
      },
      {
        name: "node.js",
        items: [
      
        ],
      },
      {
        name: "express",
        items: [
     
        ],
      },
      {
        name: "koa",
        items: [
    
        ],
      },
      {
        name: "全栈项目",
        items: [
       
        ],
      },
    ],
  },
};

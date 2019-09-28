export default {
  namespaced: true,
  state: {
    content: [],
    op: {
      id: "about",
      title: "关于我"
    },
    cardOp: [
      {
        title: "个人信息",
        content: ["性名: 周必川", "性别：男", "籍贯：湖北孝感", "年龄: 27岁"]
      },
      {
        title: "学历信息",
        content: ["湖北工业大学工程技术学院", "学历：本科", "毕业时间：2015/07"]
      },
      {
        title: "工作经验",
        content: ["2年h5开发经验", "4年web开发经验", "2年node开发经验"]
      },
      {
        title: "求职意向",
        content: ["Web/H5前端开发", "node工程师", "web全栈工程师"]
      }
    ]
  }
};

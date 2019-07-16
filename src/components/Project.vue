<template>
  <common :op="op">
    <Work class="work" :op="workOp" />
  </common>
</template>

<script>
import Common from "../common/Common";
import Work from "../common/Work";
export default {
  name: "Project",
  components: {
    Common,
    Work
  },
  data() {
    return {
      op: {
        id: "project",
        title: "作品展示"
      },
      currentDate: new Date(),
      workOp: [
        {
          name: "javaScript",
          items: [
            {
              title: "企业网站",
              skill: "javaScript+css",
              img: "component-website",
              link:
                "https://zhoubichuan.github.io/Project-JavaScript-CompanyWebsite/"
            },
            {
              title: "后台管理系统",
              skill: "jQuery+BootStrapt",
              img: "bootStrapt",
              link:
                "https://github.com/zhoubichuan/Project-Bootstrapt-BackManagmentSystem"
            },
            {
              title: "flybird游戏",
              skill: "canvas+css",
              img: "fly-bird",
              link:
                "https://zhoubichuan.github.io/Project-JavaScript.Canvas-Flybird/"
            },
            {
              title: "微信跳一跳游戏",
              skill: "webGL(three.js)+css",
              img: "tiao-yi-tiao",
              link: "https://zhoubichuan.github.io/Project-Three.js-TiaoYiTiao/"
            },
            {
              title: "微信小程序",
              skill: "---",
              link: "wwww.123.com"
            },
            {
              title: "微信公众号",
              skill: "---",
              link: "wwww.123.com"
            }
          ]
        },
        {
          name: "Vue",
          items: [
            {
              title: "weChateApp",
              skill: "Vue+less",
              img: "vue-weChat",
              link: "https://zhoubichuan.github.io/Project-Vue-weChat/"
            },
            {
              title: "eleApp",
              img: "vue-eleApp",
              skill: "Vue+less",
              link: "https://zhoubichuan.github.io/Project-Vue-eleSell"
            },
            {
              title: "vue点餐系统",
              skill: "Vue+less",
              link: "https://zhoubichuan.github.io/Project-Vue-Ordering/"
            }
          ]
        },
        {
          name: "React",
          items: [
            {
              title: "zhufengCourseApp",
              skill: "React+TS+less",
              link: "https://zhoubichuan.github.io/Project-React.TS-app/"
            },
            {
              title: "weChatApp",
              skill: "React+less",
              link: "http://zhoubichuan.github.io/Project-React-weChat"
            }
          ]
        },
        {
          name: "Angular",
          items: [
            {
              title: "珠峰课堂",
              link: "https://zhoubichuan.github.io/Project-React.TS-app/"
            }
          ]
        },
        {
          name: "node.js",
          items: [
            {
              title: "CMS系统",
              skill: "Egg.js+AntDesignPro+MySQL",
              link: "wwww.123.com"
            }
          ]
        },
        {
          name: "express",
          items: [
            {
              title: "CMS系统",
              skill: "Egg.js+AntDesignPro+MySQL",
              link: "wwww.123.com"
            }
          ]
        },
        {
          name: "koa",
          items: [
            {
              title: "CMS系统",
              skill: "Egg.js+AntDesignPro+MySQL",
              link: "wwww.123.com"
            }
          ]
        },
        {
          name: "全栈项目",
          items: [
            {
              title: "CMS系统",
              skill: "Egg.js+AntDesignPro+MySQL",
              link: "wwww.123.com"
            },
            {
              title: "多人聊天室",
              skill: "React+Mongodb+websocket",
              link: "wwww.123.com"
            },
            {
              title: "新闻爬虫",
              skill: "cheerio+mysql+nodemailer",
              link: "wwww.123.com"
            },
            {
              title: "珠峰课堂",
              skill: "React+Redux",
              link: "wwww.123.com"
            },
            {
              title: "flappy bird",
              skill: "canvas",
              link: "wwww.123.com"
            },
            {
              title: "微信跳一跳",
              skill: "thress.js",
              link: "wwww.123.com"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.work {
  margin: 0 auto;
  width: 80%;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.center {
  margin-top: 20px;
  text-align: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: calc(100% - 40px);
  margin: 10px 20px;
}
</style>

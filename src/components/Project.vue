<template>
<common :op="op">
  <div class="project">
    <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
    <!-- <Work :op='workOp'/> -->
  </div>
</common>
</template>

<script>
import Common from '../common/Common';
import Work from '../common/Work';
export default {
  name: 'Project',
  components: {
    Common,
    Work
  },
  data () {
    return {
      op: {
        id: 'project',
        color: 'lightblue',
        title: '作品展示'
      },
      currentDate: new Date(),
      workOp: [
        {
          name: '原生javaScript',
          items: [
            {
              title: '企业网站',
              skills: 'javaScript',
              link: 'wwww.123.com'
            }
          ]
        },
        {
          name: 'jQuery',
          items: [
            {
              title: '后台管理系统',
              skills: 'Egg.js+AntDesignPro+MySQL',
              link: 'wwww.123.com'
            }
          ]
        },
        {
          name: 'vue.js react.js',
          items: [
            {
              title: 'vue微信',
              skills: 'Egg.js+AntDesignPro+MySQL',
              link: 'https://zhoubichuan.github.io/vue-weixin/#/'
            },
            {
              title: 'vue饿了么app',
              skills: 'Egg.js+AntDesignPro+MySQL',
              link: 'wwww.123.com'
            },
            {
              title: 'react微信',
              skills: 'Egg.js+AntDesignPro+MySQL',
              link: 'https://zhoubichuan.github.io/react-weixin/#/'
            }
          ]
        },
        {
          name: '微信公众号',
          items: [
            {
              title: 'CMS系统',
              skills: 'Egg.js+AntDesignPro+MySQL',
              link: 'wwww.123.com'
            }
          ]
        },
        {
          name: '微信小程序',
          items: [
            {
              title: 'CMS系统',
              skills: 'Egg.js+AntDesignPro+MySQL',
              link: 'wwww.123.com'
            }
          ]
        },
        {
          name: 'node.js',
          items: [
            {
              title: 'CMS系统',
              skills: 'Egg.js+AntDesignPro+MySQL',
              link: 'wwww.123.com'
            }
          ]
        },
        {
          name: 'express',
          items: [
            {
              title: 'CMS系统',
              skills: 'Egg.js+AntDesignPro+MySQL',
              link: 'wwww.123.com'
            }
          ]
        },
        {
          name: 'koa',
          items: [
            {
              title: 'CMS系统',
              skills: 'Egg.js+AntDesignPro+MySQL',
              link: 'wwww.123.com'
            }
          ]
        },
        {
          name: '全栈',
          items: [
            {
              title: 'CMS系统',
              skills: 'Egg.js+AntDesignPro+MySQL',
              link: 'wwww.123.com'
            },
            {
              title: '多人聊天室',
              skills: 'React+Mongodb+websocket',
              link: 'wwww.123.com'
            },
            {
              title: '新闻爬虫',
              skills: 'cheerio+mysql+nodemailer',
              link: 'wwww.123.com'
            },
            {
              title: '珠峰课堂',
              skills: 'React+Redux',
              link: 'wwww.123.com'
            },
            {
              title: 'flappy bird',
              skills: 'canvas',
              link: 'wwww.123.com'
            },
            {
              title: '微信跳一跳',
              skills: 'thress.js',
              link: 'wwww.123.com'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
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

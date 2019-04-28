<template>
<common :op="op">
  <div class="project">
    <h1 class="center">作品展示</h1>
    <ul>
      <li v-for="(item,index) in project" :key="index">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>{{item.name+"项目"}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div v-for="(item,index) in item.items" :key="index">
            <a :href="item.link" :title="item.skill">{{item.title}}</a>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</common>
</template>

<script>
import Common from '../common/Common'
export default {
  name: 'Project',
  components: {
    Common
  },
  data () {
    return {
      op: {
        id: 'project',
        color: 'red',
        title: '项目'
      },
      currentDate: new Date(),
      project: [
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
          name: 'vue.js',
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
            }
          ]
        },
        {
          name: 'react.js',
          items: [
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
.center {
  margin-top: 20px;
  text-align: center;
}
.project {
  background-color: #915a4a;
  min-height: 100vh;
  overflow: hidden;
}
li {
  list-style: none;
  float: left;
  width: 30%;
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

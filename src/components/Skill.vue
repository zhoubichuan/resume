<template>
<common :op="op">
  <el-carousel :interval="15000" arrow="always" style="padding:0 40px">
    <el-carousel-item v-for="item in knowledgeOp" :key="item">
      <el-row :gutter="24">
        <el-col :span="4" class="left">
          <h3>{{ item.title }}</h3>
          <p>{{item.introduce}}</p>
        </el-col>
        <el-col :span="20">
          <el-row :gutter="24">
          <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="6" v-for="(item2,index2) in item.content" :key="index2">
            <Knowledge :op="item2"/>
          </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-carousel-item>
  </el-carousel>
</common>
</template>

<script>
import Common from '../common/Common';
import Knowledge from '../common/Knowledge';

export default {
  name: 'Skill',
  components: {
    Common,
    Knowledge
  },
  data () {
    return {
      op: { id: 'skill', color: '#4a839e', title: '前端技能' },
      knowledgeOp: [
        {
          title: '静态页面',
          introduce:
            '熟练使用css+html快速构建页面，对Web标准和兼容性有良好认识',
          content: [
            { skill: 'css', score: 95 },
            { skill: 'css3', score: 95 },
            { skill: 'less', score: 90 },
            { skill: 'sass', score: 90 },
            { skill: 'stylus', score: 90 },
            { skill: 'html', score: 95 },
            { skill: 'html5', score: 95 },
            { skill: 'bootStrap', score: 80 },
            { skill: 'elementUI', score: 80 },
            { skill: 'antDesign', score: 80 }
          ]
        },
        {
          title: 'jascript',
          introduce:
            '对原生js有深刻的认识，对设计模式、性能优化、监控、安全、可视化有一定的理解和项目实践',
          content: [
            { skill: '原生js', score: 90 },
            { skill: 'ES6', score: 90 },
            { skill: 'jQuery', score: 90 },
            { skill: 'ajax', score: 90 },
            { skill: '正则', score: 80 },
            { skill: '设计模式', score: 70 },
            { skill: 'TypeScript', score: 70 },
            { skill: '算法', score: 60 },
            { skill: '单元测试', score: 70 }
          ]
        },
        {
          title: '框架',
          introduce: '熟练使用常见的框架及相关插件',
          content: [
            { skill: 'Vue', score: 90 },
            { skill: 'React', score: 80 },
            { skill: 'Dva', score: 80 },
            { skill: 'Angular', score: 60 },
            { skill: 'Ionic', score: 60 },
            { skill: '微信小程序', score: 70 },
            { skill: '微信公众号', score: 70 }
          ]
        },
        {
          title: '构建工具：',
          introduce:
            '能够熟练使用webpack搭建项目，提高开发效率，对应特殊的功能能够编写简单的插件',
          content: [
            { skill: 'Rollup', score: 50 },
            { skill: 'Webpack', score: 70 }
          ]
        },
        {
          title: 'node',
          introduce:
            '能够熟练使用webpack搭建项目，提高开发效率，对应特殊的功能能够编写简单的插件',
          content: [
            { skill: 'tcp/ip协议', score: 70 },
            { skill: '安全防范', score: 80 },
            { skill: '服务端渲染', score: 80 }
          ]
        },
        {
          title: 'node框架：',
          introduce: '能够熟练使用node框架，擅长使用常见的功能如：ssr',
          content: [
            { skill: 'express', score: 70 },
            { skill: 'koa', score: 70 },
            { skill: 'egg', score: 70 }
          ]
        },
        {
          title: '数据库：',
          introduce: '能够熟练使用常见的数据库，',
          content: [
            { skill: 'mySql', score: 60 },
            { skill: 'mongoDB', score: 70 },
            { skill: 'Redis', score: 80 }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.left {
  background: burlywood;
  height: 80vh;
}
.center {
  margin-top: 20px;
  text-align: center;
}
li {
  list-style: none;
  float: left;
}
</style>

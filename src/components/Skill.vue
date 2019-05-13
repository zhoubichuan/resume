<template>
  <common :op="op">
    <!-- <el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
<el-progress type="circle" :percentage="100" status="success"></el-progress>
<el-progress type="circle" :percentage="50" status="exception"></el-progress>
    <el-progress :percentage="0"></el-progress>
<el-progress :percentage="70"></el-progress>
<el-progress :percentage="80" color="#8e71c7"></el-progress>
<el-progress :percentage="100" status="success"></el-progress>
<el-progress :percentage="50" status="exception"></el-progress> -->
      <ul >
        <Knowledge v-for="(item,index) in knowledgeOp" :key="index" :op="item"/>
      </ul>
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
          e: 90,
          title: '静态页面能力：',
          name: '熟练使用响应式设计，对Web标准和兼容性有良好认识'
        },
        { e: 80, title: 'jascript基础：', name: '算法、安全、设计模式' },
        { e: 75, title: '小程序：', name: '微信小程序、微信公众号' },
        {
          e: 85,
          title: '相关框架、库：',
          name: '熟练使用jquery、vue、react、angular等前端框架，提高项目开发'
        },
        {
          e: 70,
          title: '构建工具：',
          name: '熟练使用webpack配置开发任务，开发相关插件，缩短开发周期'
        },
        {
          e: 75,
          title: 'node后端：',
          name:
            '熟练掌握es6、HTTP协议、常见的算法、有处理跨域及代理等常见开发问题的能'
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
li {
  list-style: none;
  float: left;
}
</style>

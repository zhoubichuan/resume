<template>
<common :op="op">
<el-row :gutter="24">
  <el-col :span="6" :xs="24" :sm="12" :md="6" :lg="6" :xl="3" v-for="(item,index) in cardOp" :key="index">
    <card :op="item"/>
  </el-col>
</el-row>
</common>
</template>

<script>
import Common from '../common/Common';
import Card from '../common/Card';
export default {
  name: 'AboutMe',
  components: {
    Common,
    Card
  },
  data () {
    return {
      content: [],
      op: {
        id: 'about',
        color: '#85aea3',
        title: '关于我'
      },
      cardOp: [
        {
          title: '个人信息',
          content: '性名: 周必川;性别：男',
          descript: '年龄: 27岁 籍贯：湖北',
          type: 'success',
          icon: 'el-icon-check'
        },
        {
          title: '专业学历',
          content: '专业：机械设计制造及其自动化',
          descript: '学历：大学本科',
          type: 'info',
          icon: 'el-icon-message'
        },
        {
          title: '毕业学校',
          content: '毕业学校：湖北工业大学工程技术学院',
          descript: '学习技能：编程',
          type: 'warning',
          icon: 'el-icon-star-off'
        },
        {
          title: '联系方式',
          content: 'weixie:zbc159x',
          descript: '邮箱：zhoubichuan@iclud.com',
          type: 'danger',
          icon: 'el-icon-delete'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.photo {
  width: 100px;
  height: 100px;
  background: url("http://www.90she.win/personnet/img/ico.jpg") no-repeat 0 0;
  border-radius: 50%;
  background-size: 100%;
  margin: 10px auto;
  display: block;
}
.grid-content {
  text-align: center;
}
.grid-content .col-md-3 {
  margin-top: 20px;
}
</style>

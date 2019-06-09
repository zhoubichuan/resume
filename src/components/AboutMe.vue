<template>
  <common :op="op">
    <el-row :gutter="24">
      <el-col
        :span="6"
        :xs="24"
        :sm="12"
        :md="6"
        :lg="6"
        :xl="3"
        v-for="(item,index) in cardOp"
        :key="index"
      >
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
        title: '关于我'
      },
      cardOp: [
        {
          title: '个人信息',
          content: ['性名: 周必川', '性别：男', '籍贯：湖北孝感', '年龄: 27岁']
        },
        {
          title: '学历信息',
          content: [
            '湖北工业大学工程技术学院',
            '学历：本科',
            '毕业时间：2015/07'
          ]
        },
        {
          title: '工作经验',
          content: ['2年h5开发经验', '4年web开发经验', '2年node开发经验']
        },
        {
          title: '求职意向',
          content: ['Web/H5前端开发', 'node工程师', 'web全栈工程师']
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
  margin-top: 40px;
}
</style>

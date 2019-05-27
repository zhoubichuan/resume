<template>
<Common  :op="op">
  <div >
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple">
          <p class="center" v-for="(item,index) in content" :key="index">{{item}}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</Common>
</template>

<script>
import Common from '../common/Common';
export default {
  name: 'Introduce',
  components: {
    Common
  },
  data () {
    return {
      op: {
        id: 'introduce',
        title: 'Hell Word'
      },
      content: [
        '我叫周必川',
        '一名前端工程师',
        'zhoubichuan@icloud.com',
        '生活不止眼前的苟且',
        '坐标：深圳'
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.center {
  margin-top: 20px;
  text-align: center;
}
.photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-size: 100%;
  margin: 10px auto;
  display: block;
}
</style>

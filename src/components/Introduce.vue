<template>
<Common  :op="op">
  <template slot="tiltle">首页</template>
  <div class="show">
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple">
          <i class="photo"></i>
        </div>
      </el-col>
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
import Common from '../common/Common'
export default {
  name: 'Introduce',
  components: {
    Common
  },
  data () {
    return {
      op: {
        id: 'introduce',
        color: 'white'
      },
      content: [
        '我叫周必川',
        '一名前端工程师',
        'zhoubichuan@icloud.com',
        '深圳'
      ]
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped="" type="type/css">
.show {
  width: 100%;
  height: 100vh;
}
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

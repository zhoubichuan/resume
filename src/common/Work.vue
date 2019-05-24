<template>
<el-row :gutter="24" type="flex"  justify="center">
  <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20" >
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="item.name+'相关'" :name="index" v-for="(item,index) in op" :key="index">
        <ul v-for="(item,index) in item.items" :key="index">
          <li><a :href="item.link"><span>{{item.title}}</span>：<span>{{item.skill}}</span></a></li>
        </ul>
      </el-tab-pane>
  </el-tabs>
  </el-col>
</el-row>
</template>
<script>
export default {
  props: {
    op: {
      type: Array
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  width: 80%;
  margin: 0 auto;
  text-align: left;
  .header {
    span {
      text-align: left;
    }
  }
}
</style>

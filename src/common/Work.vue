<template>
<el-row :gutter="24">
  <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4" v-for="(item,index) in op" :key="'_'+index">
    <div class="box">
      <div class="header">
        <span>{{"技术要点："+item.name}}</span>
      </div>
      <ul v-for="(item,index) in item.items" :key="index">
        <li><a :href="item.link"><span>{{item.title}}</span>：<span>{{item.skill}}</span></a></li>
      </ul>
    </div>
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

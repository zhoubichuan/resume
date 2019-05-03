<template>
  <ul>
      <li v-for="(item,index) in op" :key="index">
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
li {
  list-style: none;
  float: left;
  width: 25%;
}
</style>

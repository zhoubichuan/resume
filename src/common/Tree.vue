<template>
  <el-timeline >
    <el-timeline-item v-for="(item,index) in op" :timestamp="item.time" :key="index" placement="top">
      <el-card style="background:#cccccc;">
        <h4>{{item.title}}</h4>
        <p>{{item.content}}</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>
<script>
export default {
  props: {
    op: { type: Array }
  }
}
</script>

<style lang="scss" >
ul.el-timeline.content {
  margin-top: 50px;
  li.el-timeline-item {
    width: 50%;
    margin-left: 50%;
    position: relative;
    &:nth-child(2n) {
      .el-timeline-item__wrapper {
        left: -50%;
        transform: translateX(-50%);
        padding: 0 20px 0 0;
      }
    }
    .el-timeline-item__wrapper {
      top: -58px;
    }
  }
}
</style>

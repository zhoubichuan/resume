<template>
  <el-timeline class="content">
    <el-timeline-item v-for="(item,index) in op" :timestamp="item.time" :key="index" placement="top">
      <el-card>
        <h4>{{item.title}}</h4>
        <p>{{item.content}}</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>
<script>
export default {
  props: {
    op: { type: Object }
  }
}
</script>
<style lang="scss" scoped>
.content {
  max-width: 500px;
  margin: 0 auto;
}
</style>

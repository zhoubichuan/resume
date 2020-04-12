<template>
  <div class="show" :id="op.id">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="18">
        <h1 v-if="op.title" class="title">{{ op.title }}</h1>
        <slot></slot>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    op: { type: Object },
  },
}
</script>
<style lang="scss" scoped>
.show {
  width: 100%;
  min-height: 100vh;
  text-align: center;
  overflow-x: hidden;
  background: wheat;
  .title {
    text-align: center;
    padding: 60px 0 40px;
  }
}
</style>

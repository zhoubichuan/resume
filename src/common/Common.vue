<template>
<div class="show" :id="op.id" :style="'background-color:'+op.color">
    <h1 v-if="op.title" class="title">{{op.title}}</h1>
    <slot></slot>
</div>
</template>
<script>
export default {
  props: {
    op: {type: Object}
  }
}
</script>
<style lang="scss" scoped>
.show {
  .title{
    text-align: center;
    margin: 60px 0 40px;
  }
  width: 100%;
  height: 100vh;
}
</style>

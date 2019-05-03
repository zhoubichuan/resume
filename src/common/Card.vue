<template>
<div class="grid-content bg-purple">
    <el-button :type="op.type" :icon="op.icon" circle></el-button>
    <div class="col-md-3 col-sm-6 service">
        <i class="fa fa-laptop"></i>
        <h4><strong>{{op.title}}</strong></h4>
        <p>{{op.content}}</p>
        <p>{{op.descript}}</p>
    </div>
</div>
</template>
<script>
export default {
  props: {
    op: {
      type: Object
    }
  }
}
</script>
<style lang="less" scoped>
.service{
    margin-top: 30px;
}
</style>

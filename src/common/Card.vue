<template>
<div class="grid-content bg-purple">
    <h4>{{op.title}}</h4>
    <el-card class="box-card">
      <div v-for="(item,index) in op.content" :key="index" class="text item">
        {{item}}
      </div>
    </el-card>
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
<style lang="scss" scoped>
.service {
  margin-top: 30px;
}
h4 {
  margin-bottom: 10px;
}
.box-card {
  width: 80%;
  margin: 0 auto;
  text-align: left;
}
</style>

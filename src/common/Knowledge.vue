<template>
  <div class="circle">
    {{op.skill}}<el-progress :percentage="op.score" color="#8e71c7" ></el-progress>
  </div>
</template>
<script>
export default {
  props: {
    op: {
      type: Object
    }
  },
  data () {
    return {}
  },
  mounted () {
    this.drawLine()
  }
}
</script>
<style lang="scss" scoped>
.circle {
  max-width: 300px;
  margin: 0 auto;
  text-align: left;
}

li {
  width: 33.33%;
  display: flex;
  align-items: center;
  flex-direction: column;
  div {
    text-align: center;
  }
  p {
    text-align: left;
    padding: 0 10px;
  }
}
</style>

<template>
  <div class="circle">
    <a :href="op.link || '#'">
      <i :class="['ico',op.ico]"></i>
      {{op.skill}}
    </a>
    <el-progress :percentage="op.score" :color="colorSelect"></el-progress>
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
  computed: {
    colorSelect: function () {
      var _color = null
      switch (Math.floor(this.op.score / 10)) {
        case 0:
          _color = '#f56c6c';
          break
        case 1:
          _color = '#f56c6c';
          break
        case 2:
          _color = '#f56c6c';
          break
        case 3:
          _color = '#f56c6c';
          break
        case 4:
          _color = '#f56c6c';
          break
        case 5:
          _color = '#f56c6c';
          break
        case 6:
          _color = '#e6a23c';
          break
        case 7:
          _color = '#909399';
          break
        case 8:
          _color = '#409eff';
          break
        case 9:
          _color = '#67c23a';
          break
      }
      return _color
    }
  }
}
</script>
<style lang="scss" scoped>
.circle {
  max-width: 300px;
  margin: 0 auto;
  text-align: left;
  .ico {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-right: 5px;
  }
  .html {
    background: url(../assets/platform-sprite1.png) no-repeat -992px 0px;
  }
  .css {
    background: url(../assets/platform-sprite1.png) no-repeat -784px 0px;
  }
  .javascript {
    background: url(../assets/platform-sprite.png) no-repeat -3977px 0;
  }
  .bootstrap {
    background: url(../assets/platform-sprite.png) no-repeat -902px 0;
  }
  .html5 {
    background: url(../assets/platform-sprite.png) no-repeat -3608px 0;
  }
  .css3 {
    background: url(../assets/platform-sprite.png) no-repeat -1845px 0;
  }
  .angular {
    background: url(../assets/platform-sprite.png) no-repeat -410px 0;
  }
  .react {
    background: url(../assets/platform-sprite.png) no-repeat -6273px 0;
  }
  .node {
    background: url(../assets/platform-sprite.png) no-repeat -5371px 0;
  }
  .jquery {
    background: url(../assets/platform-sprite.png) no-repeat -3731px 0;
  }
  .ajax {
    background: url(../assets/platform-sprite1.png) no-repeat -832px 0px;
  }
  .less {
    background: url(../assets/platform-sprite.png) no-repeat -4510px 0;
  }
  .mysql {
    background: url(../assets/platform-sprite.png) no-repeat -5207px 0;
  }
  .mongo-db {
    background: url(../assets/platform-sprite.png) no-repeat -5043px 0;
  }
  .redis {
    background: url(../assets/platform-sprite.png) no-repeat -6314px 0;
  }
  .tcp-ip {
    background: url(../assets/platform-sprite1.png) no-repeat -480px 0px;
  }
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

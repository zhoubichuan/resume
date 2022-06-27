<template>
  <common>
    <div>
      <div class="box-card">
        <el-card>
          <img
            src="../../static/github.jpg"
            alt="图片"
          >
          <h3>我的gitHub：</h3>
          <a
            href="https://github.com/zhoubichuan"
          >https://github.com/zhoubichuan</a>
        </el-card>
      </div>
    </div>
    <div>
      <div class="box-card">
        <el-card>
          <img
            src="../../static/juejin.jpg"
            alt="图片"
          >
          <h3>我的掘金:</h3>
          <a
            href="https://juejin.im/user/5aabd522f265da237a4cc764/posts"
          >https://juejin.im/user/5aabd522f265da237a4cc764/posts</a>
        </el-card>
      </div>
    </div>
  </common>
</template>
<script>
import Common from "../common/Common";

export default {
  data() {
    return {
      msg: "123",
    };
  },
  components: {
    Common,
  },
};
</script>
<style lang="scss" scoped>
.box-card {
  margin: 0 auto;
  width: 80%;
  .el-card {
    margin: 10px 0;
    background: #cccccc;
    img {
      width: 100px;
    }
  }
}
</style>

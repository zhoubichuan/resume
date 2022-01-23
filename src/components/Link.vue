<template>
  <common :op="op">
    <div>
      <div class="box-card">
        <el-card>
          <img src="../assets/github.jpg" alt="图片" />
          <h3>我的gitHub：</h3>
          <a href="https://github.com/zhoubichuan"
            >https://github.com/zhoubichuan</a
          >
        </el-card>
      </div>
    </div>
    <div>
      <div class="box-card">
        <el-card>
          <img src="../assets/weixin.jpg" alt="图片" />
          <h3>我的微信：</h3>
          <span>zbc159x</span>
        </el-card>
      </div>
    </div>
    <div>
      <div class="box-card">
        <el-card>
          <img src="../assets/juejin.jpg" alt="图片" />
          <h3>我的掘金:</h3>
          <a href="https://juejin.im/user/5aabd522f265da237a4cc764/posts"
            >https://juejin.im/user/5aabd522f265da237a4cc764/posts</a
          >
        </el-card>
      </div>
    </div>
  </common>
</template>
<script>
import Common from "../common/Common";
import { mapState } from "vuex";

export default {
  data() {
    return {
      msg: "123",
    };
  },
  components: {
    Common,
  },
  computed: {
    ...mapState("link", ["op", "linkOp"]),
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

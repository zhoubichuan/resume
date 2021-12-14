<template>
  <common :op="op">
    <div
      v-for="(item, index) in linkOp"
      :key="index"
    >
      <div class="box-card">
        <el-card>
          <img
            :src="`/resume/assets/${item.ico || 'net'}.jpg`"
            alt="图片"
          >
          <h3>{{ item.name }}</h3>
          <a
            v-if="item.link"
            :href="item.link"
          >{{ item.link }}</a>
          <span v-if="item.text">{{ item.text }}</span>
        </el-card>
      </div>
      <div>{{ msg }}</div>
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

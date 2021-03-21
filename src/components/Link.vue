<template>
  <common :op="op">
    <el-row :gutter="24">
      <el-col
        :span="24"
        :xs="12"
        :sm="12"
        :md="12"
        :lg="12"
        :xl="3"
        v-for="(item, index) in linkOp"
        :key="index"
      >
        <div class="box-card">
          <el-card>
            <img :src="`../assets/${item.ico || 'net'}.jpg`" alt="图片" />
            <h3>{{ item.name }}</h3>
            <a v-if="item.link" :href="item.link">{{ item.link }}</a>
            <span v-if="item.text">{{ item.text }}</span>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </common>
</template>
<script>
import Common from "../common/Common";
import { mapState } from "vuex";

export default {
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

<template>
  <common :op="op">
    <el-carousel
      :interval="15000"
      arrow="always"
      style="padding: 0 40px"
    >
      <el-carousel-item
        v-for="item in knowledgeOp"
        :key="JSON.stringify(item)"
      >
        <el-row :gutter="24">
          <el-col :span="4">
            <el-card class="box-card">
              <div
                slot="header"
                class="clearfix"
              >
                <span>{{ item.title }}</span>
              </div>
              <div class="text item">
                {{ item.introduce }}
              </div>
            </el-card>
          </el-col>
          <el-col :span="20">
            <el-row :gutter="24">
              <el-col
                :xs="24"
                :sm="24"
                :md="8"
                :lg="8"
                :xl="6"
                v-for="(item2, index2) in item.content"
                :key="index2"
              >
                <Knowledge :op="item2" />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
  </common>
</template>

<script>
import Common from "../common/Common";
import Knowledge from "../common/Knowledge";
import { mapState } from "vuex";

export default {
  name: "Skill",
  components: {
    Common,
    Knowledge,
  },
  computed: {
    ...mapState("skill", ["op", "knowledgeOp"]),
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  background: #cccccc;
  height: 80vh;
}
.center {
  margin-top: 20px;
  text-align: center;
}
li {
  list-style: none;
  float: left;
}
</style>

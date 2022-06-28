<template>
  <common :op="op">
    <el-row :gutter="20">
      <el-col
        :span="12"
        :offset="6"
      >
        <tree
          class="content"
          :op="treeOp"
        />
      </el-col>
    </el-row>
  </common>
</template>
<script>
import Common from "../common/Common";
import Tree from "../common/Tree";
import { mapState } from "vuex";

export default {
  name: "AboutMe",
  components: {
    Common,
    Tree,
  },
  computed: {
    ...mapState("experience", ["op", "treeOp"]),
  },
};
</script>
<style lang="scss" scoped></style>

<template>
  <Common :op="op">
    <div class="main">
      <el-row :gutter="20">
        <el-col
          :span="12"
          :offset="6"
          style="width: 100%"
        >
          <div class="grid-content bg-purple">
            <p
              class="center"
              v-for="(item, index) in content"
              :key="index"
            >
              {{ item }}
            </p>
          </div>
        </el-col>
      </el-row>
    </div>
  </Common>
</template>

<script>
import Common from "../common/Common";
import { mapState } from "vuex";
import { getProject } from "../api";

export default {
  name: "Introduce",
  components: {
    Common,
  },
  computed: {
    ...mapState("introduce", ["op", "content"]),
  },
  mounted() {
    getProject().then((res) => {
      debugger;
    });
  },
};
</script>

<style lang="scss" scoped>
.center {
  margin-top: 20px;
  text-align: center;
}
.photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-size: 100%;
  margin: 10px auto;
  display: block;
}
</style>

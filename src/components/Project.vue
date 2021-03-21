<template>
  <common :op="op">
    <Work class="work" :op="workOp" />
  </common>
</template>

<script>
import Common from "../common/Common";
import Work from "../common/Work";
import { mapState } from "vuex";
export default {
  name: "Project",
  components: {
    Common,
    Work,
  },
  computed: {
    ...mapState("project", ["op", "currentDate", "workOp"]),
  },
};
</script>

<style lang="scss" scoped>
.work {
  margin: 0 auto;
  width: 80%;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.center {
  margin-top: 20px;
  text-align: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: calc(100% - 40px);
  margin: 10px 20px;
}
</style>

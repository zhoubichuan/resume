<template>
  <common :op="op">
    <div
      v-for="(item, index) in cardOp"
      :key="index"
    >
      <card :op="item" />
    </div>
  </common>
</template>

<script>
import Common from "../common/Common";
import Card from "../common/Card";
import { mapState } from "vuex";
// let img = require('@/assets/main.jpg')
export default {
  name: "AboutMe",
  components: {
    Common,
    Card,
  },
  computed: {
    ...mapState("aboutMe", ["op", "cardOp", "content"]),
  },
};
</script>

<style lang="scss" scoped>
.grid-content {
  text-align: center;
}
.grid-content .col-md-3 {
  margin-top: 40px;
}
</style>

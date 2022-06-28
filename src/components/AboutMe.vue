<template>
  <common :op="op">
    <div
      v-for="(item, index) in cardOp"
      :key="index"
    >
      <card :op="item" />
      <div
        ref="map"
        class="map"
      />
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
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    let {
      Map,
      View,
      layer: { WebGLTile: TileLayer },
      source: { OSM },
    } = ol;
    new Map({
      target: this.$refs.map,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [12579156, 3274244],
        zoom: 12,
      }),
    });
  },
};
</script>

<style lang="scss" scoped>
.map {
  width: 300px;
  height: 100px;
}
.grid-content {
  text-align: center;
}
.grid-content .col-md-3 {
  margin-top: 40px;
}
</style>

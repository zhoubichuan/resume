<template>
  <Common :op="op">
    <div class="main">
      <el-row :gutter="20">
        <el-col :span="12" :offset="6" style="width: 100%">
          <div class="grid-content bg-purple">
            <p class="center" v-for="(item, index) in content" :key="index">
              {{ item }}
            </p>
          </div>
        </el-col>
      </el-row>
      <div id="map" class="map" />
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
    let {
      Map,
      View,
      layer: { WebGLTile: TileLayer },
      source: { OSM },
    } = window.ol;
    new Map({
      target: document.getElementById('map'),
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
    getProject().then((res) => void 0);
  },
};
</script>

<style lang="scss" scoped>
.map {
  width: 300px;
  height: 200px;
  text-align: center;
  margin: 0 auto;
}

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

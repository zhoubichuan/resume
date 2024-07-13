<template>
  <div class="demo-page">
    <component
      v-if="comps"
      :is="comps"
    />
  </div>
</template>
  <script>
export default {
  data() {
    return {
      comps: "",
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let [type, name] = location.search.replace("?", "").split("&");
      if (!type) {
        type = "echarts";
      } else {
        type = type.split("=")[1];
      }
      if (!name) {
        name = "echarts";
      } else {
        name = name.split("=")[1];
      }
      if (type === "echarts") {
        // http://localhost:8090/resume/demo/?type=echarts&name=1-2-13-1.vue
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        this.comps = require(`web-echarts/demo/${name}`).default;
      }
      if (type === "openlayers") {
        // http://localhost:8090/resume/demo/?type=openlayers&name=1-1-0-0.vue
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        this.comps = require(`web-openlayers/demo/${name}`).default;
      }
      // if (type === "cesium") {
      //   // eslint-disable-next-line @typescript-eslint/no-var-requires
      //   this.comps = require(`web-cesium/demo/${name}`).default;
      // }
    },
  },
};
</script>

<style scoped>
.demo-page {
  height: 100%;
  width: 100%;
  position: relative;
}
.handle {
  position: absolute;
  left: 0;
}
.select {
  width: 400px;
}
.map {
  height: 100%;
  width: 100%;
}
</style>
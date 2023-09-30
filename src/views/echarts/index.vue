<template>
  <div class="demo-page">
    <div class="handle">
      <input
        class="select"
        type="text"
        :value="value"
      >
      <button @click="handleClick">
        修改
      </button>
    </div>
    <remoteLoad :url="url" />
  </div>
</template>
  <script>
import remoteLoad from "./remote.vue";
export default {
  components: {
    remoteLoad,
  },
  data() {
    return {
      value: "https://zhoubichuan.com/web-echarts/demo/1-2-13-1.vue",
      url: localStorage.currentMapDemoUrl,
    };
  },
  methods: {
    handleClick() {
      localStorage.currentMapDemoUrl = this.value;
    },
  },
};
</script>

<style>
.demo-page {
  height: 100vh;
  width: 100%;
  position: relative;
}
.handle {
  position: absolute;
  left: 0;
}
.select{
    width: 400px;
}
</style>
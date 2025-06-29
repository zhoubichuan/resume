<template>
  <div class="resume-app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style lang="scss">
.resume-app {
  height: 100%;
  width: 100%;
  position: absolute;
  li {
    list-style: none;
  }
  .el-main {
    padding: 0;
  }
}
</style>
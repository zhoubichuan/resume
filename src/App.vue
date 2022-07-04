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
  li {
    list-style: none;
  }
  .el-main {
    padding: 0;
  }
}
</style>
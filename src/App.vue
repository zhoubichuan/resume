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
body{
  background: url('/bg.svg') 50%/cover no-repeat;
}
</style>
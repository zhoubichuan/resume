<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created() {
    console.log(process.env, "process.env");
  },
};
</script>

<style lang="scss">
li {
  list-style: none;
}
.el-main {
  padding: 0;
}
</style>

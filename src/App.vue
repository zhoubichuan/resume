<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    console.log(process.env, 'process.env')
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}
.el-main {
  padding: 0;
}
</style>

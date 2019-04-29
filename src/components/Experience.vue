<template>
  <common :op="op">
    <div>experience</div>
  </common>
</template>
<script>
import Common from '../common/Common'
export default {
  name: 'AboutMe',
  components: {
    Common
  },
  data () {
    return {
      op: {
        id: 'experience',
        color: 'gray',
        title: '我的经历'
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

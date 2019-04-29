<template>
    <common :op="op">
        <div>message</div>
    </common>
</template>
<script>
import Common from '../common/Common'
export default {
  data () {
    return {op: {
      id: 'message',
      color: 'yellow',
      title: '留言板'
    }}
  },
  components: {
    Common
  }
}
</script>
<style lang="sass" scoped>

</style>

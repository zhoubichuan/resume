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
      color: 'yellow'
    }}
  },
  components: {
    Common
  }
}
</script>
<style lang="sass" scoped>

</style>

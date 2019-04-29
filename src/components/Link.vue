<template>
    <common :op="op">
        <div>link</div>
    </common>
</template>
<script>
import Common from '../common/Common'
export default {
  data () {
    return {op: {
      id: 'link',
      color: 'green',
      title: '联系我'
    }}
  },
  components: {
    Common
  }
}
</script>
<style lang="sass" scoped>

</style>

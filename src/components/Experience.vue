<template>
  <common :op="op">
    <tree :op="treeOp"></tree>
  </common>
</template>
<script>
import Common from '../common/Common';
import Tree from '../common/Tree';
export default {
  name: 'AboutMe',
  components: {
    Common,
    Tree
  },
  data () {
    return {
      op: {
        id: 'experience',
        color: 'gray',
        title: '我的经历'
      },
      treeOp: [
        {
          title: '湖北工xxxxx',
          time: '2018/4/12',
          content: '本科'
        },
        {
          title: '深圳市xxxx',
          time: '2018/4/12',
          content: '前端工程师'
        },
        {
          title: '软xxxxx',
          time: '2018/4/12',
          content: '前端工程师'
        },
        {
          title: '柠檬xxxxx',
          time: '2018/4/12',
          content: '前端工程师'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

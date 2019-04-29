<template>
  <common :op="op">
      <ul >
        <Knowledge v-for="(item,index) in knowledgeOp" :key="index" :op="item"/>
      </ul>
  </common>
</template>

<script>
import Common from '../common/Common'
import Knowledge from '../common/Knowledge'

export default {
  name: 'Skill',
  components: {
    Common,
    Knowledge
  },
  data () {
    return {
      op: {id: 'skill', color: '#4a839e', title: '知识储备'},
      knowledgeOp: [
        {e: 80, name: '前端技能'},
        {e: 80, name: '后端技能'},
        {e: 80, name: 'js'},
        {e: 80, name: 'js'},
        {e: 80, name: 'js'}]
    }
  }
}
</script>

<style scoped>
.center {
  margin-top: 20px;
  text-align: center;
}
li {
  list-style: none;
  float: left;
}
</style>

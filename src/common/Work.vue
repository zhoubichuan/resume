<template>
<el-tabs  v-model="activeName" @tab-click="handleClick">
  <el-tab-pane :label="item.name+'相关'" :name="'_'+index" v-for="(item,index) in op" :key="index">
    <el-row :gutter="24" >
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="3"  v-for="(item2,index2) in item.items" :key="index2" >
        <a class="box" :href="item2.link">
          <p>{{item2.title}}</p>
          <p>技术要点：{{item2.skill}}</p>
        </a>
      </el-col>
    </el-row>
  </el-tab-pane>
</el-tabs>
</template>
<script>
export default {
  props: {
    op: {
      type: Array
    }
  },
  data () {
    return { activeName: 'second' }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 200px;
  background: white;
  display: block;
  color: #333333;
  text-decoration: none;
  margin-bottom: 20px;
}
</style>

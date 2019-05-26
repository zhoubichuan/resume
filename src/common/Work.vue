<template>
<el-tabs  v-model="activeName" @tab-click="handleClick">
  <el-tab-pane :label="item.name+'相关'" :name="'_'+index" v-for="(item,index) in op" :key="index">
    <el-row :gutter="24" style="margin:0">
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="3"  v-for="(item2,index2) in item.items" :key="index2" >
        <a class="box" :href="item2.link">
          <img src="../assets/net.png" alt="">
          <div class="mask">
            <p>{{item2.title}}</p>
            <p>技术要点：{{item2.skill}}</p>
          </div>
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
    return { activeName: '_0' }
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
  background: white;
  display: block;
  color: #333333;
  text-decoration: none;
  margin: 10px 0;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    transition: all 0.7s;
  }
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: (0);
    top: 0;
    left: 0;
    color: coral;
    transition: all 0.7s;
    p {
      &:nth-child(1) {
        margin-top: 40px;
      }
    }
  }
  &:hover .mask {
    opacity: (0.75);
    transform: scale(1.1);
  }
  &:hover img {
    transform: scale(1.1);
  }
}
</style>

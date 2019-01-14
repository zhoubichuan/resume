<template>
  <div class="show" id="show">
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple">  
          <i class="photo"></i>
        </div>
      </el-col>
      <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple">
          <p class="center" v-for="(item,index) in content" :key="index">{{item}}</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Introduce",
  data() {
    return {
      content: [
        "我叫周必川",
        "一名全栈工程师",
        "zhoubichuan@icloud.com",
        "深圳"
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.show {
  background-color: #4d5e8f;
  height: 100vh;
}
.center {
  margin-top: 20px;
  text-align: center;
}
.photo {
  width: 100px;
  height: 100px;
  background: url("http://www.90she.win/personnet/img/ico.jpg") no-repeat 0 0;
  border-radius: 50%;
  background-size: 100%;
  margin: 10px auto;
  display: block;
}
</style>

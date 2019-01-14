<template>
  <div class="show" id="show">
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple">  
          <h1 class="center">关于我</h1>
        </div>
      </el-col>
      
      <el-col :span="12" :offset="6">
        <div class="grid-content bg-purple">  
          <p class="center" v-for="(item,index) in content" :key="index">{{item}}</p>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-button type="success" icon="el-icon-check" circle></el-button>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-button type="info" icon="el-icon-message" circle></el-button>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-button type="warning" icon="el-icon-star-off" circle></el-button>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      content: [
        "三年互联网经验,两年半全职前端开发经验",
        "熟悉MV*开发,深谙自动化,模块化开发之道",
        "高效的自学能力,具备独立分析解决问题能力",
        "强烈的自我驱动力,代码强迫症患者"
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.show {
  background-color: #85aea3;
  height: 100vh;
}
.center {
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

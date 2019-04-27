<template>
  <div class="show" id="about">
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
              <div class="col-md-3 col-sm-6 service"> <i class="fa fa-laptop"></i>
                <h4><strong>个人信息</strong></h4>
                <p>
            性名: 周必川 &nbsp;性别：男<br>
            年龄: 27岁 籍贯：湖北
            </p>
              </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-button type="info" icon="el-icon-message" circle></el-button>
            <div class="col-md-3 col-sm-6 service"> <i class="fa fa-code"></i>
                <h4><strong>专业学历</strong></h4>
                <p>
            专业：机械设计制造及其自动化<br>
            学历：大学本科<br>

            </p>
              </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-button type="warning" icon="el-icon-star-off" circle></el-button>
            <div class="col-md-3 col-sm-6 service"> <i class="fa fa-rocket"></i>
                <h4><strong>毕业学校</strong></h4>
                <p>
              毕业学校：湖北工业大学工程技术学院<br>
              学习技能：编程
            </p>
              </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
            <div class="col-md-3 col-sm-6 service"> <i class="fa fa-bullseye"></i>
                <h4><strong>联系方式</strong></h4>
                <p>weixie:zbc159x<br>
              邮箱：zhoubichuan@iclud.com</p>
              </div>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data () {
    return {
      content: []
    }
  },
  methods: {}
}
</script>

<style scoped>
.center {
  margin: 60px 0 40px;
}
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
.grid-content {
  text-align: center;
}
.grid-content .col-md-3 {
  margin-top: 20px;
}
</style>

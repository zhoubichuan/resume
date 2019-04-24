<template>
  <el-container>
    <el-header >
      <div class="left">
        <img src="" alt="" >
        <div>
          <p>Resume</p>
          <p>个人简历</p>
        </div>
      </div>
      <ul class="rigth">
        <li>关于我</li>
        <li>前端技能</li>
        <li>作品展示</li>
        <li>我的经历</li>
        <li>联系我</li>
        <li>留言板</li>
      </ul>
    </el-header>
    <el-main>
      <IntroduceComponents/>
      <aboutMeComponents/>
      <SkillComponents/>
      <ProjectComponents/>
    </el-main>
    <el-footer class="center">Design by：周必川 备案号： 鄂ICP备14014598号</el-footer>
</el-container>
</template>

<script>
import IntroduceComponents from '@/components/Introduce'
import AboutMeComponents from '@/components/AboutMe'
import SkillComponents from '@/components/Skill'
import ProjectComponents from '@/components/Project'
export default {
  name: 'Index',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      title: '我的博客'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {
    IntroduceComponents,
    AboutMeComponents,
    SkillComponents,
    ProjectComponents
  }
}
</script>

<style lang='scss' scoped="" type="type/css">
.el-header{
    z-index: 99;
    height: 50px;
    padding: 0 15px;
    background: #3f4245;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    .left{
      width:100px;
      display:flex;
      align-items: center;
      img{
        width:44px;
      }
      div{
        flex:1;
        p{
          height: 25px;
          line-height: 24px;
          font-size: 14px;
          text-align: center;
          color: #ccc;
          &:first-of-type {
              border-bottom: 1px solid #111;
          }
          &:last-of-type {
              border-top: 1px solid #666;
          }
        }
      }
    }
      .rigth {
        display:flex;
        align-items: center;
        li {
          flex:1;
          width: 78px;
          display: inline-block;
          line-height: 50px;
          text-align: center;
          color: #fff;
          cursor:pointer;
        }
      }
}
.show {
  background-color: #0f8d82;
  height: 100vh;
}
.center {
  margin-top: 20px;
  text-align: center;
}

</style>

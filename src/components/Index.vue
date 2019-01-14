<template>
  <el-container>
    <el-header>
      <div class="title">{{title}}</div>
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
import IntroduceComponents from "@/components/Introduce";
import AboutMeComponents from "@/components/AboutMe";
import SkillComponents from "@/components/Skill";
import ProjectComponents from "@/components/Project";
export default {
  name: "Index",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      title: "我的博客"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  components: {
    IntroduceComponents,
    AboutMeComponents,
    SkillComponents,
    ProjectComponents
  }
};
</script>

<style scoped>
.show {
  background-color: #0f8d82;
  height: 100vh;
}
.center {
  margin-top: 20px;
  text-align: center;
}
</style>

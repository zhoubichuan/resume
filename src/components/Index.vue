<template>
  <el-container>
    <el-main>
      <introduce />
      <nav-item @stopScoll="isStopScoll" :class="navStop ? 'navStop' : ''" />
      <about-me />
      <skill />
      <project />
      <Experience />
      <link-me />
      <message />
    </el-main>
    <el-footer class="center">{{ msg }}</el-footer>
  </el-container>
</template>

<script>
import NavItem from "./Nav";
import Introduce from "@/components/introduce";
import AboutMe from "@/components/aboutMe";
import Skill from "@/components/skill";
import Project from "@/components/project";
import Experience from "@/components/experience";
import LinkMe from "@/components/link";
import Message from "@/components/Message";
export default {
  name: "Index",
  data() {
    return {
      msg: "Design by：周必川 备案号： 鄂ICP备14014598号",
      navStop: false,
      activeIndex: "1",
      activeIndex2: "1",
      title: "我的博客",
    };
  },
  methods: {
    isStopScoll(e) {
      this.navStop = e;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  components: {
    Introduce,
    AboutMe,
    Skill,
    Project,
    NavItem,
    LinkMe,
    Message,
    Experience,
  },
};
</script>

<style lang="scss" scoped>
.el-main {
  padding: 0 !important;
}
.navStop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.center {
  padding-top: 20px;
  text-align: center;
  background: wheat;
}
</style>

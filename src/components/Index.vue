<template>
  <el-container>
    <nav-item></nav-item>
    <el-main>
      <introduce/>
      <about-me/>
      <skill/>
      <project/>
      <link-me/>
      <message/>
    </el-main>
    <el-footer class="center">Design by：周必川 备案号： 鄂ICP备14014598号</el-footer>
</el-container>
</template>

<script>
import NavItem from './Nav'
import Introduce from '@/components/Introduce'
import AboutMe from '@/components/AboutMe'
import Skill from '@/components/Skill'
import Project from '@/components/Project'
import LinkMe from '@/components/Link'
import Message from '@/components/Message'
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
    Introduce,
    AboutMe,
    Skill,
    Project,
    NavItem,
    LinkMe,
    Message
  }
}
</script>

<style lang='scss' scoped="" type="type/css">
.show {
  background-color: #0f8d82;
  height: 100vh;
}
.center {
  margin-top: 20px;
  text-align: center;
}

</style>

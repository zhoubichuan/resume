<template>
  <el-container>
    <el-main>
      <router-link :to="{ path: '/demo/?type=echarts&name=1-2-13-1.vue' }">
        1-2-13-1.vue
      </router-link>
      <introduce />
      <nav-item @stopScoll="isStopScoll" :class="navStop ? 'navStop' : ''" />
      <about-me />
      <skill />
      <skill2 />
      <skill3 />
      <skill4 />
      <!-- <project /> -->
      <note />
      <!-- <Experience /> -->
      <link-me />
      <message />
    </el-main>
  </el-container>
</template>

<script>
import NavItem from "./Nav";
import Introduce from "@/components/Introduce";
import AboutMe from "@/components/AboutMe";
import Skill from "@/components/Skill";
import Skill2 from "@/components/Skill2";
import Skill3 from "@/components/Skill3";
import Skill4 from "@/components/Skill4";
// import Project from "@/components/Project";
// import Experience from "@/components/experience";
import LinkMe from "@/components/Link";
import Message from "@/components/Message";
// import Common from "../common/Common";
// import Work from "../common/Work";
export default {
  name: "Index",
  data() {
    return {
      navStop: false,
      activeIndex: "1",
      activeIndex2: "1",
      title: "我的博客",
      project: "",
      frontend: "",
      backend: "",
      operation: "",
      other: "",
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
  created() {
    this.$api.getProject({}).then(
      (res) => {
        this.project = res.data;
      },
      (err) => void 0
    );
    this.$api.getFrontendNote({}).then(
      (res) => {
        this.frontend = res.data;
      },
      (err) => void 0
    );
    this.$api.getBackendNote({}).then(
      (res) => {
        this.backend = res.data;
      },
      (err) => void 0
    );
    this.$api.getOperationNote({}).then(
      (res) => {
        this.operation = res.data;
      },
      (err) => void 0
    );
    this.$api.getOtherNote({}).then(
      (res) => {
        this.other = res.data;
      },
      (err) => void 0
    );
  },
  components: {
    Introduce,
    AboutMe,
    Skill,
    Skill2,
    Skill3,
    Skill4,
    // Project,
    NavItem,
    LinkMe,
    Message,
    // Common,
    // Work,
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

.work {
  margin: 0 auto;
  width: 80%;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.center {
  margin-top: 20px;
  text-align: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  width: calc(100% - 40px);
  margin: 10px 20px;
}
</style>

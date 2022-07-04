<template>
  <el-container>
    <el-main>
      <introduce />
      <nav-item
        @stopScoll="isStopScoll"
        :class="navStop ? 'navStop' : ''"
      />
      <about-me />
      <skill />
      <common :op="{ id: 'note', title: '前端项目' }">
        <Work
          class="work"
          :op="project"
        />
      </common>
      <common :op="{ id: 'note', title: '前端笔记' }">
        <Work
          class="work"
          :op="frontend"
        />
      </common>
      <common :op="{ id: 'note', title: '后端笔记' }">
        <Work
          class="work"
          :op="backend"
        />
      </common>
      <common :op="{ id: 'note', title: '运维笔记' }">
        <Work
          class="work"
          :op="operation"
        />
      </common>
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
// import Experience from "@/components/experience";
import LinkMe from "@/components/Link";
import Message from "@/components/Message";
import Common from "../common/Common";
import Work from "../common/Work";
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
      (err) => {}
    );
    this.$api.getFrontendNote({}).then(
      (res) => {
        this.frontend = res.data;
      },
      (err) => {}
    );
    this.$api.getBackendNote({}).then(
      (res) => {
        this.backend = res.data;
      },
      (err) => {}
    );
    this.$api.getOperationNote({}).then(
      (res) => {
        this.operation = res.data;
      },
      (err) => {}
    );
  },
  components: {
    Introduce,
    AboutMe,
    Skill,
    NavItem,
    LinkMe,
    Message,
    Common,
    Work,
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

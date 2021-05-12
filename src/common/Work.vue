<template>
  <el-tabs
    v-model="activeName"
    @tab-click="handleClick"
  >
    <el-tab-pane
      :label="item.name"
      :name="'_' + index"
      v-for="(item, index) in op"
      :key="index"
    >
      <el-row
        :gutter="24"
        style="margin: 0"
      >
        <el-col
          :xs="12"
          :sm="12"
          :md="12"
          :lg="12"
          :xl="12"
          v-for="(item2, index2) in item.items"
          :key="index2"
        >
          <p>{{ item2.title }}</p>
          <a
            class="box"
            :href="item2.link"
          >
            <iframe
              :src="`https://zhoubichuan.github.io/${item2.img}/`"
            />
            <div class="mask">
              <p>{{ item2.title }}</p>
              <p>技术要点：{{ item2.skill }}</p>
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
      type: Array,
    },
  },
  data() {
    return {
      activeName: "_0",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  display: block;
  color: #333333;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  iframe {
    background: white;
    transition: all 0.7s;
    zoom: 90%;
    width: 50vw;
    height: 50vh;
  }
  .mask {
    position: absolute;
    zoom: 90%;
    width: 50vw;
    height: 50vh;
    background: #000;
    opacity: (0);
    top: 0;
    left: 2vw;
    color: coral;
    transition: all 0.7s;
    z-index: 1000;
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

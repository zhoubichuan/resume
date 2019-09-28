<template>
  <el-header ref="nav" id="head">
    <div class="left">
      <img src alt />
      <div @click="handleToTop">
        <p>{{navData.name1}}</p>
        <p>{{navData.name2}}</p>
      </div>
    </div>
    <ul class="rigth" @click="handleClick">
      <li
        v-for="(item,index) in navData.title"
        :key="index"
        :class="item.active ? 'active':''"
        :data-index="index"
      >{{item.name}}</li>
    </ul>
  </el-header>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      nav: {}
    };
  },
  computed: {
    ...mapState(["title", "navData"])
  },
  mounted() {
    console.log(this.title, this.navData);
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll: function() {
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      let scrollObj = document.querySelector("#head");
      let scrollHeight = scrollObj.scrollHeight;
      let height = window.pageYOffset;
      if (clientHeight < height + scrollHeight) {
        this.navData.title.forEach((item, index) => {
          if (Math.ceil(height / clientHeight) - 2 == index) {
            item.active = true;
          } else {
            item.active = false;
          }
        });
        this.$emit("stopScoll", true);
      } else {
        this.$emit("stopScoll", false);
      }
    },
    destory() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    handleClick(e) {
      if (e.target.nodeName.toLowerCase() === "li") {
        let index = +e.target.dataset.index + 1;
        this.title.forEach((item, index) => {
          item.active = false;
        });
        this.title[index - 1].active = true;
        let clientHeight =
          document.documentElement.clientHeight || document.body.clientHeight;
        document.documentElement.scrollTop = index * clientHeight - 30;
      }
    },
    handleToTop() {
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.el-header {
  z-index: 99;
  height: 50px;
  padding: 0 15px;
  background: #3f4245;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .left {
    width: 100px;
    display: flex;
    align-items: center;
    img {
      width: 44px;
    }
    div {
      flex: 1;
      cursor: pointer;
      p {
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
    display: flex;
    align-items: center;
    li {
      flex: 1;
      width: 78px;
      display: inline-block;
      line-height: 50px;
      text-align: center;
      color: #fff;
      cursor: pointer;
      &:hover {
        color: gray;
        transform: scale(1.1);
      }
    }
    .active {
      color: gray;
      transform: scale(1.1);
    }
  }
}
</style>

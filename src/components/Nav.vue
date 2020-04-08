<template>
  <el-header ref="nav" id="head">
    <el-row
      type="flex"
      class="row-bg"
      style="width:100%"
      justify="space-between"
    >
      <el-col :span="6">
        <div class="left">
          <img src alt />
          <div @click="handleToTop">
            <p>{{ navData.name1 }}</p>
            <p>{{ $t(navData.name2) }}</p>
          </div>
        </div>
      </el-col>
      <el-col :span="14">
        <ul class="rigth" @click="handleClick">
          <li
            v-for="(item, index) in navData.title"
            :key="index"
            :class="item.active ? 'active' : ''"
            :data-index="index"
          >
            {{ $t(item.name) }}
          </li>
        </ul>
      </el-col>
    </el-row>
  </el-header>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      nav: {},
    }
  },
  computed: {
    ...mapState(['navData']),
  },
  mounted() {
    console.log(this.title, this.navData)
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll: function() {
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight
      let scrollObj = document.querySelector('#head')
      let scrollHeight = scrollObj.scrollHeight
      let height = window.pageYOffset
      if (clientHeight < height + scrollHeight) {
        this.navData.title.forEach((item, index) => {
          if (Math.ceil(height / clientHeight) - 2 == index) {
            item.active = true
          } else {
            item.active = false
          }
        })
        this.$emit('stopScoll', true)
      } else {
        this.$emit('stopScoll', false)
      }
    },
    destory() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    handleClick(e) {
      if (e.target.nodeName.toLowerCase() === 'li') {
        let index = +e.target.dataset.index + 1
        this.title.forEach((item, index) => {
          item.active = false
        })
        this.title[index - 1].active = true
        let clientHeight =
          document.documentElement.clientHeight || document.body.clientHeight
        document.documentElement.scrollTop = index * clientHeight - 30
      }
    },
    handleToTop() {
      this.$i18n.locale = this.$i18n.locale === 'cn_ZH' ? 'en_US' : 'cn_ZH'
      localStorage.lang = this.$i18n.locale
      // document.documentElement.scrollTop = 0;
    },
  },
}
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
    height: 100%;
    align-items: center;
    li {
      flex: 1;
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

<template>
  <el-header  ref="nav" id="head">
      <div class="left">
        <img src="" alt="" >
        <div @click="handleToTop">
          <p>Resume</p>
          <p>个人简历</p>
        </div>
      </div>
      <ul class="rigth" @click="handleClick">
        <li  v-for="(item,index) in title" :key="index" :class="item.active ? 'active':''" :data-index="index">{{item.name}}</li>
      </ul>
    </el-header>
</template>
<script>
export default {
  data () {
    return {
      title: [
        { name: '关于我', link: 'about', active: false },
        { name: '前端技能', link: 'skill', active: false },
        { name: '作品展示', link: 'project', active: false },
        { name: '我的经历', link: 'experience', active: false },
        { name: '留言板', link: 'message', active: false },
        { name: '联系我', link: 'link', active: false }
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  methods: {
    handleScroll: function () {
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight
      let scrollObj = document.querySelector('#head')
      let scrollHeight = scrollObj.scrollHeight
      let height = window.pageYOffset
      if (clientHeight < height + scrollHeight) {
        this.$emit('stopScoll', true)
      } else {
        this.$emit('stopScoll', false)
      }
    },
    destory () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    handleClick (e) {
      if (e.target.nodeName.toLowerCase() === 'li') {
        let index = +e.target.dataset.index + 1
        this.title.forEach((item, index) => {
          item.active = false
        })
        this.title[index - 1].active = true
        console.log(this.title)
        let clientHeight =
          document.documentElement.clientHeight || document.body.clientHeight
        document.documentElement.scrollTop = index * clientHeight - 60
      }
    },
    handleToTop () {
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang='scss' scoped="" type="type/css">
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
        background: red;
        border-radius: 15px;
      }
    }
    .active {
      background: red;
      border-radius: 15px;
    }
  }
}
</style>

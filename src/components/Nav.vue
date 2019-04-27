<template>
  <el-header >
      <div class="left">
        <img src="" alt="" >
        <div>
          <p>Resume</p>
          <p>个人简历</p>
        </div>
      </div>
      <ul class="rigth">
        <li  v-for="(item,index) in title" :key="index"><router-link :to="item.link">{{item.name}}</router-link></li>
      </ul>
    </el-header>
</template>
<script>
export default {
  data () {
    return {
      title: [
        { name: '关于我', link: 'about' },
        { name: '前端技能', link: 'skill' },
        { name: '作品展示', link: 'project' },
        { name: '我的经历', link: 'experience' },
        { name: '联系我', link: 'link' },
        { name: '留言板', link: 'message' }
      ]
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
      a{
          color: #fff;
      }
    }
  }
}
</style>

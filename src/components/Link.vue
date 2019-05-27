<template>
<common :op="op">
    <el-row :gutter="24">
      <el-col :span="24" :xs="12" :sm="12" :md="12" :lg="12" :xl="3" v-for="(item,index) in linkOp" :key="index">
        <div class="box-card">
          <el-card>
            <img :src="item.ico" alt="">
            <h3>{{item.name}}</h3>
            <a v-if="item.link" :href="item.link">{{item.link}}</a>
            <span v-if="item.text">{{item.text}}</span>
          </el-card>
        </div>
      </el-col>
    </el-row>
</common>
</template>
<script>
import Common from '../common/Common';
import github from '../assets/github.jpg';
import weibo from '../assets/weibo.jpg';
import weixin from '../assets/weixin.jpg';
import juejin from '../assets/juejin.jpg';
export default {
  data () {
    return {
      op: {
        id: 'link',
        title: '联系我'
      },
      linkOp: [
        {
          name: '我的gitHub：',
          ico: github,
          link: 'https://github.com/zhoubichuan'
        },
        {
          name: '我的微博：',
          ico: weibo,
          link: 'https://github.com/zhoubichuan'
        },
        { name: '我的微信：', ico: weixin, text: 'zbc159x' },
        {
          name: '我的掘金:',
          ico: juejin,
          link: 'https://juejin.im/user/5aabd522f265da237a4cc764/posts'
        }
      ]
    }
  },
  components: {
    Common
  }
}
</script>
<style lang="scss" scoped>
.box-card {
  margin: 0 auto;
  width: 80%;
  .el-card {
    margin: 10px 0;
    background: #cccccc;
    img {
      width: 100px;
    }
  }
}
</style>

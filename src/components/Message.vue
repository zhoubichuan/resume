<template>
    <common :op="op">
        <div class="message">
          <div class="message-box">
            <div class="top">
              <el-input
                type="text"
                placeholder="请输入姓名"
                v-model="name"
                maxlength="10"
                show-word-limit
              >
              </el-input>
              <div class="image">
                <div class="block" v-for="(item,index) in imgUrl" :key="index">
                  <el-image style="width: 40px; height: 40px" :src="item"></el-image>
                </div>
              </div>
            </div>
            <el-input
              type="textarea"
              placeholder="请输入内容"
              v-model="content"
              maxlength="30"
              show-word-limit
            >
            </el-input>
            <el-button class="btn" @click="handleClick" type="primary">留言</el-button>
          </div>
          <div class="message-box">
            大家的评论：
            <ul >
              <li v-for="(item,index) in message" :key="index">
                <el-image style="width: 40px; height: 40px" :src="item.img"></el-image>
                <div class="right">
                  <span class="name">{{item.name}}:</span>
                  <span>{{item.content}}</span>
                  <p>{{item.time}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </common>
</template>
<script>
import Common from '../common/Common';
export default {
  data () {
    return {
      imgUrl: [
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      ],
      ico: '',
      name: '',
      content: '',
      op: {
        id: 'message',
        title: '留言板'
      },
      message: [
        {
          img:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          name: '李白',
          content: '床前明月光',
          time: '2019年5月26日 18:30'
        },
        {
          img:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          name: '杜甫',
          content: '安得广厦千万间',
          time: '2019年5月26日 18:30'
        },
        {
          img:
            'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          name: '杜牧',
          content: '清明时节雨纷纷',
          time: '2019年5月26日 18:30'
        }
      ]
    }
  },
  methods: {
    handleClick () {
      var message = {
        img: this.imgUrl[0],
        name: this.mame,
        content: this.content,
        time: new Date()
      }
      this.message.push(message)
      this.img = '';
      this.name = '';
      this.content = '';
    }
  },
  components: {
    Common
  }
}
</script>
<style lang="scss" scoped>
.message {
  width: 50%;
  margin: 0 auto;
  .message-box {
    .top {
      margin: 20px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      .el-input {
        width: 200px;
      }
      .image {
        display: inline-block;
        .block {
          display: inline-block;
          padding: 0 5px;
        }
      }
    }
    .write {
      height: 80px;
      width: 400px;
      border: none;
      border-radius: 5px;
      background: lightgray;
      outline: none;
    }
    .btn {
      margin-top: 20px;
    }
  }
  .message-box {
    text-align: left;
    margin-top: 20px;
    ul {
      margin: 0 auto;
      li {
        text-align: left;
        padding: 2px 5px;
        display: flex;
        flex-direction: row;
        .right {
          display: inline-block;
          margin-left: 10px;
          p {
            color: gray;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
style

<template>
  <common :op="op">
    <div class="message">
      <div class="message-box">
        <div class="top">
          <el-input type="text"
                    placeholder="请输入姓名"
                    v-model="message.name"
                    maxlength="10"
                    show-word-limit></el-input>
          <div class="image">
            <div class="block"
                 v-for="(item, index) in imgUrl"
                 :key="index">
              <el-image style="width: 40px; height: 40px"
                        :src="item"></el-image>
            </div>
          </div>
        </div>
        <el-input type="textarea"
                  placeholder="请输入内容"
                  v-model="message.content"
                  maxlength="30"
                  show-word-limit></el-input>
        <el-button class="btn"
                   @click="handleClick"
                   type="primary">留言</el-button>
      </div>
      <div class="message-box">
        大家的评论：
        <ul>
          <li v-for="(item, index) in messageList"
              :key="index">
            <el-image style="width: 40px; height: 40px"
                      :src="item.img"></el-image>
            <div class="right">
              <span class="name">{{ item.name }}:</span>
              <span>{{ item.content }}</span>
              <p>{{ item.time }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </common>
</template>
<script>
import Common from '../common/Common'
import { mapState } from 'vuex'

export default {
  components: {
    Common,
  },
  data () {
    return {
      message: {},
      messageList: [],
    }
  },
  computed: {
    ...mapState('message', [
      'imgUrl',
      'ico',
      'name',
      'content',
      'op',
      // 'message',
    ]),
  },
  methods: {
    handleClick () {
      var message = {
        img: this.imgUrl[0],
        name: this.mame,
        content: this.content,
        time: this.$moment().format('YYYY-MM-DD HH:mm:ss'),
        ...this.message,
      }
      this.messageList.push(message)
      this.img = ''
      this.name = ''
      this.content = ''
    },
  },
}
</script>
<style lang="scss" scoped>
.message {
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

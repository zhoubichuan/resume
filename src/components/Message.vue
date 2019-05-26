<template>
    <common :op="op">
        <div class="message">
          <div class="message-box">
            <textarea class="write" ref="content"></textarea>
            <button @click="handleClick">留言</button>
          </div>
          <ul class="">
            <li v-for="(item,index) in message" :key="index">
              <span class="name">{{item.name}}:</span>
              <span>{{item.content}}</span>
            </li>
          </ul>
        </div>
    </common>
</template>
<script>
import Common from '../common/Common'
export default {
  data () {
    return {
      op: {
        id: 'message',
        color: 'lavender',
        title: '留言板'
      },
      message: [
        {name: '小明', content: '吃饭了没'},
        {name: '小明', content: '吃饭了没'},
        {name: '小明', content: '吃饭了没'}
      ]
    }
  },
  methods: {
    handleClick () {
      this.message.push({name: '小明', content: this.$refs.content.value})
      this.$refs.content.value = ''
    }
  },
  components: {
    Common
  }
}
</script>
<style lang="scss" scoped>
.message{
  .message-box{
    .write {
        height: 80px;
        width: 400px;
        border: none;
        border-radius: 5px;
        background: lightgray;
        outline: none;
    }
  }
  ul{
        width: 50%;
    margin: 0 auto;
    li{
      text-align: left;
    padding: 2px 5px;
    }
  }
}
</style>
style
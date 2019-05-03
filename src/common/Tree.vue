<template>
    <div class="tree">
         <ul class="left">
            <li v-for="(item,index) in op" :key="index" :class="index%2?'hidden':''">
                <div class="box">
                    <i class="dot"></i>
                    <div class="title">{{item.title}}</div>
                    <div class="content">{{item.content}}</div>
                </div>
            </li>
        </ul>
         <ul class="rigth">
            <li v-for="(item,index) in op" :key="index" :class="!(index%2)?'hidden':''">
                <div class="box">
                    <i class="dot"></i>
                    <div class="title">{{item.title}}</div>
                    <div class="content">{{item.content}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  props: ['op']
}
</script>
<style lang="scss" scoped>
.tree{
    display:flex;
    flex-direction: row;
    width: 100%;
    .left{
        width: 50%;
        border-right: 10px solid rebeccapurple;
        li{
        margin-top: 20px;
        position: relative;
        &::before{
            content: '';
            height: 2px;
            width: 200px;
            background: red;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(50%);
        }
        .box{
            width: 200px;
            background: white;
            padding: 10px 5px;
            border-radius: 10px;
            margin: 0 auto;
            margin-left: 50%;
            z-index: 20px;
            position: relative;
        }
        }
        .hidden{
                opacity: 0;
        }
    }
    .rigth{
        width: 50%;
        border-left: 10px solid rebeccapurple;
        li{
        margin-top: 20px;
        position: relative;
        &::before{
            content: '';
            height: 2px;
            width: 200px;
            background: red;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(50%);
        }
        .box{
            width: 200px;
            background: white;
            padding: 10px 5px;
            border-radius: 10px;
            margin: 0 auto;
            margin-left:200px;
            z-index: 20px;
            position: relative;
        }
        }
        .hidden{
                opacity: 0;
        }
    }
}
</style>

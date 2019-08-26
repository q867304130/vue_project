<template>
    <div>
    <mt-swipe :auto="4000">
    <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
      <img :src="item.url" :alt="item.alt">
    </mt-swipe-item>
    </mt-swipe>
    </div>
</template>

<script>
export default {
    props:["lunbotuList"]
}
</script>

 <style lang="sass" scoped>
    .mint-swipe{
        height: 200px;
    }
    img {    
          width: 100%;
          height: 100%;
        }
    .mint-swipe-item:nth-child(1){
        background-color: red
    }
    .mint-swipe-item:nth-child(2){
        background-color: blue
    }
    .mint-swipe-item:nth-child(3){
          background-color: cyan
    }
      
</style>
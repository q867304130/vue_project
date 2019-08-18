<template>
    <div>
        <!-- 轮播图 -->
  <mt-swipe :auto="4000">
  <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
      <img :src="item.url" :alt="item.alt">
  </mt-swipe-item>
  </mt-swipe>
  <!-- 格子图标 -->
  <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="./images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="./images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="./images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="./images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="./images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="./images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		            
		        </ul>
        <h3>Home</h3>
    </div>
</template>

<script>
export default {
    data(){
        return{
            lunbotuList:[{url:"./images/轮播图/pic01.jpg" ,alt:'pic01.jpg'},
                        {url:"./images/轮播图/pic02.jpg" ,alt:'pic02.jpg'},
                        {url:"./images/轮播图/pic03.jpg" ,alt:'pic03.jpg'}]
        }
    },
    created() {
        this.getLunbotu() 
    },
    methods: {
        getLunbotu(){
            this.$http.get('http://vue.studyit.io/api/getlunbo').then((result) => {
                console.log(result.body);
            
            }).catch((err) => {
                console.log("数据请求失败");
            });
        }
    },
}
</script>

<style lang="sass" scoped>
    .mint-swipe{
        height: 200px;
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
      img{
          width: 100%;
          height: 100%;
      }
      .mui-grid-view.mui-grid-9{
          background-color:white; 
          border: none;
          img{
              width:60px;
              height:60px;
          }
          .mui-media-body{
            font-size:13px;
        }
          
      }
      .mui-grid-view.mui-grid-9 .mui-table-view-cell{
          border: none;
      }
      
</style>
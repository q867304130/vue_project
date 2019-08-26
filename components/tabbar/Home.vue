<template>
    <div>
        <!-- 轮播图 -->
  <swiper :lunbotuList="lunbotuList"></swiper>
  <!-- 格子图标 -->
  <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                    <img src="./images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
		                    <img src="./images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/shop">
		                    <img src="./images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/liuyan">
		                    <img src="./images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/video">
		                    <img src="./images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/callour">
		                    <img src="./images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></router-link></li>
		            
		        </ul>
    </div>
</template>

<script>
import swiper from  '../subcom/shopinfo/Swiper.vue'  //引用轮播图路由组件
export default {
    data(){
        return{
            lunbotuList:[{url:"./images/轮播图/pic01.jpg" ,alt:'pic01.jpg'},
                        {url:"./images/轮播图/pic02.jpg" ,alt:'pic02.jpg'},
                        {url:"./images/轮播图/pic03.jpg" ,alt:'pic03.jpg'}]
        }
    },
    created() {
        // this.getLunbotu() 
    
    },
    methods: {
        // getLunbotu(){
        //     this.$http.get('http://vue.studyit.io/api/getlunbo').then((result) => {
        //         console.log(result.body);
            
        //     }).catch((err) => {
        //         console.log("数据请求失败");
        //     });
        // }
       
    },
    components:{
        swiper
    }
}
</script>

<style lang="sass" scoped>
   
    
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
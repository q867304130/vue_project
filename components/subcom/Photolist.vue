<template>
    <div>
         <!-- 头部滑动条区域 -->
        
    <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted ">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id">{{item.tittle}}</a>
                    
                </div>
            </div>
    </div>
   

    <!-- 图片列表区域 -->
<ul class="photo-list">
  <li v-for="item in photolist" :key="item.id">
    <img v-lazy="item.img_url">
<div class="info">
    <h1 class="info-tittle">{{item.tittle}}</h1>
    <div class="info-body">{{item.zhaiyao}}</div>
</div>
  </li>
</ul>

    </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.js'

export default {
    data(){
        return {
           cates:[{tittle:"全部",id:0},
               {tittle:"家居生活",id:1},
           {tittle:"摄影设计",id:2},
           {tittle:"明星美女",id:3},
           {tittle:"空间设计",id:4},
           {tittle:"户外摄影",id:5}] ,
        
            photolist:[{id:0,tittle:"生活的灵感组图",img_url:"./images/轮播图/pic01.jpg",zhaiyao:"收集了各种生活设计图片"},
            {id:1,tittle:"生活的灵感组图",img_url:"./images/轮播图/pic02.jpg",zhaiyao:"收集了各种生活设计图片"},
            {id:2,tittle:"生活的灵感组图",img_url:"./images/轮播图/pic03.jpg",zhaiyao:"收集了各种生活设计图片"},
            {id:3,tittle:"生活的灵感组图",img_url:"./images/轮播图/pic04.jpg",zhaiyao:"收集了各种生活设计图片"}]
        }

    },
    methods: {
        // getAllCategroy(){
        //     this.$http.get('API').then(result=>{
        //         if(result.body.status ===0){
        //             this.cates.unshirt({tittle:"全部",id:0})
        //         }
        //     })  
        //  获取API数据方法
        
    },
    mounted() {
        mui('./mui-scroll-wrapper').scroll({
    deceleration:0.0005  
}) //当组件DOM结构被渲染好并放在页面中后，会执行过这个钩子函数
    },
}
</script>   

<style lang="sass" scoped>
    *{
        touch-action:pan-y;
    }
    
.photo-list{
    list-style:none;
    margin:0;
    padding:10px;
    li{
        text-align:center;
        margin-bottom:10px;
        box-shadow:0 0 6px #999;
        position:relative;
    img{
        width:100%;  
    }
    img[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
// 图片懒加载图标效果
}
    }
    .info{
        color:white;
        text-align:left;
        position:absolute;
        bottom:0;
        background-color:rgba(0,0,0,0.4);
        max-height:84px;
    .info-tittle{
        font-size:14px;
    }
    .info-body{
        font-size:13px;
    }
    }
    }
    
    
</style>
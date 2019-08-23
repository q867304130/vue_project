import VueRouter from 'vue-router'

import home from '../components/tabbar/Home.vue'
import member from '../components/tabbar/Member.vue'
import shopcar from '../components/tabbar/Shopcar.vue'
import search from '../components/tabbar/Search.vue'

import newslist from '../components/subcom/Newslist.vue'
import newsinfo from '../components/subcom/newscom/Newsinfo.vue';

import photolist from '../components/subcom/Photolist.vue';

import shop from '../components/subcom/Shop.vue';
import shopinfo from '../components/subcom/shopinfo/Shopinfo.vue'
import liuyan from '../components/subcom/Liuyan.vue';
import video from '../components/subcom/Video.vue';
import callour from '../components/subcom/Callour.vue';




const router = new VueRouter({
    routes:[{path:'/',redirect:'/home'},
        {path:'/home',component:home},
    {path:'/member',component:member},
    {path:'/shopcar',component:shopcar},
    {path:'/search',component:search},
    {path:'/home/newslist',component:newslist},
    {path:'/home/newsinfo/:id',component:newsinfo},
    {path:'/home/Photolist',component:photolist},
    {path:'/home/shop',component:shop},
    {path:'/home/shopinfo/:id',component:shopinfo ,name:"shopinfo"},
    {path:'/home/liuyan',component:liuyan},
    {path:'/home/video',component:video},
    {path:'/home/callour',component:callour}
       //：id表示传的id参数
],
linkActiveClass:'mui-active' //覆盖默认的路由高亮类，默认的类是router-link-active
})

export default router
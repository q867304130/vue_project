import VueRouter from 'vue-router'

import home from '../components/tabbar/Home.vue'
import member from '../components/tabbar/Member.vue'
import shopcar from '../components/tabbar/Shopcar.vue'
import search from '../components/tabbar/Search.vue'
import newslist from '../components/subcom/Newslist.vue'

import newsinfo from '../components/subcom/newscom/Newsinfo.vue';



const router = new VueRouter({
    routes:[{path:'/',redirect:'/home'},
        {path:'/home',component:home},
    {path:'/member',component:member},
    {path:'/shopcar',component:shopcar},
    {path:'/search',component:search},
    {path:'/home/newslist',component:newslist},
    {path:'/home/newsinfo/:id',component:newsinfo}   //：id表示传的id参数
],
linkActiveClass:'mui-active' //覆盖默认的路由高亮类，默认的类是router-link-active
})

export default router
import $ from 'jquery'

import './css/index.css'
import 'bootstrap/dist/css/bootstrap.css' //导入bootstrap

import Vue from 'vue'

import app from './APP.vue' //导入APP组件

import VueRouter from 'vue-router' //导入路由模块

Vue.use(VueRouter)  //手动安装路由模块到vue中

import VueResource from 'vue-resource' //导入vue-resource模块
Vue.use(VueResource)


import router from './router.js' //导入自定义路由模块
import MintUi from 'mint-ui'    //完整导入MintUi
import 'mint-ui/lib/style.css'
Vue.use(MintUi)  

// import { Header,Switch,SwipeItem,Button ,Lazyload} from 'mint-ui'  //按需导入MintUi
// Vue.component(Header.name,Header) 
// Vue.component(Switch.name,Switch)
// Vue.component(SwipeItem.name,SwipeItem)
// Vue.component(Button.name,Button)
// Vue.use(Lazyload)

import  '../lib/mui/css/mui.css'
import  '../lib/mui/css/icons-extra.css'
 


// $(function(){
//     $('li:odd').css('backgroundColor','red');
//     $('li:even').css('backgroundColor','blue');
// })

// class Person {
//    static info = {name:'wwz',age:23}
// }
// console.log(Person.info);

var vm =new Vue({
    el:'#app',
    data:{
        msg:'wwwwwww'
    },
    render: c => c(app),
    router

})
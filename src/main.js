import $ from 'jquery'

import './css/index.css'
import 'bootstrap/dist/css/bootstrap.css' //导入bootstrap

import Vue from 'vue'

import app from './APP.vue' //导入APP组件

import VueRouter from 'vue-router' //导入路由模
Vue.use(VueRouter)  //手动安装路由模块到vue中

import VueResource from 'vue-resource' //导入vue-resource模块
Vue.use(VueResource)

import VueX from 'vueX'; //导入VueX模块
Vue.use(VueX)

var car = JSON.parse(localStorage.getItem('car'|| '[]' ))
//每次进入网站，加载main.js，先从本地存储冲把购物车中的car数组读取出来
var store = new VueX.Store({
    state:{ //this.$store.***
       car: car
    },
    mutations:{ //this.$store.commit('方法名',按需传入唯一的参数)
    addToCar(state,shopsinfo){ 
        //点击加入购物车，把商品信息保存到state中的car上
        //如果购物车中有这个对于商品就更新数量，如果没有，则把商品数据push 到 car中
        var flag = false;
        state.car.some(item => {
            if(item.id == shopsinfo.id){
                item.count += parseInt(shopsinfo.count)
                flag = true;
                
                return true
                
            }    
        })
        if(!flag){
            state.car.push(shopsinfo)
            
        }
        //当更新car之后，把car数组存储到本地 localstorage 中
        localStorage.setItem('car',JSON.stringify(state.car))
        

    }
    },
    getters:{ //this.$store.getters.***
        getAllCount(state){
           var c = 0;
           state.car.forEach(item => {
               c += item.count
           }) 
           return c;
        }
    }

})

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
    router,
    store

})
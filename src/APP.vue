<template>
    <div class="app-contain">
        <!-- <h1>APP组件</h1> -->
        <mt-header fixed title="Vue项目"></mt-header>  
		<transition mode="out-in">
		<router-view></router-view>
		</transition>
        
        <nav class="mui-bar mui-bar-tab">       
			<router-link class="mui-tab-item-bm " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-bm" to="/member"> 
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-bm" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">{{$store.getters.getAllCount}}</span>
					</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-bm" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
        
    </div>
</template>

<style lang="sass" scope>

    .app-contain{
        padding-top: 40px;
		padding-bottom: 50px;
		overflow-x: hidden;
		
    }
	.v-enter{
		opacity: 0;
		transform: translateX(100%)	
	}
	.v-leave-to{
		opacity: 0;
		transform: translateX(-100%)
	}
	.v-enter-active,
	.v-leave-active{
		transition: all 0.3s ease;
	}

	.mui-bar-tab .mui-tab-item-bm.mui-active {
    color: #007aff;
}
	.mui-bar-tab .mui-tab-item-bm {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
	}
	.mui-bar-tab .mui-tab-item-bm .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-bm .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}


</style>
 
<script>
import { Toast } from 'mint-ui';


export default {
    
    data:function(){
        return{
			appmsg:'appmsg'
        }
    },
    
    methods: {
		
	},

}
</script>
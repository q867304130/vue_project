<template>
    <div class="app-contain">
        <!-- <h1>APP组件</h1> -->
        <mt-header fixed title="Vue项目"></mt-header>  
		<transition mode="out-in">
		<router-view></router-view>
		</transition>
        
        <nav class="mui-bar mui-bar-tab">       
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member"> 
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
        
    </div>
</template>

<style scope>
    .app-contain{
        padding-top: 40px;
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
</style>
 
<script>
import { Toast } from 'mint-ui';

export default {
    
    data:function(){
        return{
            appmsg:'appmsg',
        }
    },
    
    methods: {

    },
    
}
</script>
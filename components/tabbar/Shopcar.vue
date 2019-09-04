<template>
    <div class="shopcar">
        <div class="shops-list" >
            <!-- 商品列表区域 -->
            <div class="mui-card" v-for="item in shopcar" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch></mt-switch>
                        <img src="item.img_src" alt="">
                        <div class="info">
                            <h1>{{item.tittle}}</h1>
                            <p>
                                <span class="price">￥{{item.price}}</span>
                                <numbox @getcount="getCount"></numbox>
                                <a href="#">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>
            <!-- 结算区域 -->
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
					</div>
				</div>
			</div>
        </div>
    </div>
</template>

<script>
import numbox from '../subcom/Shopcar_numbox.vue';
export default {
    mounted() {
        this.getShopsList()
    },
    data() {
        return {
            shopcar : [],
            count:this.shopcar[]
        }
    },
    methods: {
        getShopsList(){
        this.shopcar = this.$store.state.car;    
        },
        getCount(count){

        }
    },
    components:{
        numbox
    }
}
</script>

<style lang="sass" scoped>
    .shopcar{
       background-color: #eee;
       overflow: hidden;
       .shops-list{
           .mui-card-content-inner{
               display: flex;
               align-items: center;
               }
           img{
               width: 60px;
               height: 60px;
               }
            h1{  
                font-size: 13px;
                }
                .info{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .price{
                        color: red;
                        font-weight: bold;
                        }
                    }
                }
        }
</style>
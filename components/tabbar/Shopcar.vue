<template>
    <div class="shopcar">
        <div class="shops-list" >
            <!-- 商品列表区域 -->
            <div class="mui-card" v-for="(item , index) in shopcar" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch></mt-switch>
                        <img src="item.img_src" alt="">
                        <div class="info">
                            <h1>{{item.tittle}}</h1>
                            <p>
                                <span class="price">￥{{item.price}}</span>
                                <numbox :shopid="item.id"  :numcount="item.count"></numbox>
                                <a href="#" @click.prevent="remove(item.id,index)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>
            <!-- 结算区域 -->
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan" >
						<div class="left">
                            <p>总计（不含运费）</p>
                            <p>已勾选商品<span style="color:red">0</span>  件，总价￥<span style="color:red">0</span></p>
                        </div>
                        <mt-button type="danger">去结算</mt-button>
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
            
            
        }
    },
    methods: {
        getShopsList(){
        this.shopcar = this.$store.state.car;    
        },
        remove(id,index){
            this.shopcar.splice(index,1),
            this.$store.commit("removeFormCar",id)
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
           .jiesuan{
               display: flex;
               justify-content: space-between;
               align-items: center;
               }
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
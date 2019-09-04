<template>
    <div class="shopinfo">
        <!-- 商品轮播 -->
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :lunbotuList="shopinfolist"></swiper>
					</div>
				</div>
			</div>
        <!-- 商品购买 -->
        <div class="mui-card">
				<div class="mui-card-header">{{shopinfolist[id].tittle}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                            市场价:<del >￥{{shopinfolist[id].market_price}}</del> &nbsp;&nbsp;销售价:<span class="now_price">￥{{shopinfolist[id].sell_price}}</span>
                        </p>
                        <p>购买数量:<num_box @getcount="getSelectCount"></num_box></p>
                        <p>
                            <mt-button type="primary" size="small">立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                            
                        </p>

					</div>
				</div>
				<div class="mui-card-footer"></div>
			</div>
        <!-- 商品参数 -->
        <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号:{{shopinfolist[id].id}}</p>
						<p>库存情况:充足</p>
						<p>上架时间:{{shopinfolist[id].add_time}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<mt-button type="primary" size="large" plain @click="getshopintroduce(id)">图文介绍</mt-button>
					<mt-button type="danger" size="large" plain @click="getshopcomment(id)">商品评论</mt-button>
				</div>
			</div>
    </div>
</template>

<script>
import swiper from './Swiper.vue';
import num_box from './Num_box.vue';
export default {
    
    data(){
        return {
            id:this.$route.params.id,
            selectedCount: 1,
            shopinfolist:[{id:0,tittle:"华为（HUAWEI）荣耀6Plus 16G双4G版",add_time:"2015-04-19",sell_price:2195,market_price:2499,count:this.selectedCount,url:"https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/34403627/O1CN01mfXJ6D1cfD5IoazsU_!!0-saturn_solar.jpg_230x230.jpg_.webp" ,alt:'pic01.jpg'},
                        {id:1,tittle:"小米(MI)Note 16G全网通",add_time:"2015-04-19",sell_price:899,market_price:999,count:this.selectedCount,url:"https://img14.360buyimg.com/n0/jfs/t28906/30/1571661431/255345/986f5fcb/5ce4148aN55586a52.jpg" ,alt:'pic02.jpg'},
                        {id:2,tittle:"小米(MI)Note 16G全网通",add_time:"2015-04-19",sell_price:899,market_price:999,count:this.selectedCount,url:"https://img14.360buyimg.com/n0/jfs/t28906/30/1571661431/255345/986f5fcb/5ce4148aN55586a52.jpg" ,alt:'pic03.jpg'}]
        
        }
    },
    methods: {
        getshopintroduce(id){ 
            this.$router.push({name:'shopintroduce',params:{id:id}})
        },
        getshopcomment(id){
            this.$router.push({name:'shopcomment',params:{id:id}})
        },
        getSelectCount(count){
            this.selectedCount = count;
            console.log(this.selectedCount);
        },
        addToShopCar(){
            var shopsinfo = {
                id: this.id ,
                count: this.selectedCount,
                price: this.shopinfolist[this.id].sell_price,
                select: true,
                tittle:this.shopinfolist[this.id].tittle ,
                img_src:this.shopinfolist[this.id].url
            };
            this.$store.commit("addToCar",shopsinfo)
            
        }
        },
    components:{
        swiper,
        num_box
    }
}
</script>

<style lang="sass" scoped>
    .shopinfo{
        background-color:#eee;
        overflow:hidden;

    }
        
    .now_price{
        color: red;
        font-size: 16px;
        font-weight: bold;
            }
    .mui-card-footer{
        display: block;
        button{
            margin: 15px 0;
            }
                }
</style>
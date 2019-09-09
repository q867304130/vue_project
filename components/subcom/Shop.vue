<template>
    <div>
        <div class="shop-list">
            <div class="shop-item" v-for="item in shop_list" :key="item.id" @click="getpath(item.id)" >
                <img :src="item.img_url" alt="">
                <h1 class="tittle">{{item.tittle}}</h1>
                <div class="info">
                    <p class="price">
                        <span class="now">￥{{item.sell_price}}</span>
                        <span class="old">￥{{item.market_price}}</span>
                    </p>
                    <p class="sell">
                        <span>热卖中</span>
                        <span>剩60件</span>
                    </p>
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
   data(){
       return {
           shop_list:[{id:0,tittle:"华为（HUAWEI）荣耀6Plus 16G双4G版",add_time:"2015-04-19",zhhaoyao:"华为（HUAWEI）荣耀6Plus，该机型分为两款型号",img_url:"https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/34403627/O1CN01mfXJ6D1cfD5IoazsU_!!0-saturn_solar.jpg_230x230.jpg_.webp",sell_price:2195,market_price:2499},
           {id:1,tittle:"小米(MI)Note 16G全网通",add_time:"2015-04-19",zhhaoyao:"小米(MI)Note 16G全网通，该机型分为两款型号",img_url:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/1714128138/O1CN01h3rql529zFjq5JuQy_!!0-item_pic.jpg_230x230.jpg",sell_price:899,market_price:999},
           {id:2,tittle:"小米(MI)Note 16G全网通",add_time:"2015-04-19",zhhaoyao:"小米(MI)Note 16G全网通，该机型分为两款型号",img_url:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/1714128138/O1CN01h3rql529zFjq5JuQy_!!0-item_pic.jpg_230x230.jpg",sell_price:899,market_price:999},
           {id:3,tittle:"小米(MI)Note 16G全网通",add_time:"2015-04-19",zhhaoyao:"小米(MI)Note 16G全网通，该机型分为两款型号",img_url:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/1714128138/O1CN01h3rql529zFjq5JuQy_!!0-item_pic.jpg_230x230.jpg",sell_price:899,market_price:999},
           {id:4,tittle:"小米(MI)Note 16G全网通",add_time:"2015-04-19",zhhaoyao:"小米(MI)Note 16G全网通，该机型分为两款型号",img_url:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/1714128138/O1CN01h3rql529zFjq5JuQy_!!0-item_pic.jpg_230x230.jpg",sell_price:899,market_price:999},
           {id:5,tittle:"小米(MI)Note 16G全网通",add_time:"2015-04-19",zhhaoyao:"小米(MI)Note 16G全网通，该机型分为两款型号",img_url:"https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/1714128138/O1CN01h3rql529zFjq5JuQy_!!0-item_pic.jpg_230x230.jpg",sell_price:899,market_price:999}],
           pageindex:1,

       }
   }, 
   methods: {
     //从API获取数据方法  
    //    getShoplist(){ 
    //        this.$http.get('API?'+this.pageindex).then(result => {
    //            if(result.body.status ===0 ){
    //                this.shop_list = result.body.message
    //            }

    //        })
    //    },
       getMore(){
           this.pageindex++;
           this.getShoplist();
       },
       getpath(id){
        //    this.$router.push('"/home/shopinfo/"+ id')  
        //    this.$router.push({path:"/home/shopinfo/"+id})
        this.$router.push({name:"shopinfo",params:{id:id}})
       }
   },
}
</script>

<style lang="sass" scoped>
    .shop-list{
        display: flex;
        flex-wrap: wrap;
        .shop-item{
            width: 49%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 4px 0;
            padding: 2px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 293px;
            img{
                width: 100%
                }
            .tittle{
                font-size: 14px
                }
            .info{
                background-color: #eee
                
                }        
            }
    }
        .old{
                    text-decoration: line-through
                    }

</style>
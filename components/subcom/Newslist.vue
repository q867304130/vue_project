<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                    <router-link :to="'/home/newsinfo/'+ item.id">  
						<img class="mui-media-object mui-pull-left" src="../tabbar/images/menu1.png">
						<div class="mui-media-body">
							<h1>{{item.tittle}}</h1>
							<p class="mui-ellipsis">
                                <span>发表时间：{{item.add_time}}</span>
                                <span>点击：{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            newslist:[
        {"id":1, 
        "tittle": "11111111",
        "add_time":"2015-04-16 03:50:28",
        "click" : 10,
        "img_url" : " "
        },
        {"id":2, 
            "tittle": "222222222222222",
            "add_time":"2016-07-16 13:40:28",
            "click" : 10,
            "img_url" : " "
            },
            {"id":3, 
                "tittle": "33333333333333",
                "add_time":"2016-07-16 13:40:28",
                "click" : 10,
                "img_url" : " "
                },
                {"id":4, 
        "tittle": "44444444444444",
        "add_time":"2015-04-16 03:50:28",
        "click" : 10,
        "img_url" : " "
        },
        {"id":5, 
            "tittle": "555555555555555555555",
            "add_time":"2016-07-16 13:40:28",
            "click" : 10,
            "img_url" : " "
            },
            {"id":6, 
                "tittle": "66666666666666666",
                "add_time":"2016-07-16 13:40:28",
                "click" : 10,
                "img_url" : " "
                },{"id":7, 
        "tittle": "77777777777777777",
        "add_time":"2015-04-16 03:50:28",
        "click" : 10,
        "img_url" : " "
        },
        {"id":8, 
            "tittle": "888888888888888888888",
            "add_time":"2016-07-16 13:40:28",
            "click" : 10,
            "img_url" : " "
            },
            {"id":9, 
                "tittle": "9999999999999999999",
                "add_time":"2016-07-16 13:40:28",
                "click" : 10,
                "img_url" : " "
                },
                {"id":10, 
                "tittle": "10",
                "add_time":"2016-07-16 13:40:28",
                "click" : 10,
                "img_url" : " "
                },
                {"id":11, 
                "tittle": "111111111111111111111111111",
                "add_time":"2016-07-16 13:40:28",
                "click" : 10,
                "img_url" : " "
                },
                {"id":12, 
                "tittle": "121212121212121212121",
                "add_time":"2016-07-16 13:40:28",
                "click" : 10,
                "img_url" : " "
                }
    ]
        }
    },
    methods: {
        getNewsList(){
        //   this.$http.get('api').than(result =>{
        //       if(result.body.stutas === 0 ){
        //           this.newslist = result.body.message
        //       }else{
        //           Toast("获取新闻列表失败")
        //       }
        //   })     //从api获取数据
          }  ,
 getshopinoflist(){
          
    },
}
}
</script>

<style scoped >
    .mui-table-view li h1{
        font-size: 14px;
         }
    .mui-ellipsis{
                font-size:8px;
                color:#226aff;
                display:flex; 
                justify-content: space-between
            }
</style>
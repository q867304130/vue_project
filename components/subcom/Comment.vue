<template>
    <div>
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论内容(最多120字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼 &nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间：2015-11-15
                </div>
                <div class="cmt-body">
                    锄禾日当呜呜
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
    </div>
</template>

<script>

import {Toast} from 'mint-ui';
export default {
    deta(){
        return{
            pageindex:1, //数据页数
            comments:[] //获取的所有评论内容存入该数据中
        }
    },
    created() {
        this.getComments();
    },
    methods: {
        getComments(){
            this.$http.get('"api地址" + this.id + "?pageindex=" + this.pageindex ')
            .then(result =>{
                if(result.body.stutas === 0){
                    this.comments =this.comments.concat(result.body.message) 
                    //每当获取新评论时，老数据拼接上新数据，否则会清空覆盖老数据
                }else{
                    Toast('获取评论失败')
                }
            })
        },
        getmore(){
            this.pageindex++;
            this.getComments()
        }
    },
    props:["id"]

}
</script>

<style  scoped>
    h3{
        font-size: 18px;
    }
    textarea{
        height: 85px;
        margin: 0;
        font-style: 14px;
    }

    .cmt-list{
        margin: 5px 0;
        
    }
    .cmt-item{
            font-size: 13px;     
        }
    .cmt-title{
                line-height: 30px;
                background-color: #ccc;
            }
    .cmt-body{
                line-height: 35px;
                text-indent: 2em;
            }
</style>
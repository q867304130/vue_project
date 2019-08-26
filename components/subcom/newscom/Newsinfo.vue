<template>
    <div class="newsinfo-container">
        <h3 class="title">新闻详情</h3>
        <p class="subtitle">
            <span>发表时间:</span>
            <span>点击次数:0次</span>
        </p>
        <hr>
        <div class="content">
            <comment :id="this.$route.id"></comment>
        </div>
    </div>
</template>

<script>
import comment from '../Comment.vue';
export default {
    components:{
        comment
    }
}
</script>

<style lang="sass" scoped>
    .newsinfo-container{
        padding: 0 4px;
        .title{
            font-size: 16px;
            text-align: center;
            margin: 15px 0;
            color: red;
        }
        .subtitle{
            font-size: 13px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }

</style>
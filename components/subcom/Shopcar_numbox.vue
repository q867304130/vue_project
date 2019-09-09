<template>
    <div>
        <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9" style="height:20px">
					<button class="mui-btn mui-btn-numbox-minus" type="button" >-</button>
					<input id="test" class="mui-input-numbox" type="number" :value="numcount" ref="numbox" @change="countChanged" >
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
    </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.js';
export default {
    mounted() {
        mui(".mui-numbox").numbox();
    },
    data() {
        return {
            
        }
    },
    methods: {
        countChanged(){
            //每当文本框的属性值修改，立即把最新文本框值传个父组件
            console.log(this.$refs.numbox.value,this.numcount);
            //  this.$emit("getcount",parseInt(this.$refs.numbox.value))
            //  console.log(typeof this.$refs.numbox.value);
            this.$store.commit("updateCount",
            {count:this.$refs.numbox.value,
             shopid:this.shopid
            })
        }
    },
    props:['numcount','shopid']
}

</script>

<style lang="sass" scoped>
    
</style>
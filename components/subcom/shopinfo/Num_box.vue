<template>
    <div>
        <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
					<button class="mui-btn mui-btn-numbox-minus" type="button" >-</button>
					<input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox">
					<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				</div>
    </div>
</template>
<script>
import mui from '../../../lib/mui/js/mui.js';
export default {
    mounted() {
        mui(".mui-numbox").numbox();
    },
    methods: {
        countChanged(){
            //每当文本款的暑假呗修改，立即把最新文本框值传个父组件
             this.$emit("getcount",parseInt(this.$refs.numbox.value));
             
            //  console.log(typeof this.$refs.numbox.value);
        }
    },
}
</script>

<style lang="sass" scoped>
    
</style>
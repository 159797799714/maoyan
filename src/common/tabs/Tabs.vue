<template>
<nav class="tabs">
    <slot/>
</nav>
</template>

<script>
export default {
    name: 'tabs',
    props: {
        value: Number
    },
    methods: {
        tabSelectd(tabName){
            //处理tabitem的点击事件
            // 1.取得所有的tabitem
            // 获得tabItem的slot对应的虚拟节点对象
            let tabSlots = this.$slots.default;
            // 获得tabItem的组件对象
            let tabComs = tabSlots.map(item=>item.componentInstance);
            //2.取消其他的tabItem的选中状态
            tabComs.map((item, index)=>{
                if(item.name !== tabName){
                    item.isActive = false;
                }else{
                    // 切换页面
                    this.$emit('input', index);
                }
            })
            
        }
    },
    mounted(){
        //默认选中传入进来的下标
        if(this.value < this.$slots.default.length){
            this.$slots.default[this.value].componentInstance.isActive = true;
        }
        

    }
}
</script>

<style scoped>
.tabs{
    width: 100%;
    height: 49px;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    border-top: 1px solid #ddd;
    box-sizing: border-box;
}
</style>

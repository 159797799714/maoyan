<template>
<div class="scroll" ref="scroll">
    <div class="wrap" :style="{width: width+'px'}">
        <slot/>
    </div>
</div> 
</template>

<script>
export default {
    name: 'h-scroll',
    data(){
        return {
            width: 0
        }
    },
    mounted(){
        scroll = new IScroll(this.$refs.scroll, {
            scrollX: true,
            scrollY: false
        });

        //动态计算需要滚动的宽度
        scroll.on('beforeScrollStart', ()=>{
            let width = 0;
            this.$slots.default.map(item=>{
                console.log(item.elm.offsetWidth);
                width += item.elm.offsetWidth;
            })
            this.width = width;
            scroll.refresh();

        })

    }
}
</script>

<style lang="scss" scoped>
.scroll{
    overflow: hidden;
    white-space: nowrap;
}
</style>


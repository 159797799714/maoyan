<template>
<div class="content" ref="content">
    <div class="wrap">
        <slot/>
    </div>
</div>
</template>

<script>
export default {
    name: 'app-content',
    props: {
        canLoadMore: Boolean
    },
    methods: {
        refresh(){
            this.contentScroll.refresh();
        },
         scrollTo(y){
            this.contentScroll.refresh();
            this.contentScroll.scrollTo(0, y*(-1), 200);
        }
    },
    
    mounted(){
        // 创建滚动视图
         this.contentScroll = new IScroll(this.$refs.content, {

        });
        this.contentScroll.on('beforeScrollStart', ()=>{
            //滚动开始前刷新，识别最新高度
            this.contentScroll.refresh();
        });
        this.contentScroll.on('scrollEnd', ()=>{
            if(this.contentScroll.y <= this.contentScroll.maxScrollY && this.canLoadMore){
                // console.log('content触发了加载更多');
                this.$emit('loadmore');
            }
        })
    }
}
</script>

<style lang="scss" scoped>
.content{
    position: absolute;
    left: 0;
    width: 100%;
    overflow: hidden;
}
</style>


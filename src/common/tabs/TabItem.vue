<template>
<li class="tab" :class="{active: isActive}" @click="tabAction()">   
    <span :class="icon">❤</span>
    <span>{{name}}</span>
</li>
</template>

<script>
export default {
    name: 'tab-item',
    props: {
        name: String,
        icon: String
    },
    data(){
        return {
            isActive: false
        }
    },
    methods: {
        tabAction(){
            //选中自身的li;
            // 告诉tabs组件，自身选中了，而其他的相同的tabItem需要取消选中
            this.isActive = true;
            let tabsCom = this.$parent;
            tabsCom.tabSelectd(this.name);


            // 切换页面

            
        }
    }
}
</script>

<style scoped>
.tab{
    flex: 1;
    text-align: center;
    color: #696969;
    display: flex;
    flex-direction: column;
}
.tab span{
    flex: 1;
}
.tab span:first-of-type{
    font-size: 20px;
}
.tab span:last-of-type{
    font-size: 12px;
}
.tab.active{
    color: #f03d37;
}

</style>

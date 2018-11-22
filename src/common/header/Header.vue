<template>
<header class="header">
    <span class="header-btn header-btn-left">
        <slot name="left"/>
    </span>
    <h1 class="title">{{title}}</h1>
    <span class="header-btn header-btn-right">
        <slot name="right"/>   
    </span> 
</header>
</template>

<script>
export default {
    name: 'app-header',
    props: {
        title: String
    }
}
</script>

<style scoped>
.header{
    width: 100%;
    height: 44px;
    background: #f03d37;
    position: absolute;
    top: 0;
    left: 0;
}
.header .title{
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
}

.header .header-btn{
    position: absolute;
    top: 0;
    height: 44px;
    padding: 0 10px;
    line-height: 44px;
    color: #fff;
    font-size: 12px;
}
.header-btn-left{
    left: 10px;
}
.header-btn-right{
    right: 10px;
}
</style>

<template>
<div class="page mine" id="mine">
    
    <app-header title="猫眼电影"></app-header>
    <div class="mine_login">
        <span class="back" @click="backAct">⬅</span>
        <ul class="mine_ways">
            <li v-for="(item,index) in nav" :key="index" :class="{active:selectIndex == index}" @click="seleAct(index)">{{item}}</li>
        </ul>
        <meituan v-if="selectIndex == 0"></meituan>
        <phone v-if="selectIndex == 1"></phone>
    </div>
</div>

</template>

<script>
import Meituan from '../../components/mine/meituan'
import Phone from '../../components/mine/phone'
export default {
    components:{
        'meituan':Meituan,
        'phone':Phone
    },
    data(){
        return{
            selectIndex:0,
            nav:['美团账号登录','手机验证登录']
        }
    },
    methods:{
        seleAct(index){
            console.log('点击了',index);
            this.selectIndex = index;
        },
        backAct(){
            this.$router.push('/movie');
            
        }
    }
}
</script>

<style lang="scss" scoped>
#mine{
    display: flex;
}
.mine_login{
    box-sizing:border-box;
    position:absolute;
    top:45px;
    width:100%;
    bottom:0px;
    z-index:3;
    background:white;
    .back{
        font-size:20px;
        color:white;
        position:absolute;
        top:-40px;
        left:10px;
    }
    .mine_ways{
        display:flex;
        height:45px;
        line-height:40px;
        li{
           display: inline-block;
           flex:1;
           text-align: center;
           border-bottom: 5px solid #dcdcdc;
        }
        .active{
            color:red;
            border-bottom: 5px solid red;
        }
    }
}
</style>

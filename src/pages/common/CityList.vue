<template>
    <div id="city-list" class="page subpage">
        <app-content :style="{top: 0, bottom: 0}" ref="content">
        <div id="hot_city" >
           <h6>热门城市</h6>
           <div class='city_name' v-for="(item,index) in hotList" :key="index" @click="btnCityAct(item)">{{item}}</div>
        </div>
        <div v-for="cityMap in data" :key="cityMap.key" ref="list" >
            <h6 ref="h6">{{cityMap.key.toUpperCase()}}</h6>
            <ul>
                <li v-for="item in cityMap.value" :key="item.id" class="address"
                    @click="btnCity(item)">
                    {{item.nm}}
                </li>
            </ul>
        </div>
        </app-content>
        <ul class="nav-bar">
            <li v-for="(navItem,index) in keys" :key="index" @click="selectNavAct(index)">{{navItem}}</li>
        </ul>
    </div>

</template>

<script>
import { getCityList } from "../../services/appservices";
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      keys: [],
      data: [],
      hotList:['上海','北京','广州','深圳','武汉','天津','西安','南京','杭州','成都','重庆']
    };
  },
  methods: {
    ...mapActions(['selectCity']),
    btnCity(item){
        console.log(item.nm)
        this.selectCity({
                city: item.nm,
                id: item.id
            })

            // 返回上一页
            this.$router.back();
    },
    btnCityAct(item){
        console.log(item)
        this.selectCity({
                city: item,
                id: item.id
            })

            // 返回上一页
            this.$router.back();
    },
    selectNavAct(index) {
    //  console.log(this.$refs.list);
      let height = 0;
         for(let i = 0; i < index; i++){
              height += this.$refs.list[i].offsetHeight;
         }
            //让滚动视图滚动
            console.log(height)
            console.log(this.$refs)
     this.$refs.content.scrollTo(height);
    }
  },
  created() {
    getCityList().then(({ data, keys }) => {
      // 本地存储数据，以便下次使用
      let str = keys.join('');
      keys = str.toUpperCase().split('')
    //   console.log(keys)
      this.data = data;
      this.keys = keys;
    });
  }
};
</script>

<style lang="scss" scoped>
#city-list{
    background: #fff;
    h6{
        height:30px;
        background:#f5f5f5;
        line-height: 30px;
        padding-left:20px;
    }
    #hot_city{
        // display: flex;
        width:100%;
        margin-right:40px;
        // background:gray;
        height:200px;
        .city_name{
            box-sizing: border-box;
            height:33px;
            width:30%;
            background:white;
            margin-left: 10px;
            margin-top:10px;
            text-align: center;
            line-height: 33px;
            border:1px solid #ccc;
            display: inline-block;

        }
    }
    ul{
        .address{
            height:45px;
            background:white;
            margin:0 10px;
            border-bottom:1px solid #ccc;
            line-height:45px;
        }
    }
}
.nav-bar{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    text-align: center;
    .nav-item{
        font-size: 14px;
        padding: 0 6px;
    }
}
</style>


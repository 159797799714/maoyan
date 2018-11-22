<template>
<app-content :style="{top: '88px', bottom: '49px'}"  @loadmore="loadMoreData" :canLoadMore="canLoadMore">
<div class="coming">
    <div class="expected">
        <p>最受期待的电影：</p>
        <h-scroll class="expected-list">
            <li  class="expected-item" v-for="item in expectedList" :key="item.id"> 
                <img :src="item.img | replaceWH(85, 115)"/>
                <h5>{{item.nm}}</h5>
                <h6>{{item.comingTitle}}</h6>
            </li>
        </h-scroll>
    </div>

    <div class="list_time" v-for="(list, key) in comingMap" :key="key">
        <p class="list_time">{{key}}</p>
        <ul>
            <li v-for="item in list" :key="item.id">
                <img :src="item.img | replaceWH(85, 115)"/>
                <div class="movie_main">
                     <h3>{{item.nm}}</h3>
                     <h4>{{item.wish}}<span>人想看</span></h4>
                     <h4>{{item.star}}</h4>
                     <h4>{{item.showInfo}}</h4>
                     <button>{{item.globalReleased ?'购买':'预售'}}</button>
                </div>
            </li>
        </ul>
    </div>

</div>
</app-content>
</template>


<script>
import util from '../../../utils/filter'
import{
  getComingList,
  getMostExpectedData,
  getMoreComingList
} from "../../../services/movieService";
export default {
  data() {
    return {
      comingMap: [],
      expectedList: [],
      comingIDS:[],
      canLoadMore:true
    };
  },
  methods:{
      //加载更多数据
    loadMoreData() {
      // console.log("coming执行加载更多",this.comingIDS);
      //取出ids
      let ids = [...this.comingIDS];
      // console.log(...this.comingMap);
      let a = 10;
      ids = ids.splice(a, 10);
      //组装ids
      let movieIds = ids.join(',');
      // 发送请求
      console.log(movieIds)
      this.canLoadMore = false;

      getMoreComingList(movieIds).then(result => {
        console.log(result,this.comingMap);
        this.comingMap = [...this.comingMap,...result];
        
        //判断是否可以继续加载更多
        a+=10;
        if (this.comingMap.length >= this.comingIDS.length) {
          //加载完毕
          this.canLoadMore = false;
        } else {
          //还可以继续加载
          this.canLoadMore = true;
        }
      });
    }
  },
  created() {
    getComingList().then(({data,ids}) => {
      console.log(ids)
      this.comingMap = data;
      this.comingIDS = ids;
      //this.comingMap是返回的按日期分分好的一个对象
      // console.log(result);
    });

    getMostExpectedData().then(result => {
      this.expectedList = result;
      // console.log(result);
    });
    
  }
};
</script>

<style lang="scss" scoped>
.expected {
  padding: 10px 15px;
  border-bottom: 10px solid #f5f5f5;
  .expected-item {
    display: inline-block;
    width: 85px;
    height: 160px;
    margin: 10px;
    margin-left: 0;
    overflow: hidden;
    img {
      width: 85px;
      height: 120px;
      margin-bottom: 5px;
    }
    h5 {
      font-size: 11px;
      font-weight: 400;
      line-height: 14px;
    }
    h6 {
      margin-top: 5px;
      font-size: 10px;
      color: #ccc;
      font-weight: 400;
    }
  }
  p {
    font-size: 14px;
  }
}
.list_time {
  padding: 0px 15px;
  p {
    font-size: 14px;
    line-height: 35px;
    padding: 0px;
  }
  li {
    height: 110px;
    padding-top: 5px;
    display: flex;
    img {
      height: 90px;
      width: 64px;
    }
    .movie_main {
      position: relative;
      flex: 1;
      height: 90px;
      padding: 5px 10px;
      h3 {
        font-size: 16px;
        line-height: 25px;
         width: 70%;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      h4 {
        font-size: 12px;
        color: gray;
        font-weight: 400;
        line-height: 20px;
        width: 70%;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      button {
        position: absolute;
        right: 20px;
        top: 30px;
        padding: 5px 8px;
        background: rgb(100, 172, 240);
        border-radius: 3px;
        border: 0px;
        color:white;
        display: block;
      }
    }
  }
}
</style>
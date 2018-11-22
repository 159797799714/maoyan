<template>
<app-content :style="{top: '88px', bottom: '49px'}" @loadmore="loadMoreData" :canLoadMore="canLoadMore" >
<ul class="playing">
    <li class="playing-item" v-for="item in playingList" :key="item.id">
        <div class="item-img">
            <img :src="item.img"/>
        </div>
        <div class="item-content">
            <h3>{{item.nm}}</h3>
             <h6 v-if="item.sc != 0">观众评 <span>{{item.sc}}</span></h6>
             <h6 v-if="item.sc == 0">暂无评分</h6>
             <h6>主演:{{item.star}}</h6>
             <h6>{{item.showInfo}}</h6>
             <button v-if="item.globalReleased == false" class="future">预售</button>
             <button v-if="item.globalReleased == true" class="buy">购票</button>
        </div>
    </li>
</ul>
</app-content>
</template>

<script>
import {
  getPlayingList,
  getMorePlayingList
} from "../../../services/movieService";
export default {
  data() {
    return {
      playingList: [],
      playingIDS: [],
      canLoadMore: true
    };
  },
  methods: {
    //加载更多数据
    loadMoreData() {
      // console.log("执行加载更多",this.playingIDS);
      //取出ids
      let ids = [...this.playingIDS];
      ids = ids.splice(this.playingList.length, 10);
      //组装ids
      let movieIds = ids.join(",");
      // 发送请求
      this.canLoadMore = false;
      getMorePlayingList(movieIds).then(result => {
        console.log(result);
        this.playingList = [...this.playingList, ...result];
        //判断是否可以继续加载更多
        if (this.playingList.length >= this.playingIDS.length) {
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
    //初始化请求数据
    getPlayingList().then(({ data, ids }) => {
      this.playingList = data;
      this.playingIDS = ids;
    });
  }
};
</script>

<style lang="scss" scoped>
.playing-item {
  display: flex;
  padding: 10px;
  .item-img {
    width: 64px;
    img {
      width:64px;
    }
  }
  .item-content {
    flex: 1;
    margin-left: 5px;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
    h3 {
      font-size: 18px;
      width: 60%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    h6 {
      line-height: 23px;
      font-size: 13px;
      font-weight: 400;
      color: gray;
      width: 60%;
      display: inline-block;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 200px;
      span{
        color:#faaf00;
        font-weight: 700;
        font-size:15px;
      }
     
    }
    .future,.buy {
      position: absolute;
      right: 20px;
      top: 30px;
      padding: 5px 8px;
      border-radius: 3px;
      border: 0px;
      display: block;
      color: white;
    }
    .future {
      background: #3c9fe6;
    }
    .buy {
      background: #f03d37;
    }
  }
}
</style>


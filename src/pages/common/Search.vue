<template>

<div id="search" class="page subpage">
    <app-header title="猫眼电影"></app-header>
    <app-content :style="{top: 0, bottom: 0}" ref="content">
        <div class="search_head">
            <span class="search_back" @click="backAct">⬅</span>
            <div class="input_search">
                <img src="../../assets/search.png"/>
                <input type="text" placeholder="搜电影，搜影院" v-model="query">
            </div>
            <span class="cancel" @click="backAct">取消</span>
        </div>
        <div class="search_movies">
            <h1 v-if="this.query != ''">电影/电视剧/综艺</h1>
            <li class="movies_li" v-for="(item,index) in movieList" :key="index">
                <div class="item-img">
                      <img :src="item.img.replace(/w.h/, '128.180')"/>
                </div>
                <div class="item-content">
                    <h3>{{item.nm}}</h3>
                    <h6>{{item.enm}}</h6>
                    <h6 v-if="item.cat != ''">{{item.cat}}</h6>
                    <h6>{{item.frt}}</h6>
                    <button v-if="item.sc != 0" class="future">{{item.sc}}分</button>
                    <button v-if="item.sc == 0" class="buy">暂无评分</button>
                </div>
            </li>
        </div>
        <div class="search_cinemas"></div>
    </app-content>
</div>
</template>

<script>
import { SearchMovie } from "../../services/search";
export default {
  props: {
    type: Array
  },
  data() {
    return {
      query: "",
      movieList: [],
      cinemasList: []
    };
  },
  methods: {
    backAct() {
      this.$router.go(-1);
    }
  },
  created() {
    this.$watch("query", () => {
      let val = this.query;
      console.log("变成", val);
      setTimeout(() => {
        if (val == "") {
          this.cinemasList = [];
          this.movieList = [];
        }
        SearchMovie(val).then(({ movies, cinemas }) => {
          console.log(cinemas, "........", movies);
          this.cinemasList = cinemas;
          this.movieList = movies;
        });
      }, 500);
    });
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
#search {
  background: white;
  z-index: 3;
  .search_head {
    width: 100%;
    height: 47px;
    position: absolute;
    margin-top: 45px;
    display: flex;
    padding: 6px 10px;
    background: #f5f5f5;
    .search_back {
      width: 30px;
      height: 44px;
      position: absolute;
      top: -44px;
      left: 5px;
      display: block;
      text-align: center;
      line-height: 44px;
      color: white;
    }
    .input_search {
      flex: 1;
      height: 28px;
      line-height: 28px;
      display: flex;
      border: 1px solid #ccc;
      border-radius: 3px;
      background: white;
      img {
        height: 16px;
        width: 16px;
        margin: 7px;
        display: inline-block;
      }
      input {
        height: 26px;
        flex: 1;
        border: 0px;
      }
    }
    .cancel {
      height: 28px;
      width: 50px;
      padding: 0px 5px;
      color: #f03d37;
      text-align: center;
      line-height: 28px;
    }
  }
  .search_movies {
    max-height: 410px;
    overflow: hidden;
    width: 100%;
    min-width: 40px;
    background: #f5f5f5;
    position: absolute;
    top: 100px;
    h1{
        font-size: 16px;
        font-weight: 400;
        line-height: 40px;
        line-height:40px;
        padding:0px 20px;
    }
    li {
      display: flex;
      width: 100%;
      max-height: 115px;
      margin: 5px 10px;
      border-bottom:1px solid #ccc;
      background:white;
      .item-img {
    width: 64px;
    img {
      width:64px;
      margin:7px;
    }
  }
  .item-content {
    flex: 1;
    margin-left:15px;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
    padding: 10px 0px;
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
        color:yellow;
        background:white;
    }
    .buy {
         color:#ccc;
        background:white;

    }
  }
    }
  }
}
</style>
https://p1.meituan.net/128.180/movie/4765ab3397f42fd7f26b30c845bb2a2e7592633.jpg
http://p0.meituan.net/w.h/movie/2721b55eac3ca107bad2af0e18592003431446.jpg

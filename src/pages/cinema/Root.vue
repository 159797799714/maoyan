<template>
    <div class="page cinema" id="cinema">
        <app-header title="影院" class="header"></app-header>
        <div class="cinema_heade">
    	     <div class="address" @click="gocity">{{city}} ▼</div>
    	     <div class="rightSearch" @click="gosearch()">
    	     	<img src="../../assets/search.png" class="cinemaSearchImg" />
    	     	<span class="souYing">搜影院</span>
    	     </div>
        </div>
        <div class="cinema_List">
                <div @click="Allcity">全城 {{jiantou}}</div>
                <div>品牌 ▼</div>
                <div>特色 ▼</div>
        </div>
        <ul class="cinemaMap" >
            <li v-for="(item,index) in cinemasList" :key="index" class="item_li" v-if="selectAll">
                   <h4>{{item.nm}}  <span>{{item.sellPrice}}元起</span></h4>
                   <h5>{{item.addr}} </h5>
                   <i>{{item.distance}}</i>
                   <h6>
                       <span v-if="item.tag.allowRefund == 1" class="tui">退</span>
                       <span v-if="item.tag.endorse == 1" class="gaiqian">改签</span>
                       <span v-if="item.tag.snack == 1" class="xiaochi">小吃</span>
                       <span v-if="item.tag.vipTag == '折扣卡'" class="zhekou">折扣卡</span>
                   </h6>
            </li>
            <div class="AllCityNav" v-if="jiantou == '▲' &&  selectIndex == 0">
                    <div class="district" @click="setVal(index)" :class="{active:selectIndex == index}" v-for="(item,index) in navList" :key="index">{{item}}</div>
                    <!-- <div class="subway" :class="{active:selectIndex == index}">地铁站</div> -->
            </div>
            <div class="cinemaMain" v-if="jiantou == '▲' &&  selectIndex == 0">
                 <div class="qu">
                     <li v-for="(item,index) in cinemaQu" :key="index" @click="SelectQu(index)" :class="{selQu:SelectQuIndex == index}">{{item.name}}({{item.count}})</li>
                 </div>
                 <div class="qu_list">
                     <li v-for="(item,index) in quValList" :key="index" >{{item.name}} <span>{{item.count}}</span></li>
                 </div>
            </div>
            <!-- 地铁下拉菜单 -->
            <div class="AllCityNav" v-if="selectIndex == 1">
                    <div class="district" @click="setVal(index)" :class="{active:selectIndex == index}" v-for="(item,index) in navList" :key="index">{{item}}</div>
                    <!-- <div class="subway" :class="{active:selectIndex == index}">地铁站</div> -->
            </div>
            <div class="cinemaMain" v-if="selectIndex == 1">
                 <div class="qu">
                     <li v-for="(item,index) in subwayList" :key="index" @click="SelectQu(index)" :class="{selQu:SelectQuIndex == index}">{{item.name}}({{item.count}})</li>
                 </div>
                 <div class="qu_list">
                     <li v-for="(item,index) in subwayValList" :key="index" >{{item.name}} <span>{{item.count}}</span></li>
                 </div>
            </div>
            
        </ul>
    </div>
</template>

<script>
import { SearchCinema,getCinemaMain} from "../../services/cinemaService";
import {mapState} from 'vuex'
export default {
   data(){
       return{
         cinemasList:[],
         cinemaQu:[],
         subwayList:[],
         selectAll:true,
         jiantou:'▼',
         quVal:'全部',
         //区下面的数据列表
         quValList:[],
         //地铁下面的数据
         subwayValList:[],
         //商区或者地铁站初始选中index
         selectIndex:0,
         navList:['商区','地铁站'],
         SelectQuIndex:0
         

       }
    },
   computed: {
        ...mapState(['city'])
    },
  methods:{
      gocity(){
          this.$router.push('/movie/city-list');
      },
      gosearch(){
            this.$router.push('/movie/Search')
      },
      Allcity(){
            if(this.selectAll == true){
                this.selectAll = false;
                this.jiantou = '▲';
            }
            else if(this.selectAll == false){
                this.selectAll = true;
                this.jiantou = '▼';

            }
      },
      setVal(index){
          this.selectIndex = index;
          this.SelectQuIndex = 0;
      },
      SelectQu(qu){
        // console.log(qu);
        //qu是选中传过来的index值
        this.quValList = this.cinemaQu[qu].subItems;
        this.subwayValList = this.subwayList[qu].subItems;
        this.SelectQuIndex = qu;
        // this.quValList = this.cinemaQu[qu].subItems;
          
      }

  },
  created(){
      SearchCinema().then((data)=>{
            this.cinemasList = data.cinemas;
            // console.log(data.cinemas)
      })
      getCinemaMain().then((data)=>{
            console.log(data.subway.subItems);
            this.cinemaQu = data.district.subItems;
            this.subwayList = data.subway.subItems;
            
      })   
  }
};
</script>

<style lang="scss" scoped> 
#cinema{
	 display: flex;
     z-index: 3;
	 overflow:auto;
     position:absolute;
	 flex-direction:column;
    .header{
         height:44px;
    }
    .cinema_heade{
            display:flex;
    	    height:50px;
            background:#f5f5f5;
            width:100%;
            margin-top:44px;
    	.address{
            height:50px;
            width:70px;
            text-align: center;
            line-height:50px;
    	}
    	.rightSearch{
    		flex:1;
            height:30px;
            background:white;
            margin:10px;
            text-align: center;
            font-size:14px;
            display: flex;
            justify-content: center;
            line-height:30px;
            color:gray;
    	    .cinemaSearchImg{
                margin-top:7px;
    	    	height:14px;
                width:14px;
    	    }
    	}
        
    }
    .cinema_List{
            height:40px;
            display: flex;
            background:white;
            div{
                display:inline-block;
                width:32%;
                height:40px;
                color:gray;
                text-align: center;
                line-height: 40px;
                border-bottom: 1px solid #f5f5f5;
            }
    }	
    .cinemaMap{
        flex:1;
        width:100%;
        position: absolute;
        overflow:auto;
        top:130px;
        bottom:0px;
        // background:red;
        .item_li{
            height:100px;
            padding:15px;
            position: relative;
            border-bottom: 1px solid #ccc;
            box-sizing: border-box;
            h4{
               height:30px;
               line-height:30px;
               font-weight:400;
               font-size:16px;
               span{
                   color:#e54847;
                   font-size:18px;
                   padding:3px;
                   border:1px;
               }
            }
            h5{  
                display: block;
                width:75%;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                font-size: 14px;
                font-weight: 400;
                color:gray;
            }
             i{
                   display:block;
                   font-style:normal;
                   float:right;
                //    right:70px;
                   color:gray;
                   font-size: 14px;
                   bottom:35px;
             }
             h6{
                 height:16px;
                 line-height: 16px;
                 margin-top:5px;
                 span{
                     display: inline-block;
                     margin:0px 5px;
                     height:16px;
                     padding:0px 3px;
                 }
                 .tui,.gaiqian{
                     border:1px solid #589daf;
                     color:#589daf;
                 }
                 .xiaochi,.zhekou{
                     border:1px solid #f90;
                     color:#f90;
                 }
             }
        }
        .AllCityNav{
            height:44px;
            display:flex;
            width:100%;
            background:white;
            .active{
                color:#e54847;
                border-bottom: 2px solid #e54847;
            }
            div{
                width:100%;
                height:40px;
                line-height: 40px;
                text-align: center;
                border-bottom:2px solid white; 
            }
        }
       
        .cinemaMain{
            height:400px;
            width:100%;
            background:#f5f5f5;
            display:flex;
            border-bottom: 1px solid #ccc;
             .qu{
                width:115px;
                height:400px;
                background:white;
                li{
                    height:40px;
                    line-height: 40px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    padding-left:10px;
                    color:gray;
                }
                .selQu{
                    background:#f5f5f5;
                }
            }
            .qu_list{
                width:100%;
                height:400px;
                overflow: auto;
                li{
                    height:40px;
                    line-height: 40px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    padding-left:30px;
                    span{
                        color:#e54847;
                        float: right;
                        margin-right:30px;
                    }

                }
            }
        }
    }


}

</style>

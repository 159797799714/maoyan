//开发环境
const SAT_HOST = 'http://localhost:8080';
//测试
const UAT_HOST = 'http://10.213.12.98:8080';
//生产
const PRO_HOST = 'https://m.maoyan.com';


/*
正在热映的接口
参数： token 用户标识
*/
const PLAYING_API = '/ajax/movieOnInfoList';

/*
更多正在热映数据的接口
参数：
    token 用户标识
    movieIds  请求的电影id
*/
const MORE_PLAYING_API = '/ajax/moreComingList';

/*
最受期待的电影数据接口
参数：ci 城市id
     limit   数据长度
     offset   数据偏移量
     token  用户标识
*/
const MOST_EXPECTED_API = '/ajax/mostExpected';

// 更多期待的电影数据接口

const MORE_MOST_EXPECTED_API = 'ajax/mostExpected'
/*
即将上映的接口
参数： ci   城市id
      token   用户标识
      limit   数据长度
*/
const COMING_API = '/ajax/comingList';


/*更多即将上映的接口
    ...
*/
const MORE_COMING_API = 'ajax/moreComingList'

//城市列表
const CITY_LIST_API = '/dianying/cities.json'

//搜索电影
//?kw=nie&cityId=30&stype=-1
const SEARCH_MOVIE_API = 'ajax/search'

//影院
const SEATCH_CINEMA_API = 'ajax/cinemaList'
// http://m.maoyan.com/ajax/cinemaList

//影院里面的分类比如
const CINEMA_LIST_API =  'ajax/filterCinemas'
// http://m.maoyan.com/ajax/filterCinemas?ci=30

export default {
    SAT_HOST,
    UAT_HOST,
    PRO_HOST,
    PLAYING_API,
    MORE_PLAYING_API,
    MOST_EXPECTED_API,
    COMING_API,
    MORE_COMING_API,
    MORE_MOST_EXPECTED_API,
    CITY_LIST_API,
    SEARCH_MOVIE_API,
    SEATCH_CINEMA_API,
    CINEMA_LIST_API

}



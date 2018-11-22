import http from '../utils/http'
import API from '../api'

    export function SearchMovie(value){
    return new Promise((resolve,reject)=>{
        http({
            url:API.SEARCH_MOVIE_API,
            method:'GET',
            data:{
                kw:value,
                stype:-1,
                cityId:30
            }
        })
        .then(({data,status})=>{
             if(status != 200){
                //  请求失败
                console.log('请求失败了')
             }
             else{
                 if(data.cinemas == undefined){
                     resolve({
                        movies:data.movies.list,
                        cinemas:[]
                     })
                 }
                 if(data.movies == undefined )
                //  console.log('请求到的数据',data.movies.list)
                     resolve({
                         movies:[],
                         cinemas:[]
                     } 
                 );
                 else{
                    resolve({
                        movies:data.movies.list,
                        cinemas:data.cinemas.list
                     })
                 }
                 
             }
             
        })
        .catch(error=>{
            // 请求失败
        })
        
    })
}

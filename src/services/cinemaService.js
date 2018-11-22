import http from '../utils/http'
import API from '../api'

//影院初始列表数据请求额
    export function SearchCinema(value){
    return new Promise((resolve,reject)=>{
        // console.log('进来了')
        http({
            url:API.SEATCH_CINEMA_API,
            method:'GET',
            data:{
                kw:value,
            }
        })
        .then(({data,status})=>{
             if(status != 200){
                //  请求失败
                console.log('请求失败了')
             }
             else{
                resolve(data) 
                // console.log(data)
             }
             
        })
        .catch(error=>{
            // 请求失败
        })
        
    })
}
//影院全城地铁数据
export function getCinemaMain(value){
    return new Promise((resolve,reject)=>{
        // console.log('进来了')
        http({
            url:API.CINEMA_LIST_API,
            method:'GET',
            data:{
                kw:value,
            }
        })
        .then(({data,status})=>{
             if(status != 200){
                //  请求失败
                console.log('请求失败了')
             }
             else{
                resolve(data) 
                // console.log(data)
             }
             
        })
        .catch(error=>{
            // 请求失败
        })
        
    })
}


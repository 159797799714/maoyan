import http from '../utils/http'
import API from '../api'

export function getCityList(){
    return new Promise((resolve,reject)=>{
        http({
            url:API.CITY_LIST_API,
            method:'GET'
        })
        .then(({data,status})=>{
             if(status != 200){
                //  请求失败
             }
             else{
                //请求成功
                // 取得首字母，按字母先分类
                let map = {};
                data.cts.map(item=>{
                    let letter = item.py[0];
                    if(!map[letter]){
                        map[letter] = [];
                    }
                    map[letter].push(item);
                })
                let keys = Object.keys(map);
                //排序
                // 选择排序
                for(let i = 0; i < keys.length; i++){
                    for(let j = i+1; j < keys.length; j++){
                        if(keys[i] > keys[j]){
                            let tmp = keys[i];
                            keys[i] = keys[j];
                            keys[j] = tmp;
                        }
                    }
                }
                //组装数据
                let newData = keys.map(item=>{
                    return {
                        key: item, 
                        value: map[item]
                    }
                })
                // console.log(keys,newData)
                resolve({
                    keys: keys,
                    data: newData
                });

             }
        })
        .catch(error=>{
            // 请求失败
        })
    })
}

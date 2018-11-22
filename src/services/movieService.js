import http from '../utils/http'
import API from '../api'


//请求正在热映的电影数据
export function getPlayingList(){
    return new Promise((resolve, reject)=>{
        http({
            url: API.PLAYING_API,
            method: 'GET',
            data: {
                token: ''
            }
        })
        .then(({data, status})=>{
            if(status != 200){
                //请求失败
                return;
            }
            //请求成功
            
            let newData = data.movieList.map(item=>{
                let {id, nm, img, version, sc, star, showInfo, globalReleased} = item;
                img = img.replace(/w.h/, '128.180');
                return {id, nm, img, version, sc, star, showInfo, globalReleased};
            })
            resolve({
                data: newData,
                ids: data.movieIds
            });
        })
        .catch(error=>{
            //请求失败
            console.log(error);
        })
    })
}


//请求更多正在热映的电影数据
export function getMorePlayingList(ids){
    return new Promise((resolve, reject)=>{
        http({
            url: API.MORE_PLAYING_API,
            method: 'GET',
            data: {
                token: '',
                movieIds: ids
            }
        })
        .then(({data, status})=>{
            // console.log(data);
            if(status != 200){
            

                //请求失败
                return;
            }
            //请求成功
            let newData = data.coming.map(item=>{
                let {id, nm, img, version, sc, star, showInfo, globalReleased} = item;
                img = img.replace(/w.h/, '128.180');
                return {id, nm, img, version, sc, star, showInfo, globalReleased};
            })
            resolve(newData);
        })
        .catch(error=>{
            //请求失败
            console.log(error);
        })
    })
}

// 请求最受期待的电影数据
export function getMostExpectedData(){
    return new Promise((resolve, reject)=>{
        http({
            url: API.MOST_EXPECTED_API,
            method: 'GET',
            data: {
                ci: 30,
                limit: 10,
                offset: 0,
                token: ''
            }
        })
        .then(({data, status})=>{
            if(status != 200)
                //请求失败
                return;
            //请求成功
            resolve(data.coming);
        })
        .catch(error=>{
            //请求失败
        })
    })
}

//请求即将上映的电影数据
export function getComingList(){
    return new Promise((resolve, reject)=>{
        http({
            url: API.COMING_API,
            method: 'GET',
            data: {
                ci: 30,
                token: '',
                limit:10
            }
        })
        .then(({data, status})=>{
            if(status != 200){
                //请求失败，提醒用户
                return;
            }
            //请求成功
            //过滤数据
            let newData = data.coming.map(item=>{
                let {comingTitle, img, nm, wish, star, showInfo, globalReleased, version} = item;
                return {comingTitle, img, nm, wish, star, showInfo, globalReleased, version};
            })
            //对数据进行分类
            let dataMap = {};
            newData.map(item=>{
                if(!dataMap[item.comingTitle]){
                    dataMap[item.comingTitle] = [];
                }
                dataMap[item.comingTitle].push(item);
            })
            // console.log('dataMap',dataMap,newData)
            resolve({
                data:dataMap,
                ids:data.movieIds
            });
        })
        .catch(error=>{
            //请求失败
        })
    })
}


//请求更多 即将上映的电影
export function getMoreComingList(ids){
    console.log(ids)
    return new Promise((resolve, reject)=>{
        http({
            url: API.COMING_API,
            method: 'GET',
            data: {
                ci: 30,
                token: '',
                movieIds:ids
            }
        })
        .then(({data, status})=>{
            if(status != 200){
                //请求失败，提醒用户
                return;
            }
            //请求成功
            //过滤数据
            let newData = data.coming.map(item=>{
                let {id, nm, img, version, sc, star, showInfo, globalReleased} = item;
                return {id, nm, img, version, sc, star, showInfo, globalReleased};
            })
            //对数据进行分类
            let dataMap = {};
            newData.map(item=>{
                if(!dataMap[item.comingTitle]){
                    dataMap[item.comingTitle] = [];
                }
                dataMap[item.comingTitle].push(item);
            })
            console.log(newData,dataMap)
            resolve(dataMap);
            
        })
        .catch(error=>{
            //请求失败
        })
    })
}
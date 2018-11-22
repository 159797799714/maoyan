import Vue from 'vue'

Vue.filter('replaceWH', (path, w, h)=>{
    return path.replace(/w.h/, `${w}.${h}`);
})
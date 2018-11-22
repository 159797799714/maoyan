<template>
  <div id="app">

    <keep-alive>
      <router-view/>
    </keep-alive>

    <tabs v-model="selectIndex">
      <tab-item v-for="(tabItem, index) in tabList" :key="index"
        :name="tabItem.name" :icon="tabItem.icon">
      </tab-item>
    </tabs>
    
  </div>
</template>
<script>
export default {
  data(){
    return {
      tabList: [
        {name: '电影', icon: '', path: '/movie'},
        {name: '影院', icon: '', path: '/cinema'},
        {name: '我的', icon: '', path: '/mine'}
      ],
      selectIndex: 0
    }
  },
  watch: {
    selectIndex(newVal){
      let path = this.tabList[newVal].path;
      this.$router.push(path);
    }
  }
}
</script>


<style lang="scss">

</style>

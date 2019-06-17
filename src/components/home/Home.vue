<template>
  <div id="home">
   <home-head></home-head>
   <home-swiper></home-swiper>
   <home-nav :navList='navList'></home-nav>
   <home-hot :hotList='hotList'></home-hot>
   <home-like :likeList='likeList'></home-like>
  </div>
</template>

<script>
  import {getHome} from '@/api'
  import HomeHead from '@/components/home/base/HomeHead'
  import HomeSwiper from '@/components/home/base/HomeSwiper'
  import HomeNav from '@/components/home/base/HomeNav'
  import HomeHot from '@/components/home/base/HomeHot'
  import HomeLike from '@/components/home/base/HomeLike'


export default {
  components:{
      HomeHead,
      HomeSwiper,
      HomeNav,
      HomeHot,
      HomeLike
  },
  data(){
    return{
      navList:[],
      hotList:[],
      likeList:[]
    }
  },
  created(){
    getHome().then(res=>{
      this.navList = res.data.data.navList;
      this.hotList = res.data.data.hotList;
      this.likeList = res.data.data.likeList;
    })
  }
  
}
</script>

<style scoped>


</style>


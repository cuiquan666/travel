<template>
  <div id="details">
    <div class="head" @click="fnn" v-show="isHeads">
        <span class="back" @click='fn'><i class="iconfont icon-jiantou4"></i></span>
        <img :src="imgUrl" alt="">
        <p>{{title}}
            <span><i class="iconfont icon-tupian"></i>{{imgList.length}}</span>
        </p>
    </div>
    <div class="banner" v-show="isBanner" @click="fnm">
        <swiper :options='swiperOption'>
            <swiperSlide v-for="(item,index) in imgList" :key="index">
                <img :src="item.url" alt="">
               
            </swiperSlide>
             <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
       
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  props:['imgUrl','title','imgList'],
  data(){
      return{
          isBanner:false,
          isHeads:true,
          swiperOption:{
              pagination:{
                  el:'.swiper-pagination',
                  type:'fraction'
              }
          }
      }
      
  },
  methods:{
      fn(){
          this.$router.push('/')
      },
      fnn(){
          this.isBanner = true
          this.isHeads =false
      },
      fnm(){
          this.isHeads =true
           this.isBanner =false
      }
  }
}

</script>

<style lang='stylus' scoped>
  #details
    font-size:.35rem
    .head
       position:relative
       .back
        display:block 
        position:absolute
        left:.2rem 
        top:.2rem 
        color:#fff
        width:.6rem 
        height:.6rem 
        background-color:rgba(0,0,0,0.8)
        text-align:center
        border-radius:50%
       img 
        width:100%
        height:4rem
       p  
        position:absolute
        left:.2rem 
        bottom:.3rem
        color:#fff
        span
          margin-left:2.6rem
          display:inline-block
          width:.8rem  
          border:1px solid #fff
          text-align:center
          border-radius:.3rem
    .banner
       z-index:100 
       width:100vw
       height:100vh
       background-color:#000
       img 
         margin-top:3.5rem
         width:100%
       .swiper-pagination
         color:#fff  
         
          
</style>

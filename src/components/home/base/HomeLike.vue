<template>
  <div id="homeLike">
    <h2>
      <i class="iconfont icon-xihuan"></i>
      猜你喜欢
    </h2>
    <ul>
        <router-link tag='li' :to="{name:'detailsLink',params:{id:item.id}}" v-for="(item,index) in likeList" :key="index" >
          <div class="imgs">
               <img :src="item.imgUrl" alt="">
          </div>
           <div class="like-right">
             <span class="site">{{item.title}}</span>
            <div class="block">
                 <el-rate v-model="value1"></el-rate>
                <span>{{item.ping}}</span>
            </div>
            <p>
                <span class="pice">￥{{item.pice}}</span>起
                <span class="city-right">{{item.city}}</span>
            </p>
           </div>  
        </router-link>

    </ul>
  </div>
</template>

<script>
 
  


export default {
  props:['likeList'],
  data(){
      return{
           value1:null,
              colors: ['#99A9BF', '#F7BA2A', '#FF9900'] 
      }
  }
 
}
</script>

<style lang='stylus' scoped>
  #homeLike
     font-size:.24rem
     h2
       text-indent:.3rem
     ul
      width:100%
      li 
        display:flex
        width:100%
        height:2.7rem
        .imgs 
            width:3rem
            height:3rem
            text-align:center
            img  
              width:2.3rem
              height:2.3rem
              margin-top:.4rem
        .like-right 
            width:4.3rem 
            height:3rem
            line-height:.3rem
            padding-top:.7rem
            .site 
               font-size:.35rem 
               font-weight:380
            .block 
               display:flex  
               margin-top:.3rem 
            p
             margin-top:.3rem
             .pice 
               color:orange
               font-size:.4rem
             .city-right
              float:right 
              margin-right:.2rem 
               
               
              

            
           
       
            
</style>


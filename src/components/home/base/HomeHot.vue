<template>
  <div id="homeHot">
  <h2>本周热门榜单</h2>
  <ul>
      <li v-for="(item,index) in hotList" :key='index'>
          <div class="omg">
              <img :src="item.fist" alt="">
          </div>
          <img :src="item.imgUrl" alt="">
          <span>{{item.desc}}</span>
      </li>
      
  </ul>
  </div>
</template>

<script>

export default {
 props:['hotList']


}

</script>

<style lang='stylus' scoped>
  #homeHot
      font-size:.24rem
      h2
        text-indent:.3rem
      ul
        width:100vw
        display:flex
        overflow-x: scroll
        border-bottom:.3rem solid #eee
        li
          position relative
          width:2rem
          list-style:none
          height:2.5rem
          margin-left:.23rem
          margin-top:.2rem
          margin-bottom:.3rem
          text-align:center
          img
            width:2rem
            height:2rem
          span 
            font-size:.25rem
          .omg
            position:absolute
            left:0
            top:0
            width:.84rem
            height:.4rem
            img 
              width:100%
              height:100%
</style>

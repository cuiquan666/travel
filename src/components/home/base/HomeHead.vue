<template>
  <div id="header">
    <div class="head-left">
      <i class="iconfont icon-jiantou4"></i>
    </div>
    <div class="head-cont">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" style='border:none' placeholder="输入城市/景点/游玩主题">
    </div>
    <router-link tag='div' to='/city' class="head-right">
      <span>{{$store.state.city}}</span><i class="iconfont icon-xiasanjiaoxing"></i>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang='stylus' scoped>
  #header
    z-index:100 
    position:fixed
    top:0
    left:0
    display:flex
    font-size:.24rem
    width:100%
    height: .88rem
    background-color: #00bcd4
    line-height:.88rem
    color:#fff
    .head-left
       width:.6rem
       text-align:center
    .head-cont
       flex:1
       background-color:#fff
       height:.6rem
       line-height:.6rem
       margin-top:.15rem
       color:#ccc
       border-radius:.1rem
       padding:0 .2rem
       input
         width:80%
    .head-right
       padding:0 .1rem       
     
  

</style>


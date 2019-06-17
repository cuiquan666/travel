<template>
  <div id="homeNav">
      <ul>
          <li v-for="(item,index) in navList" :key='index'>
              <img :src="item.imgUrl" alt="">
              <span>{{item.desc}}</span>
          </li>
          
          
      </ul>
  </div>
</template>

<script>
  
export default {
  props:['navList']
}
</script>

<style lang='stylus' scoped>
 #homeNav 
    font-size:.24rem
    ul
      display:flex
      flex-wrap:wrap
      width:100%
      padding-bottom:.3rem
      border-bottom:1px solid #ddd
      li
        width:25%
        list-style:none
        text-align:center
        img 
          width:1rem
          height:1rem
        span 
          display:block
</style>

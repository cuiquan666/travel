<template>
  <div id="city">
    <div class="head-left">
      <router-link tag='i' to='/' class="iconfont icon-jiantou4"></router-link>
    </div>
     <h2>城市选择</h2>
     <input type="text" placeholder="请输入你想选择的城市" v-model="msg">
     <div class="list" v-show="msg">
       <ul>
         <li
          v-for="(item,index) in filterCity" 
          :key="index"
          @click='handle(item.name)'
         >{{item.name}}</li>
         <li v-if="!filterCity.length">未匹配到数据</li>
       </ul>
     </div>
     
  </div>
 
</template>

<script>
 import {getCity} from '@/api'
export default {
  data(){
    return{
      msg:'',
      city:[]
    }
  },
  methods:{
    handle(city){
      this.$store.commit('changeCity',city)
      this.$router.push('/')
    }
  },
  created(){
    getCity().then(res=>{
      this.city = res.data.data.cityList;
    })
  },
  computed:{
    filterCity(){
      const result =[];
      this.city.forEach((item,index)=>{
        if(item.name.includes(this.msg) || item.spell.includes(this.msg) ){
          result.push(item)
        }
      })
      return result
    }
  }
};
</script>

<style lang='stylus' scoped>
#city
  font-size: 0.24rem
  background-color: #00bcd4
  line-height: 0.88rem
  color: #fff
  .head-left
    display:inline-block 
    width: 0.6rem
    text-align: center
  h2 
    display:inline-block
    text-indent:2.3rem
  input 
    width:100%
    height:.6rem
    text-align:center
    border-radius:.2rem
    border:none
  .list 
    position:fixed
    top:1.8rem 
    left:0
    bottom:0
    right:0 
    background-color:#ccc
    li  
      background-color:#fff
      color:#000
      text-indent:.4rem
      border-bottom:1px solid #eee
</style>


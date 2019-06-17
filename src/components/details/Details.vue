<template>
  <div id="details">
    <Header :imgUrl=imgUrl :title=title :imgList=imgList></Header>
    <Content :title=title></Content>
  </div>
</template>

<script>
  import {getDeta} from '@/api'
  import Header from './base/Header'
  import Content from './base/Content'
export default {
  components:{
    Header,
    Content
  },
  data(){
    return{
      imgUrl:'',
      title:'',
      imgList:[]
    }
  },
  created(){
    getDeta(this.$route.params.id).then(res=>{
      this.imgUrl = res.data.data.imgUrl
      this.title = res.data.data.title
      this.imgList = res.data.data.imgList
    })
  },
  
}
</script>

<style lang='stylus' scoped>

</style>

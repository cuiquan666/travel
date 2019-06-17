<template>
  <div id="app">
    <keep-alive>
       <router-view></router-view>
    </keep-alive>
 
  </div>
</template>

<script>
  import Home from '@/components/home/Home'
export default {
  components:{
    Home
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>

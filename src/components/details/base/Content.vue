<template>
  <div id="content">
   <div class="tuijie">
       <ul>
          
           <li>
               <p>
                   <span class="title">{{title}}成人票</span>
                   <span class="pice">¥38.0</span>
               </p>
               <p>
                 <span class="decv">可订明日</span>
                  <span class="buy">预定</span>
               </p>
           </li>
            <li>
               <p>
                   <span class="title">{{title}}学生票</span>
                   <span class="pice">¥18.0</span>
               </p>
               <p>
                 <span class="decv">可订明日</span>
                  <span class="buy">预定</span>
               </p>
           </li> <li>
               <p>
                   <span class="title">{{title}}老人票</span>
                   <span class="pice">¥17.0</span>
               </p>
               <p>
                 <span class="decv">可订明日</span>
                  <span class="buy">预定</span>
               </p>
           </li>
          
       </ul>
   </div>
   <div class="con">
       <ul>
           <li>
               <p><i class="iconfont icon-tuijian"></i>成人票 </p> 
           </li>
           <li>
               <p>
                   成人票
                    <span>¥37.0</span>
               </p>  
           </li>
           <li>
                <p><i class="iconfont icon-tuijian"></i>优待票 </p> 
            </li>
             <li>
               <p>
                   老人票
                    <span>¥18.0</span>
               </p>  
           </li>
            <li>
               <p>
                   学生票
                    <span>¥17.0</span>
               </p>  
           </li>
       </ul>
   </div>
  </div>
</template>

<script>
  
export default {
  props:['title']
}
</script>

<style lang='stylus' scoped>
 #content
    font-size:.35rem
    .tuijie
       border-top:.2rem solid #eee
       border-bottom:.2rem solid #eee
       li 
         height:1.4rem
         border-bottom:1px solid #ccc
         padding-top:.2rem
         padding-left:.3rem
         .title
           font-size:.3rem
         .pice 
           float:right
           color:orange 
           font-size:.4rem
           margin-right:.5rem
         .buy 
           float:right
           margin-right:-1.4rem
           display:inline-block
           width:2rem
           height:.7rem 
           background-color:orange
           text-align:center
           line-height:.7rem
           color:#fff
           border-radius:.2rem
         .decv 
           font-size:.25rem
    .con 
       li 
        height:1rem
        border-bottom:1px solid #ddd
        padding-top:.2rem
        padding-left:.3rem
        span 
          color:orange
          float:right
          margin-right:.2rem
          font-size:.45rem
            
</style>

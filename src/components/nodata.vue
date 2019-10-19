<template>
<div class="wuContent">
  <div>
    <img src="../../public/images/nodata.png" alt="">
    <p>没搜到额，换个关键词吧~</p>
  </div>
</div>
</template>
<script>
export default {
  name: 'nodata'
}
</script>
<style lang="scss">
  .wuContent{
   position:absolute;
   top:70px;
   height:100%;
   overflow-y: auto;
   width:100%;
   display: flex;
   align-items: center;
   padding-bottom: 42px;
   div{
   margin:0 auto;
   img{
     width: 110px;
     height:126px;
   }
   p{
     font-size:12px;
     color:#666;
     margin: 13px 0 0 0;
   }
  }
   }
</style>

<!-- 二级路由 福利页面 -->
<template>
  <div class="activity">
    <div class="h_title">
      <div class="h_andress">
        <span>深圳</span>
        <i class="iconfont icon-xiangxia"></i>
      </div>
      <div class="h_search">
        <router-link to="/activitysearch">
        <i class="iconfont icon-sousuo"></i>
        搜索你想要的活动
        </router-link>
      </div>
      <div style="width:66px"></div>
    </div>

    <div class="screenbox">
      <ul>
        <router-link to="/activity/0" tag="li" >热血live</router-link>
        <router-link to="/activity/1" tag="li" >疯狂舞台</router-link>
        <router-link to="/activity/2" tag="li" >欢乐童年</router-link>
        <router-link to="/activity/3" tag="li" >独角秀应援</router-link>
        <i class="iconfont icon-xiangxia" ></i>
      </ul>
      <div class="active-line">
        <span></span>
      </div>
      <router-view></router-view>
    </div>
    <!-- <div class="content">
      <ul>
        <li></li>
      </ul>
    </div> -->
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
export default {
  name: 'activity',
  data () {
    return {
      curtype: 'live'
    }
  },
  methods: {
    changeType (type) {
      this.curtype = type
    }
  }

}
</script>
<style lang="scss">
 .activity{
   display: flex;
   flex-direction: column;
   .h_title{
     display: flex;
     height:36px;
     align-items: center;
     width: 100%;
     background-color: #fff;
     .h_andress{
      font-size: 13px;
      color:#333;
      width:66px;
      text-align: center;
      .icon-xiangxia{
        font-size:3px;
      }
     }
     .h_search{
       flex:1;
       font-size: 14px;
       background:#f8f6f6;
       height:28px;
       line-height: 28px;
       text-align: center;
       border-radius: 28px;
       a{
          text-decoration: none;
          color:#999;
       }
     }
   }
   .screenbox{
     ul{
       display: flex;
       justify-content: space-around;
       height:38px;
       align-items: center;
      li{
         text-decoration: none;
         color:#999;
         font-size:13px;
         &.router-link-active{
           color:#e72e62;
         }
       }
     }
   }
 }
</style>

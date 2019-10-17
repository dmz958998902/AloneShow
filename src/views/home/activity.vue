<!-- 二级路由 福利页面 -->
<template>
  <div class="activity">
    <div class="a">
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
         <router-link v-for="(tit, index) in titleList" :class="{'router-link-active': index === 0 && $route.path === '/activity' }" :key="index"  tag="li" :to="`/activity/${index}`">{{ tit }}</router-link>
        <i class="iconfont icon-xiangxia"></i>
      </ul>
    </div>
    </div>
    <!-- <div style="height:200px"></div> -->
   <activityList></activityList>
  </div>
</template>
<script>
import activityList from  "./../../components/activityList"
import { mapState, mapActions } from 'vuex'
export default {
  name: 'activity',
  components: {
    activityList
  },
  data () {
    return {
      curtype: 'live'
      // titleList: this.titleList
    }
  },
  computed: {
    ...mapState('activity', ['titleList'])
  },
  methods: {
    changeType (type) {
      this.curtype = type
    },
    ...mapActions('activity', ['getTitleList'])
  },
  created () {
    this.getTitleList()
  }
}
</script>
<style lang="scss">
@import "./../../assets/styles/base.scss";
@import '../../assets/styles/common/mixins.scss';
 .activity{
    display: flex;
    flex-direction: column;
    background-color: #f6f8f8;
    padding-top: 36px;
    height: auto;
    width: 100%;
    overflow: hidden;
    // padding-bottom: 42px;
    .a{
     position: fixed;
     top: 0;
     left: 0;
     width:100%;
    background-color: #fff;
    overflow: hidden;
    z-index: 3;
    .h_title{
     width: 100%;
     z-index: 2;
     display: flex;
     height:36px;
     align-items: center;
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
       height:28px;
       line-height: 28px;
       text-align: center;
       border-radius: 28px;
       background-color: #f8f6f6;
       position: relative;
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
       position: relative;
      li{
         text-decoration: none;
         color:#999;
         font-size:13px;
         &.router-link-active{
           color:#e72e62;
           @include aa
         }
       }
     }
   }
    }
 }
 .activity::-webkit-scrollbar{
           display: none;
   }
</style>

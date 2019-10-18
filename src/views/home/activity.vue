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
          <router-link v-for="(tit, index) in titleList" @click="changeView" :class="{'router-link-active': index === 0 && $route.path === '/activity' }" :key="index"  tag="li" :to="`/activity/${index}`">{{ tit }}</router-link>
          <i class="iconfont icon-xiangxia"></i>
        </ul>
      </div>
    </div>
    <!-- <div style="height:200px"></div> -->
    <div ref="box" class="boxx">
        <activityList></activityList>
    </div>

  </div>
</template>
<script>
import activityList from './../../components/activityList'
import { mapState, mapActions, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'activity',
  components: {
    activityList
  },
  data () {
    return {
      curtype: 'live',
      curpageNum: 1,
      classifyType: 2
    }
  },
  // watch: {

  // },
  computed: {
    ...mapState('activity', ['titleList', 'activityList', 'activityTotal'])
  },
  methods: {
    ...mapMutations('activity', ['setactivityList']),
    ...mapActions('activity', ['getTitleList']),
    changeType (type) {
      this.curtype = type
    },
    changeView () {
      console.log(1)
    }
    // changeView(){
    //   console.log(1)
    //  if(value===0){
    //    this.classifyType = 2
    //  }else if(value===1){
    //    this.classifyType = 3
    //  }else if(vlaue===2){
    //    this.classifyType = 4
    //  }else{
    //    this.classifyType = 1
    //  }
    // }
  },
  created () {
    this.getTitleList()
    // this.getactivityList()
    this.$store.dispatch('activity/getactivityList', {
      pageNum: this.curpageNum,
      classifyType: this.classifyType
    })
  },
  mounted () {
    let bs = new BScroll(this.$refs.box, {
      click: true,
      probeType: 3,
      pullUpLoad: true
    })
    bs.on('pullingUp', () => {
      // console.log(1)
      let totalPage = Math.ceil(this.activityTotal / 10)
      console.log(totalPage)
      if (this.curpageNum >= totalPage) {
        alert(1)
        bs.finishPullUp()

        return
      }
      this.curpageNum++
      console.log(this.curpageNum)
      this.$store.dispatch('activity/getactivityList', {
        pageNum: this.curpageNum,
        classifyType: this.classifyType,
        callback: () => {
          this.$nextTick(() => {
            bs.finishPullUp()
            bs.refresh()
          })
        }
      })
      // this.getactivityList({
      //   pageNum: 1,
      //   callback: () =>{
      //     bs.finishPullUp()
      //   }
      // })
    })
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
    // padding-top: 36px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    // padding-bottom: 42px;
    .a{
      // position: fixed;
      // top: 0;
      // left: 0;
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
  .boxx {
    flex: 1;
    overflow-y: auto;
  }
 }
 .activity::-webkit-scrollbar{
           display: none;
   }
</style>

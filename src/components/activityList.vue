<template>
  <div class="activity-list">
   <ul class="act">
     <li v-for="(item, index) in activityList" :key="index" >
        <router-link :to='`/activityDetail/${item.id}`'>
       <div class="act_bg_img" :style="`background-image: url(${item.thumb});`">
         <div class="jishi">
           <div class="act_bg_n" v-if="item.enddate - Millisecond < 0">活动结束</div>
            <div class="act_bg_s" v-else>
              <div class="jishi_text">距离<span>结束</span>还剩：</div>

              <div class="jishi_c" id="jishi_c">
                <van-count-down @finish='finished'  class='vantc'
                    :time="item.enddate - Millisecond"
                    format="DD 天 HH 时 mm 分 ss 秒"
                   />
              </div>
            </div>
         </div>
       </div>
       <h4 class="title">{{ item.title }}</h4>
      </router-link>
     </li>
   </ul>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'activityList',
  data () {
    return {
      Millisecond: ''
    }
  },
  computed: {
    ...mapState('activity', ['activityList'])
  },
  methods: {
    ...mapActions('activity', ['getactivityList']),
    mill () {
      let date = new Date().getTime()
      this.Millisecond = date
    },
    finished () {
    }
  },
  created () {
    // this.getactivityList(
  //   //   classifyType: this.$store.state.activityList[0].activity_classific
    // );
    this.mill()
  //   let obja = this.$store.state.activity
  //   console.log(obja)
  //   for (let item in obja){
  //     console.log(item)
  }
  // }
}
</script>
<style lang="scss">
@import "./../assets/styles/base.scss";
@import './../assets/styles/common/mixins.scss';
 .activity-list{
   position:absolute;
   top:70px;
   overflow-y: auto;
  //  height: 100%;
   width:100%;
   .act{
     display: flex;
     flex-direction: column;
     background: #ffffff;
    //  position: relative;
    //  bottom: 45px;
    margin-top: 64px;
    margin-bottom:45px;
     li{
      padding:13px;
      border-bottom: 4px solid #f6f8f8;
      box-sizing: border-box;
      width:100%;
      height:246px;
      overflow: hidden;
      .act_bg_img{
       height:184px;
       background-size: contain;
       position:relative;
       border-radius: 4px;
       .jishi{
         background-image: linear-gradient(to bottom, rgba(255,255,255,0), rgba(51,51,51,0.3));
         height:86px;
         position:absolute;
         bottom: 0;
         width: 100%;
         .act_bg_s, .act_bg_n{
           display: flex;
           justify-content: space-between;
           position: absolute;
           bottom:0;
           width: 100%;
           padding:13px;
           font-size: 12px;
           box-sizing: border-box;
           .jishi_text{
             color: #fff;
             font-weight: 700;
             span{
               color: #e72e62;
             }
           }
           .jishi_c{
             color: #ffffff;
             label{
               display: inline-block;
              height: 15px;
              line-height: 15px;
              padding: 0 2px;
              border-radius: 2px;
              background-color: rgba(255,255,255,0.3);
              margin-right: 2px;
             }
             .van-count-down {
              line-height: 20px;
              color: #fff;
              font-size: 12px;
}
           }
         }
         .act_bg_n{
           color:#fff;
         }
       }
      }
      .title{
        font-size: 14px;
        color: #333;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 17px;
      }
     }
   }
}
.activity-list::-webkit-scrollbar{
           display: none;
   }

</style>

<template>
  <div class="activityDetail">
    <div class="top">
      详情页
      <!-- <div class="act_bg_img" :style="`background-image: url(${item.thumb});`">
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
       </div> -->
       <!-- <h4 class="title">{{ item.title }}</h4> -->
      </div>

      <div class="center">

      </div>
      <div class="bottom">

      </div>
   </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'ActivityDetail',
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
    this.mill()
  }
}
</script>
<style lang="scss">

</style>

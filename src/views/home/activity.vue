<!-- 二级路由 福利页面 -->
<template>
  <div>
    <div class="activity">
      <div class="a">
        <div class="h_title">
          <div class="h_andress" @click="changeAdress">
            <span>{{na}}</span>
            <i class="iconfont icon-xiangxia"></i>
          </div>
          <div class="h_search">
            <router-link to="/search">
              <i class="iconfont icon-sousuo"></i>
              搜索你想要的活动
            </router-link>
          </div>
          <div style="width:66px"></div>
        </div>
        <div class="screenbox">
          <ul>
            <router-link
              v-for="(tit, index) in titleList"
              @click.native="changeView(index)"
              :class="{'router-link-active': index === 0 && $route.path === '/activity' }"
              :key="index"
              tag="li"
              :to="`/activity/${index}`"
            >{{ tit }}</router-link>
            <span class="iconfont icon-xiangxia" v-if="show" @click="changed"></span>
            <span
              class="iconfont icon-xiangxia"
              style="transform: rotate(-180deg);"
              @click="changed"
              v-else
            ></span>
          </ul>
          <div class="drop-down" v-if="isdisplay">
            <ul>
              <li @click="changeSt(0)" :class="{'ress':activityS==0}">全部</li>
              <li @click="changeSt(2)" :class="{'ress':activityS==2}">进行中</li>
              <li @click="changeSt(1)" :class="{'ress':activityS==1}">未开始</li>
              <li @click="changeSt(3)" :class="{'ress':activityS==3}">已结束</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <div style="height:200px"></div> -->
      <div ref="box" class="boxx">
        <!-- <keep-alive> -->
        <activityList v-if="xd"></activityList>
        <nodata v-if="!xd"></nodata>
        <!-- </keep-alive> -->
      </div>
    </div>
    <activAdress v-if="showAdress" @changeCity="fv($event)"></activAdress>
  </div>
</template>
<script>
import activityList from './../../components/activityList'
import nodata from './../../components/nodata'
import activAdress from './../../components/activityAdress'
import { mapState, mapActions, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'activity',
  components: {
    activityList,
    nodata,
    activAdress
  },
  data() {
    return {
      curtype: 'live',
      curpageNum: 1,
      classify: null,
      activityS: 0,
      isdisplay: false,
      show: true,
      showAdress: false,
      xd: true,
      na: '全国'
    }
  },
  computed: {
    ...mapState('activity', ['titleList', 'activityList', 'activityTotal'])
  },
  methods: {
    ...mapMutations('activity', ['setactivityList']),
    ...mapActions('activity', ['getTitleList']),
    changeType(type) {
      this.curtype = type
    },
    changed() {
      this.isdisplay = !this.isdisplay
      this.show = !this.show
    },
    changeView(value) {
      // console.log(value == 0)
      if (value == 0 || value == undefined) {
        this.classify = 2
      } else if (value == 1) {
        this.classify = 3
      } else if (value == 2) {
        this.classify = 4
      } else {
        this.classify = 1
      }
      console.log(this.classify)
    },
    changeSt(valued) {
      this.activityS = valued
      console.log(this.activityS)
    },
    changeAdress() {
      this.showAdress = !this.showAdress
    },
    changeyu() {
      console.log(this.$store.state.activity.activityTotal)
      // if(activityList){}
    },
    fv(e) {
      this.na = e
    }
  },
  watch: {
    classify: {
      handler(newVal) {
        this.setactivityList([])
        this.curpageNum = 1
        this.$store.dispatch('activity/getactivityList', {
          pageNum: this.curpageNum,
          classifyType: this.classify,
          activityState: this.activityS
        })
      },
      immediate: true
    },
    na() {
      this.showAdress = false
    },
    activityS: {
      handler(newVal) {
        this.setactivityList([])
        this.curpageNum = 1
        this.$store.dispatch('activity/getactivityList', {
          pageNum: this.curpageNum,
          classifyType: this.classify,
          activityState: this.activityS
        })
      },
      immediate: true
    }
  },

  created() {
    this.getTitleList()
    let value = this.$route.params.id
    console.log(value)
    this.changeView(value)
    this.changeyu()
    // console.log(this.$store.state.activity)
  },
  mounted() {
    //  let value = this.$route.params.id
    // changeView(value)
    let bs = new BScroll(this.$refs.box, {
      click: true,
      probeType: 3,
      pullUpLoad: true
    })
    bs.on('pullingUp', () => {
      // console.log(1)
      let totalPage = Math.ceil(this.activityTotal / 10)
      // console.log(totalPage)
      if (this.curpageNum >= totalPage) {
        // alert(1)
        bs.finishPullUp()
        return
      }
      this.curpageNum++
      console.log(this.curpageNum)
      this.$store.dispatch('activity/getactivityList', {
        pageNum: this.curpageNum,
        classifyType: this.classify,
        activityState: this.activityS,
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
@import './../../assets/styles/base.scss';
@import '../../assets/styles/common/mixins.scss';
.activity {
  display: flex;
  flex-direction: column;
  background-color: #f6f8f8;
  // padding-top: 36px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: absolute;
  z-index: 0;
  // padding-bottom: 42px;
  .a {
    position: fixed;
    top: 0;
    // left: 0;
    width: 100%;
    background-color: #fff;
    overflow: hidden;
    z-index: 3;
    .h_title {
      width: 100%;
      z-index: 2;
      display: flex;
      height: 36px;
      align-items: center;
      .h_andress {
        font-size: 13px;
        color: #333;
        width: 66px;
        text-align: center;
        .icon-xiangxia {
          font-size: 3px;
        }
      }
      .h_search {
        flex: 1;
        font-size: 14px;
        height: 28px;
        line-height: 28px;
        text-align: center;
        border-radius: 28px;
        background-color: #f8f6f6;
        position: relative;
        a {
          text-decoration: none;
          color: #999;
        }
      }
    }
    .screenbox {
      ul {
        display: flex;
        justify-content: space-around;
        height: 38px;
        align-items: center;
        position: relative;
        li {
          text-decoration: none;
          color: #999;
          font-size: 13px;
          &.router-link-active {
            color: #e72e62;
            @include aa;
          }
        }
      }
      .drop-down .ress {
        color: #e72e62;
      }
    }
  }
  .boxx {
    flex: 1;
    overflow-y: auto;
  }
}
.activity::-webkit-scrollbar {
  display: none;
}
.boxx::-webkit-scrollbar {
  display: none;
}
</style>

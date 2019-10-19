<!-- 二级路由 发现页面 -->
<template>
  <div>
    <div class="nav">
      <router-link to="/city">
        <div class="nav-left">
          <span>{{cityZb}}</span>
          <img src="https://m.mydeershow.com/nav_btn_dropdown1.png" alt />
        </div>
      </router-link>
      <router-link to="/search" style="flex:1;margin:0 10px 0 8px;">
        <div class="nav-center">
          <img src="https://m.mydeershow.com/nav_search_btn.png" alt />
          <p>输入关键词搜索</p>
        </div>
      </router-link>
      <div class="nav-footer">
        <span>{{day}}</span>
      </div>
    </div>
    <div class="scroll" ref="scroll">
      <div>
        <div class="banner">
          <van-swipe class="ban" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in arr" :key="index">
              <img :src="item.img" alt />
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="activity">
          <ul>
            <router-link tag="li" to="/home">
              <img src="https://m.mydeershow.com/home_icon_movie.png" alt />
              <div>电影</div>
            </router-link>
            <router-link tag="li" to="/home">
              <img src="https://m.mydeershow.com/home_icon_show.png" alt />
              <div>演出</div>
            </router-link>
            <router-link tag="li" to="/home">
              <img src="https://m.mydeershow.com/home_icon_motion.png" alt />
              <div>运动</div>
            </router-link>
            <router-link tag="li" to="/home">
              <img src="https://m.mydeershow.com/home_icon_tourism.png" alt />
              <div>旅行</div>
            </router-link>
            <router-link tag="li" to="/home">
              <img src="https://m.mydeershow.com/home_icon_charitable_activies.png" alt />
              <div>公益</div>
            </router-link>
          </ul>
          <ul>
            <router-link tag="li" to="/home">
              <img src="https://m.mydeershow.com/home_icon_have_fun.png" alt />
              <div>玩乐</div>
            </router-link>
            <router-link tag="li" to="/home">
              <img src="https://m.mydeershow.com/pop_icon_btn_appointment_eat.png" alt />
              <div>吃饭</div>
            </router-link>
            <router-link tag="li" to="/home">
              <img src="https://m.mydeershow.com/home_icon_chasing_game.png" alt />
              <div>游戏</div>
            </router-link>
            <router-link tag="li" to="/home">
              <img src="https://m.mydeershow.com/home_icon_chasing_stars.png" alt />
              <div>追星</div>
            </router-link>
            <router-link tag="li" to="/home">
              <img src="https://m.mydeershow.com/pop_icon_btn_appointment_free.png" alt />
              <div>自由</div>
            </router-link>
          </ul>
        </div>
        <div class="headline">
          <div class="tt">
            <img src="https://m.mydeershow.com/home_notice_show_head_img.png" alt />
          </div>
          <div>
            <van-swipe style="height: 20px;" :autoplay="3000" vertical :show-indicators="false">
              <van-swipe-item
                style="width:200px;height:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#666666;"
                v-for="item in headlineArr"
                :key="item.id"
              >{{item.short_title}}</van-swipe-item>
            </van-swipe>
          </div>
          <div class="dsj">
            <img src="https://m.mydeershow.com/home_notice_enter.png" alt />
          </div>
        </div>
        <div class="tabs">
          <ul>
            <li :class="{'active':types==='NowPlaying'}" @click="getType('NowPlaying')">正在热映</li>
            <li :class="{'active':types==='ComePlaying'}" @click="getType('ComePlaying')">即将上映</li>
          </ul>
          <router-link class="more" to="/home">
            <span>更多</span>
            <img src="https://m.mydeershow.com/home_notice_enter.png" alt />
          </router-link>
        </div>
        <FilmList :filmList="filmList" />

        <div
          class="choseBar"
          :class="{'fixed':isFixed}"
          :style="{'top':isFixed ?`${fixedTop}px`:0}"
        >
          <van-tabs
            v-model="active"
            title-active-color="red"
            animate
            style="width:262px;margin-left:15px;"
          >
            <van-tab title="最新"></van-tab>
            <van-tab title="热门"></van-tab>
            <van-tab title="约电影"></van-tab>
            <van-tab title="约演出"></van-tab>
            <van-tab title="约运动"></van-tab>
            <van-tab title="约旅游"></van-tab>
            <van-tab title="约公益"></van-tab>
            <van-tab title="约玩乐"></van-tab>
            <van-tab title="约游戏"></van-tab>
            <van-tab title="约吃饭"></van-tab>
            <van-tab title="自由约"></van-tab>
          </van-tabs>
          <div class="chose">
            <i>筛选</i>
            <span class="iconfont icon-xiangxia"></span>
          </div>
        </div>

        <Upload :personalYR="personalYR" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import FilmList from '../../components/movie'
import Upload from '../../components/upload'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      arr: [],
      headlineArr: [],
      filmList: [],
      types: 'NowPlaying',
      active: 1,
      personalYR: [],
      isFixed: false,
      fixedTop: 0,
      index: 1,
      pageNum: '',
      day: '',
      cityZb: '全国'
    }
  },
  components: {
    FilmList,
    Upload
  },
  methods: {
    getType (type) {
      this.types = type
      if (type === 'NowPlaying') {
        this.filmList = []
        axios
          .get(
            'https://api.mydeershow.com/mobile/app/movieHome/hotMovie?source=mobile&cityName=%E6%B7%B1%E5%9C%B3&citySituationName=%E6%B7%B1%E5%9C%B3&encrypt=NVBwTDE1NzExNDIwNjI4MzVCMU5IVg%3D%3D&citySituationId=47&vno=3.2.3'
          )
          .then(response => {
            let result = response.data.data

            this.filmList = result
          })
      }

      if (type === 'ComePlaying') {
        this.filmList = []
        axios
          .get(
            'https://api.mydeershow.com/mobile/app/movieHome/otherMovie?source=mobile&cityName=%E5%85%A8%E5%9B%BD&citySituationName=%E5%85%A8%E5%9B%BD&encrypt=ZDlzRzE1NzEyMDgzMTExNTBtcDlDWA%3D%3D&citySituationId=-1&vno=3.2.3'
          )
          .then(response => {
            let result = response.data.data

            this.filmList = result
          })
      }
    },
    getgirl (index) {
      axios
        .get('https://api.mydeershow.com/mobile/app/aboutchat/aboutchatList', {
          params: {
            source: 'mobile',
            citySituationName: '全国',
            encrypt: 'SVEyZTE1NzEzMjAyMjAyNjlGdnpWSw==',
            citySituationId: '-1',
            vno: '3.2.3',
            pageNum: index,
            pageSize: 10,
            buyType: '',
            type: '',
            planId: '',
            kind: '',
            time: '',
            chooseSex: '3',
            buyPattern: '',
            longitude: '',
            latitude: '',
            targetNumber: '',
            distance: '',
            relationId: '',
            minAge: '16',
            maxAge: '50',
            isCertification: '',
            inviteNumber: '0',
            homeHot: '1',
            maxId: '',
            maxUpdateTime: ''
          }
        })
        .then(response => {
          let result = response.data.data
          let num = response.data.total_page
          this.personalYR = this.personalYR.concat(result)
          this.pageNum = num
        })
    },
    getDate () {
      let d = new Date()
      let day = d.getDate()
      this.day = day
    },
    getCity () {
      let cityZb = window.localStorage.getItem('cityInfo')
      this.cityZb = cityZb
    }
  },
  mounted () {
    let bs = new BScroll(this.$refs.scroll, {
      probeType: 2,
      click: true,
      pullUpLoad: true
    })
    bs.on('scroll', data => {
      if (data.y < -550) {
        this.isFixed = true
        this.fixedTop = Math.abs(data.y)
      } else {
        this.isFixed = false
      }
    })
    bs.on('pullingUp', () => {
      this.index++
      if (this.index / 1 > this.pageNum / 1) {
        bs.finishPullUp()
        return
      }
      this.getgirl(this.index)
      bs.finishPullUp()
    })
  },
  created () {
    this.getDate()
    this.getCity()
    axios
      .get(
        'https://api.mydeershow.com/mobile/app/sowing/list?source=mobile&cityName=&citySituationName=%E6%B7%B1%E5%9C%B3&encrypt=aWxBWjE1NzExMjA4OTUxOTRSRnp6Rg%3D%3D&citySituationId=47&vno=3.2.3&type=-1'
      )
      .then(response => {
        let result = response.data.data.classify1

        this.arr = result
      })
    axios
      .get(
        'https://api.mydeershow.com/mobile/app/homeInformation/search?source=mobile&cityName=%E6%B7%B1%E5%9C%B3&citySituationName=%E6%B7%B1%E5%9C%B3&encrypt=cm9YTzE1NzExMjY1NTYwMzlLM2p6Qg%3D%3D&citySituationId=47&vno=3.2.3'
      )
      .then(response => {
        let result = response.data.data

        this.headlineArr = result
      })

    this.getType(this.types)
    this.getgirl(this.index)
  }
}
</script>
<style lang="scss">
.nav {
  position: fixed;
  top: 0;
  z-index: 999;
  background: #ffffff;
  display: flex;
  height: 42px;
  width: 100%;
  justify-content: space-between;
  .nav-left {
    display: flex;
    align-items: center;
    width: 40px;
    font-size: 14px;
    color: #333333;
    margin-left: 15px;
    span {
      display: block;
      line-height: 42px;
    }
    img {
      width: 10px;
      height: 6px;
    }
  }
  .nav-center {
    display: flex;
    flex: 1;
    height: 28px;
    margin-top: 7px;
    align-items: center;
    border-radius: 14px;
    background: #f7f7f7;
    img {
      width: 22px;
      height: 22px;
      margin-left: 10px;
      margin-right: 10px;
    }
    p {
      color: #666666;
      font-size: 12px;
      line-height: 42px;
    }
  }
  .nav-footer {
    display: flex;
    align-items: center;
    span {
      display: block;
      color: #333333;
      font-size: 12px;
      width: 16px;
      height: 16px;
      border: 1px solid #333333;
      margin-right: 15px;
      text-align: center;
      line-height: 16px;
      border-radius: 3px;
    }
  }
}
.banner {
  margin-top: 42px;
  width: 100%;
  height: 115px;
  .ban {
    margin-left: 15px;
    margin-right: 15px;
    img {
      width: 100%;
      height: 105px;
      margin-top: 5px;
    }
  }
}
.activity {
  padding: 10px 0;
  ul {
    display: flex;
    margin-bottom: 10px;
    li {
      flex: 1;
      display: flex;
      // justify-content: center;
      flex-direction: column;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
      }
      div {
        margin-top: 5px;
      }
    }
  }
}
.headline {
  width: 100%;
  display: flex;
  .tt {
    margin-left: 15px;
    margin-right: 15px;

    img {
      width: 55px;
      height: 20px;
    }
  }
  .dsj {
    margin-right: 15px;
    img {
      width: 6px;
      height: 10px;
    }
  }
}
.tabs {
  display: flex;
  padding: 15px;
  justify-content: space-between;
  ul {
    margin-bottom: 15px;
    display: flex;
    li {
      font-size: 14px;
      color: #cccccc;
      margin-right: 30px;
      flex: 1;
      &.active {
        color: #1a1a1a;
        font-weight: 700;
      }
    }
  }
  .more {
    span {
      color: #999999;
      margin-right: 5px;
      font-size: 12px;
    }
    img {
      width: 6px;
      height: 10px;
    }
  }
}
.choseBar {
  display: flex;
  width: 100%;
  z-index: 999;
  background: #ffffff;
  &.fixed {
    position: fixed;
    ~ .yueh {
      margin-top: 50px;
    }
  }
  .chose {
    width: 50px;
    height: 40px;
    margin-left: 35px;
    display: flex;
    align-items: center;
    i {
      color: #333333;
      font-size: 14px;
      display: block;
      margin-right: 5px;
    }
    span {
      color: 20px;
      display: block;
    }
  }
}
.scroll {
  height: 550px;
  position: relative;
}
</style>

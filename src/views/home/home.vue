<!-- 二级路由 发现页面 -->
<template>
  <div>
    <div class="nav">
      <router-link to="/city">
        <div class="nav-left">
          <span>深圳</span>
          <img src="https://m.mydeershow.com/nav_btn_dropdown1.png" alt />
        </div>
      </router-link>
      <router-link to="/search">
        <div class="nav-center">
          <img src="https://m.mydeershow.com/nav_search_btn.png" alt />
          <p>输入关键词搜索</p>
        </div>
      </router-link>
      <div class="nav-footer">
        <span>14</span>
      </div>
    </div>
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
        <van-swipe style="height: 20px;" :autoplay="1000" vertical :show-indicators="false">
          <van-swipe-item
            style="width:260px;height:20px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#666666;"
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
    <div class="film">
      <van-swipe :loop="false" :width="100" :show-indicators="false">
        <van-swipe-item v-for="item in filmList" :key="item.movieId">
          <router-link class="film-banner" to="/fimlInfo">
            <img :src="item.moviePoster" alt />
            <span>{{item.showDate}}</span>
            <p>{{item.movieName}}</p>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      arr: [],
      headlineArr: [],
      filmList: [],
      types: 'NowPlaying'
    }
  },
  methods: {
    getType (type) {
      this.types = type
    }
  },
  created () {
    axios
      .get(
        'https://api.mydeershow.com/mobile/app/sowing/list?source=mobile&cityName=&citySituationName=%E6%B7%B1%E5%9C%B3&encrypt=aWxBWjE1NzExMjA4OTUxOTRSRnp6Rg%3D%3D&citySituationId=47&vno=3.2.3&type=-1'
      )
      .then(response => {
        let result = response.data.data.classify1
        // console.log(result)
        this.arr = result
      })
    axios
      .get(
        'https://api.mydeershow.com/mobile/app/homeInformation/search?source=mobile&cityName=%E6%B7%B1%E5%9C%B3&citySituationName=%E6%B7%B1%E5%9C%B3&encrypt=cm9YTzE1NzExMjY1NTYwMzlLM2p6Qg%3D%3D&citySituationId=47&vno=3.2.3'
      )
      .then(response => {
        let result = response.data.data
        // console.log(result)
        this.headlineArr = result
      })
    axios
      .get(
        'https://api.mydeershow.com/mobile/app/movieHome/hotMovie?source=mobile&cityName=%E6%B7%B1%E5%9C%B3&citySituationName=%E6%B7%B1%E5%9C%B3&encrypt=NVBwTDE1NzExNDIwNjI4MzVCMU5IVg%3D%3D&citySituationId=47&vno=3.2.3'
      )
      .then(response => {
        let result = response.data.data
        console.log(result)
        this.filmList = result
      })
  }
}
</script>
<style lang="scss">
.nav {
  display: flex;
  height: 42px;
  padding: 0 15px 0 15px;
  .nav-left {
    display: flex;
    align-items: center;
    width: 50px;
    font-size: 14px;
    color: #333333;
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
    width: 259px;
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
      margin-left: 15px;
      text-align: center;
      line-height: 16px;
      border-radius: 3px;
    }
  }
}
.banner {
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
.film {
  margin-left: 15px;
  .film-banner {
    position: relative;
    display: flex;
    flex-direction: column;
    img {
      width: 91px;
      height: 131px;
      border-radius: 3px;
    }
    span {
      display: block;
      width: 90px;
      font-size: 12px;
      padding: 5px 0;
      position: absolute;
      top: 110px;
      color: #ffffff;
      text-align: center;
    }
    p {
      font-size: 14px;
      color: #343434;
      margin: 10px 0;
    }
  }
}
</style>

<!-- 一级路由 影片信息详情页面 -->
<template>
  <div>
    <div class="info">
      <i class="iconfont icon-xiangzuo"></i>
      <span>详情</span>
    </div>
    <div class="head">
      <div class="img">
        <img :src="filmInfo.moviePoster" alt />
      </div>
      <div class="filminfo">
        <h1>{{filmInfo.movieName}}</h1>
        <div class="munite">剧情/{{filmInfo.movieLen}}分钟</div>
        <div class="actors">主演:{{filmInfo.actors}}</div>
        <div class="date">上映时间：{{filmInfo.showDate}} {{filmInfo.place}}</div>
        <div class="fenshu">
          <i>{{filmInfo.star}}</i>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.info {
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  i {
    font-size: 20px;
    margin-right: 140px;
    margin-left: 10px;
  }
  span {
    color: #333333;
    font-size: 18px;
  }
}
.head {
  padding: 15px;
  display: flex;
  .img {
    img {
      width: 100px;
      height: 146px;
    }
  }
  .filminfo {
    padding-left: 15px;
    h1 {
      width: 215px;
      color: #333333;
      font-size: 20px;
      line-height: 35px;
    }
    .munite,
    .actors,
    .date,
    .fenshu {
      width: 215px;
      color: #333333;
      font-size: 12px;
      margin-top: 10px;
    }
    .fenshu {
      font-size: 23px;
    }
  }
}
</style>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      filmInfo: [],
      id: ''
    }
  },
  methods: {
    getFilmInfo (id) {
      axios
        .get('https://api.mydeershow.com/mobile/app/movie/movieInfo', {
          params: {
            source: 'mobile',
            cityName: '全国',
            citySituationName: '全国',
            encrypt: 'aEVHbzE1NzEzODc3MjkwNzF3SjgyTA==',
            citySituationId: -1,
            vno: '3.2.3',
            movieId: id
          }
        })
        .then(response => {
          let data = response.data.data
          console.log(data)
          this.filmInfo = data
        })
    }
  },
  created () {
    this.id = this.$route.params.id
    this.getFilmInfo(this.id)
  }
}
</script>

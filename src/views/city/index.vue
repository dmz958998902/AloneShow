<!-- 一级路由 城市页面 -->
<template>
  <div class="page-city">
    <van-nav-bar title="选择城市">
      <template #left>
        <i class="iconfont icon-xiangzuo"></i>
      </template>
    </van-nav-bar>
    <!-- 城市列表选择 -->
    <div class="city-list">
      <div class="city-item">
        <p class="orientCity">
          <span></span>
          定位城市
        </p>
        <P class="orient">广州</P>
        <p class="hotCity">热门城市</p>
        <div class="hotCityList">
          <ul v-for="cityArr in hotCity" :key="cityArr.index">
            <li v-for="city in cityArr" :key="city">{{city}}</li>
          </ul>
        </div>
        <div class="city-select" v-for="city in cityList" :key="city.py">
          <p class="cityPy">{{city.py}}</p>
          <ul>
            <li v-for="cityItem in city.list" :key="cityItem.id">{{cityItem.name}}</li>
          </ul>
        </div>
      </div>
      <!-- <div class="city-bar">
        <ul>
          <li v-for="py in 10" :key="py">{{py}}</li>
        </ul>
      </div>-->
    </div>
  </div>
</template>
<style lang='scss'>
@import '../../assets/styles/common/mixins.scss';
.page-city {
  .van-nav-bar {
    .van-nav-bar__title {
      font-size: 16px;
      color: #333333;
    }
  }
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .city-list {
    flex: 1;
    overflow-y: auto;
    font-size: 14px;
    display: flex;
    width: 100%;
    .city-item {
      p {
        height: 45px;
        line-height: 45px;
        padding: 0 15px;
      }
      .orientCity {
        background: #eeeeee;
      }
      .hotCity {
        background: #eeeeee;
      }
      .hotCityList {
        height: 225px;
        ul {
          display: flex;
          li {
            height: 45px;
            padding: 0 15px;
            line-height: 45px;
            width: 112px;
          }
        }
      }
      .city-select {
        .cityPy {
          background: #eeeeee;
        }
        ul {
          margin-left: 15px;
          li {
            height: 45px;
            line-height: 45px;
            @include border-bottom;
          }
        }
      }
    }
  }
}
</style>
<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      hotCity: [
        ['上海', '广州', '北京'],
        ['福州', '成都', '苏州'],
        ['天津', '杭州', '厦门'],
        ['长沙', '深圳', '重庆'],
        ['南京', '武汉', '西安']
      ]
    }
  },
  computed: {
    ...mapState('city', ['cities']),
    ...mapGetters('city', ['cityList']),
    ...mapGetters('city', ['cityPy'])
  },
  methods: {
    ...mapActions('city', ['getCities']),
    goBack () {
      this.$router.back()
    },
    location (curPy) {
      this.curPy = curPy
      this.curBu = curPy
      setTimeout(() => {
        this.curBu = ''
      }, 500)
      let pyId = document.getElementById(curPy)
      let cityList = this.$refs.box
      let top = pyId.offsetTop
      cityList.scrollTop = top
    }
  },
  created () {
    this.getCities()
  }
}
</script>

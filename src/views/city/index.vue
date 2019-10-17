<!-- 一级路由 城市页面 -->
<template>
  <div class="page-city">
    <van-nav-bar title="选择城市">
      <template #left>
        <i class="iconfont icon-xiangzuo" @click="goBack"></i>
      </template>
    </van-nav-bar>
    <!-- 城市列表选择 -->
    <div class="city-list" ref="box">
      <div class="city-item">
        <p class="orientCity" :id="prePy[0]">
          <span></span>
          定位城市
        </p>
        <P class="orient">广州</P>
        <p class="hotCity" :id="prePy[1]">热门城市</p>
        <div class="hotCityList">
          <ul v-for="cityArr in hotCity" :key="cityArr.index">
            <li v-for="city in cityArr" :key="city">{{city}}</li>
          </ul>
        </div>
        <div class="city-select" v-for="city in cityList" :key="city.py" :id="city.py">
          <p class="cityPy">{{city.py}}</p>
          <ul>
            <li v-for="cityItem in city.list" :key="cityItem.id">{{cityItem.name}}</li>
          </ul>
        </div>
      </div>
      <div class="city-bar">
        <ul>
          <li
            v-for="item in prePy"
            :key="item"
            @click="location(item)"
            :class="{'active':item===curPy}"
          >{{item}}</li>
          <li
            v-for="city in cityList"
            :key="city.py"
            @click="location(city.py)"
            :class="{'active':city.py===curPy}"
          >{{city.py}}</li>
        </ul>
      </div>
    </div>
    <!-- 缓冲提示 -->
    <div class="buffer" v-if="curBu">{{curBu}}</div>
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
    width: 100%;
    position: relative;
    color: #666666;
    .city-item {
      flex: 1;
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
          padding-right: 40px;
          li {
            text-align: center;
            height: 45px;
            width: 33%;
            line-height: 45px;
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
    .city-bar {
      width: 40px;
      position: fixed;
      height: 100%;
      right: 0;
      top: 0;
      z-index: 999;
      display: flex;
      align-items: center;
      ul {
        li {
          width: 40px;
          text-align: center;
          height: 20px;
          &.active {
            color: #fe104c;
          }
        }
      }
    }
  }
  .buffer {
    width: 80px;
    height: 80px;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    text-align: center;
    line-height: 80px;
    color: white;
    transition: all 0.3s;
    font-size: 16px;
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
      ],
      curPy: '定',
      curBu: '',
      prePy: ['定', '热']
    }
  },
  computed: {
    ...mapState('city', ['cities']),
    ...mapGetters('city', ['cityList'])
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

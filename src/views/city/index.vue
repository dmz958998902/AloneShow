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
      </div>
      <div class="city-bar"></div>
    </div>
  </div>
</template>
<style lang='scss'>
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
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      hotCity: [
        ['上海', '广州', '北京'],
        ['福州', '成都', '苏州'],
        ['天津', '杭州', '厦门'],
        ['长沙', '深圳', '重庆'],
        ['南京', '武汉', '西安']
      ]
    }
  }
}
</script>
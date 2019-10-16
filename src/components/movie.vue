<!-- 首页下面的 电影布局组件 -->
<template>
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
</template>
<script>
export default {
  name: 'Movie',
  props: {
    filmList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
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

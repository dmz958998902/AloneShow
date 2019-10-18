<template>
  <div style="height: 100%">
    <div class="page-home">
      <!-- 一级路由 首页 -->

      <router-view></router-view>

      <ul class="nav_bar">
        <router-link tag="li" to="/home">
          <p>
            <i class="iconfont icon-shouye"></i>
            <span>首页</span>
          </p>
        </router-link>
        <router-link tag="li" to="/discover">
          <i class="iconfont icon-faxian"></i>
          <span>发现</span>
        </router-link>
        <router-link tag="li" to="/">
          <img src="https://m.mydeershow.com/tab_home_more_icon.png" alt />
        </router-link>
        <router-link tag="li" :to="`/activity`">
          <i class="iconfont icon-fuli"></i>
          <span>福利</span>
        </router-link>
        <router-link tag="li" to="/myself">
          <i class="iconfont icon-ziyuan1"></i>
          <span>我的</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      typeColor: 'home'
    }
  },
  methods: {
    changeAct (type) {
      this.typeColor = type
      console.log(type)
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/base.scss';
@import '../../assets/styles/common/mixins.scss';
.page-home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  > div:first-child {
    overflow: hidden;
  }
  .nav_bar {
    @include border-top;
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    height: 50px;
    background: #ffffff;
    z-index: 100;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 50px;
      flex: 1;
      text-align: center;
      img {
        width: 40px;
        height: 40px;
      }
      span {
        display: block;
        margin-top: 3px;
        font-size: 12px;
      }
      i {
        font-size: 20px;
      }
      &.router-link-exact-active {
        color: #e72e62;
      }
    }
  }
}
.gif {
  width: 115px;
  height: 80px;
  position: fixed;
  left: 50%;
  margin-left: -57px;
  bottom: 40px;
  z-index: 100;
  img {
    width: 100%;
  }
}
</style>

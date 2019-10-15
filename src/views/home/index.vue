<template>
  <div class="page-home">
    <!-- 一级路由 首页 -->

    <div class="content">
      <router-view></router-view>
    </div>

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
      <router-link tag="li" to="/activity">
        <i class="iconfont icon-fuli"></i>
        <span>福利</span>
      </router-link>
      <router-link tag="li" to="/myself">
        <i class="iconfont icon-ziyuan1"></i>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'home'
}
</script>

<style lang="scss">
@import '../../assets/styles/base.scss';
@import '../../assets/styles/common/mixins.scss';
.page-home {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  .content {
    flex: 1;
    overflow-y: auto;
  }
  .nav_bar {
    @include border-top;
    width: 100%;
    display: flex;
    // justify-content: space-between;
    height: 50px;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      text-align: center;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
      }
      span {
        font-size: 12px;
      }
      i {
        display: block;
        font-size: 20px;
        margin-bottom: 3px;
      }
      &.router-link-exact-active {
        color: #e72e62;
      }
    }
  }
}
</style>

<template>
  <div class="page-home">
    <!-- 一级路由 首页 -->

    
    <div class="content">
      <router-view></router-view>
    </div>

    <ul class="nav_bar">
      <router-link tag="li" to="/">首页</router-link>
      <router-link tag="li" to="/discover">发现</router-link>
      
      <li>
        <button>+</button>
      </li>
      <router-link tag="li" to="/activity">福利</router-link>
      <router-link tag="li" to="/myself">我的</router-link>
    </ul>

  </div>
</template>
<script>
export default {
  name:'home'
}
</script>

<style lang="scss">
  @import '../../assets/styles/base.scss';
  .page-home{
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .content{
      flex: 1;
    }
    .nav_bar{
      list-style: none;
      display: flex;
      justify-content: space-between;
      height: 50px;
      button{
        width: 30px;
        height: 30px;
      }
      li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        text-align: center;
        align-items: center;
      }
    }
  }
</style>
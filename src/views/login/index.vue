<!-- 登录的封面 -->
<template>
  <div class="logins">
    <!-- <router-view></router-view> -->
    <div class="my_login">
      <!-- 一级路由 登录页面 -->
      <div class="isLogin" @click="offLoginPage">
        <img src="../../../public/images/login_selection_delete.png" alt />
      </div>
      <div class="my_logo">
        <img src="../../../public/images/img_dujijaoxiu.png" alt />
      </div>
      <login_btn colors="a1" @changerouter="changRou"></login_btn>
    </div>
    <div class="my_mask"></div>
  </div>
</template>
<style lang="scss" scpoed>
.logins {
  height: 100%;
  .my_login {
    height: 100%;
    background-image: url('../../../public/images/login_bjm_img.png');
    background-repeat: no-repeat;
    background-size: 100%;
    position: relative;
    .isLogin {
      position: absolute;
      right: 14px;
      top: 21px;
      z-index: 10;
      opacity: 0.9;
      img {
        width: 34px;
      }
    }
    .my_logo {
      width: 85px;
      height: 120px;
      left: 117px;
      top: 56px;
      position: absolute;
      z-index: 10;
      img {
        width: 85px;
        height: 120px;
      }
    }
  }
  .my_mask {
    width: 100%;
    position: fixed;
    top: 0;
    height: 100%;
    background-color: #333;
    opacity: 0.4;
  }
}
</style>
<script>
import login_btn from '../../components/login_btn'
export default {
  components: {
    login_btn
  },
  methods: {
    changRou () {
      // 在跳转的时候携带原来想要去的路径
      let url = this.$route.query.redirect
      this.$router.push({
        path: '/register',
        query: {
          redirect: url
        }
      })
    },
    offLoginPage () {
      this.$router.push('/home')
    }
  }
}
</script>

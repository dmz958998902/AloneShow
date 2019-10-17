<!-- 登录页面 -->
<template>
  <div class="my_loginok">
    <!-- 一级路由 注册页面 -->
    <login_nav @back="back"></login_nav>

    <login_title hcontent="密码登录" pcontent="要确保和手机号一致哦"></login_title>

    <login_input :isshowpwd="isshowpwd" :isshowa="isshowa" @inputs="chginput"></login_input>

    <div>
      <login_btn content="登录" :colors="colorss"></login_btn>
    </div>
  </div>
</template>
<script >
import login_nav from '../../components/login_nav'
import login_title from '../../components/login_title'
import login_btn from '../../components/login_btn'
import login_input from '../../components/login_input'

export default {
  data() {
    return {
      isshowpwd: true,
      isshowa: true,
      colorss: 'a2'
    }
  },
  components: {
    login_nav,
    login_btn,
    login_title,
    login_input
  },
  methods: {
    back() {
      this.$router.push('/register')
    },
    chginput() {
      console.log('1111')
    }
  }
}
</script>
<style lang="scss" scoped>
.my_register {
  width: 100%;
  .title_box {
    margin-top: 15px;
    width: 100%;
    height: 43px;
    padding: 0 20px;
    box-sizing: border-box;
    h1 {
      font-size: 22px;
      color: #333;
      font-weight: 900;
      margin-bottom: 4px;
    }
    p {
      font-size: 12px;
      color: #b3b3b3;
      padding-top: 4px;
    }
  }

  .changelogin {
    text-align: center;
    font-size: 12px;
    color: #333;
    font-weight: 700;
    margin-top: 160px;
  }
  .agreement {
    line-height: 16px;
    box-sizing: border-box;
    margin-top: 86px;
    font-size: 12px;
    color: #333;
    text-align: center;
    padding: 0 15px;
    a {
      color: #fc0f4a;
    }
  }
  .login_btn {
    z-index: 10;
    width: 256px;
    height: 52px;
    position: absolute;
    left: 33px;
    bottom: 200px;
  }
}
</style>
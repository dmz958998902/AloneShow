<!-- 登录注册页面的点击登录按钮 -->
<template>
  <div class="login_btn">
    <div
      class="login_btn_ok"
      :class="{ active1 : colors === 'a1' ,active2 : colors === 'a2'}"
      @click="my_click"
    >
      <button>{{ content }}</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      default: '登录/注册'
    },
    colors: {
      type: String,
      required: true
    }
  },
  methods: {
    my_click () {
      this.$emit('changerouter')
    }
  }
}
</script>
<style lang="scss" scoped>
.login_btn {
  z-index: 10;
  width: 256px;
  height: 52px;
  position: absolute;
  left: 33px;
  bottom: 64px;
  .active1 {
    background: #fc0f4a;
  }
  .active2 {
    background: rgba(252, 15, 74, 0.5);
  }
  .login_btn_ok {
    // width: 100%;
    // height: 38px;
    border-radius: 18px;
    // text-align: center;
    // line-height: 38px;
    // font-weight: 700;
    // color: #fff;
    // font-size: 15px;
    button {
      background: rgba(0, 0, 0, 0);
      border: none;
      width: 100%;
      height: 38px;
      border-radius: 18px;
      text-align: center;
      line-height: 38px;
      font-weight: 700;
      color: #fff;
      font-size: 15px;
    }
  }
}
</style>

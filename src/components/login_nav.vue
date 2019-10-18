<!-- 登录注册页面的nav -->
<template>
  <div class="login_nav">
    <div class="goback">
      <i class="iconfont icon-xiangzuo" @click="back"></i>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    back () {
      this.$emit('back')
    }
  }
}
</script>
<style lang="scss" scoped>
.login_nav {
  box-sizing: border-box;
  width: 320px;
  height: 42px;
  padding: 0 5px;
  .goback {
    line-height: 42px;
    i {
      font-size: 24px;
    }
  }
}
</style>

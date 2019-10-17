<!-- 收货页面 公用头部导航 -->
<template>
  <div>
    <van-nav-bar
      :title="title"
      :right-text="rightText"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<style lang="scss" scoped>
.van-nav-bar {
  margin-bottom: 4px;
}
.van-ellipsis {
  font-weight: 900;
  font-size: 14px;
  height: 41px;
}
.van-nav-bar__text {
  font-size: 12px;
  color: #fe104c;
  font-weight: 600;
}
.van-nav-bar__left :before {
  font-size: 21px;
  color: #333;
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    rightText: {
      type: String,
      required: true
    }
  },
  methods: {
    onClickLeft() {
      this.$emit('leftEvent')
    },
    onClickRight() {
      this.$emit('rightEvent')
    }
  }
}
</script>
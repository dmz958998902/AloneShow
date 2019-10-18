<!-- 登录注册页面的title -->
<template>
  <div class="title_box">
    <h1>{{ hcontent }}</h1>
    <p>{{ pcontent }}~</p>
  </div>
</template>

<script>
export default {
  props: {
    hcontent: {
      type: String,
      required: true
    },
    pcontent: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.title_box {
  margin-top: 15px;
  width: 100%;
  width: 320px;
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
</style>

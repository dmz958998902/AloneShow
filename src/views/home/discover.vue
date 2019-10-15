<!-- 二级路由 发现页面 -->
<template>
  <div>
    <div class="discover-top">
      <div class="discover-cityname">
        <span class="iconfont">全国&#xe626;</span>
      </div>
      <div class="discover-nav">
        <div class="discover-nav-rec">
          <span>推荐</span>
          <div class="discover-nav-xhx"></div>
        </div>
        <div class="discover-nav-fol">
          <span>关注</span>
          <div class="discover-nav-xhx"></div>
        </div>
      </div>
      <a class="iconfont">&#xe618;</a>
    </div>
    <component :is="discoverrec" />
  </div>
</template>
<script>
import discoverrec from '../../components/discoverRec'
import discoverrfol from '../../components/discoverFol'
export default {
  name: 'discover',
  components: {
    discoverrec,
    discoverrfol
  }
}
</script>
<style lang="scss">
.discover-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px 13px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 42px;
  // z-index: 5;
  background: #fff;
  .discover-cityname {
    display: flex;
    align-items: center;
  }
  .discover-nav {
    display: flex;
    .discover-nav-fol {
      margin: 0 5px;
      // font-size: 5px
    }
    .discover-nav-xhx {
      width: 34px;
      height: 4px;
      background: red;
    }
  }
}
</style>

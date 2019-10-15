<!-- 二级路由 发现页面 -->
<template>
  <div>
    <div class="nav">
      <router-link to="/city">
        <div class="nav-left">
          <span>深圳</span>
          <img src="https://m.mydeershow.com/nav_btn_dropdown1.png" alt />
        </div>
      </router-link>
      <router-link to="/search">
        <div class="nav-center">
          <img src="https://m.mydeershow.com/nav_search_btn.png" alt />
          <p>输入关键词搜索</p>
        </div>
      </router-link>
      <div class="nav-footer">
        <span>14</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.nav {
  display: flex;
  height: 42px;
  padding: 0 15px 0 15px;
  .nav-left {
    display: flex;
    align-items: center;
    width: 50px;
    font-size: 14px;
    color: #333333;
    span {
      display: block;
      line-height: 42px;
    }
    img {
      width: 10px;
      height: 6px;
    }
  }
  .nav-center {
    display: flex;
    width: 259px;
    height: 28px;
    margin-top: 7px;
    align-items: center;
    border-radius: 14px;
    background: #f7f7f7;
    img {
      width: 22px;
      height: 22px;
      margin-left: 10px;
      margin-right: 10px;
    }
    p {
      color: #666666;
      font-size: 12px;
      line-height: 42px;
    }
  }
  .nav-footer {
    display: flex;
    align-items: center;
    span {
      display: block;
      color: #333333;
      font-size: 12px;
      width: 16px;
      height: 16px;
      border: 1px solid #333333;
      margin-left: 10px;
      text-align: center;
      line-height: 16px;
      border-radius: 3px;
    }
  }
}
</style>

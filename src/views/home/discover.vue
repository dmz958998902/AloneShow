<!-- 二级路由 发现页面 -->
<template>
  <div class="discover">
    <div class="discover-top" style="z-index:0;position:absolute">
      <div class="discover-cityname" @click="changeAdress">
        <span class="iconfont">{{ na }}&#xe626;</span>
      </div>
      <div class="discover-nav">
        <ul>
          <li :class="{'active':currentView ==='discoverrec'}" @click="tabChange(discoverrec)">推荐</li>
          <li :class="{'active':currentView ==='discoverrfol'}" @click="tabChange(discoverrfol)">关注</li>
        </ul>
        <div class="discover-nav-xhx" :style="{'left':currentView === 'discoverrec' ? '0':'50%'}">
          <span></span>
        </div>
      </div>
      <router-link to="/search">
      <a id="dis-sea" class="iconfont">&#xe618;</a>
      </router-link>
    </div>
    <discoverAdress v-if="showAdress" @changeCity="fv($event)"></discoverAdress>
    <component :is="currentView"></component>
  </div>
</template>
<script>
import discoverrec from '../../components/discoverRec'
import discoverrfol from '../../components/discoverFol'
import discoverAdress from '../../components/discoverAdress'
export default {
  name: 'discover',
  data() {
    return {
      discoverrec: 'discoverrec',
      discoverrfol: 'discoverrfol',
      currentView: 'discoverrec',
      isClick: true,
      showAdress:false,
      na:'全国'
    }
  },
  watch: {
     na(){
         this.showAdress=false
     }
  },
  methods: {
    tabChange(tabItem) {
      this.currentView = tabItem
    },
    changeAdress(){
      this.showAdress=!this.showAdress
    },
    fv(e){
      this.na = e
    }
  },
  components: {
    discoverrec,
    discoverrfol,
    discoverAdress
  }
}
</script>
<style lang="scss">
.active {
  color: red;
}
.discover {
  height: 100%;
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
    z-index: 5;
    background: #fff;
    .discover-cityname {
      display: flex;
      align-items: center;
      .iconfont {
        font-size: 14px;
      }
    }
    .discover-nav {
      position: relative;
      ul {
        display: flex;
        width: 100px;
        align-items: center;
        li {
          flex: 1;
          padding: 4px;
          font-size: 13px;
          text-align: center;
          &.active {
            color: #333;
            font-size: 16px;
            font-weight: 800;
          }
        }
      }
      .discover-nav-xhx {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 5px;
        width: 50%;
        transition: all 0.5s;
        opacity: 0.7;
        span {
          display: block;
          width: 34px;
          margin: auto;
          height: 4px;
          background: #fe104c;
        }
      }
    }
    #dis-sea {
      font-size: 22px;
    }
  }
}
</style>

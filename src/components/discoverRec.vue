<template>
  <div class="discoverRec">
    <van-tabs v-model="active" animated>
      <van-tab title="全部">
        <template>
          <discoverCom></discoverCom>
        </template>
      </van-tab>
      <van-tab title="演出repo">
        <template>
          <discoverShow></discoverShow>
        </template>
      </van-tab>
      <van-tab title="电影repo">
        <template>
          <discoverMov></discoverMov>
        </template>
      </van-tab>
      <van-tab title="景点repo">
        <template>
          <discoverSpot></discoverSpot>
        </template>
      </van-tab>
      <van-tab title="爱的repo">
        <template>
          <discoverLove></discoverLove>
        </template>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import discoverCom from './discoverCom'
import discoverShow from './discoverShow'
import discoverMov from './discoverMov'
import discoverSpot from './discoverSpot'
import discoverLove from './discoverLove'
export default {
  name: 'discoverRec',
  data () {
    return {
      active: 0
    }
  },
  components: {
    discoverCom,
    discoverShow,
    discoverMov,
    discoverSpot,
    discoverLove
  }
}
</script>
<style lang="scss" scope>
.discoverRec {
  padding-top: 45px;
  height: 100%;
  .van-tabs {
    height: 100%;
    .van-tabs__line {
      display: none;
    }
    .van-tabs--line .van-tabs__wrap {
      height: 20px;
      padding-bottom: 10px;
      border-bottom: 5px solid #f7f7f7;
    }
    .van-tabs__content--animated {
      height: 100%;
      overflow-y: auto;
      margin-bottom: 50px;
    }
    .van-tabs__content--animated::-webkit-scrollbar {
      display: none;
    }
    .van-tab {
      line-height: 20px;
    }
    .van-tab--active {
      color: #fe104c !important;
      .van-ellipsis {
        font-size: 13px;
      }
    }
    .van-ellipsis {
      font-size: 10px;
    }
  }
}
</style>

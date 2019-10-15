<template>
  <div class="page-search">
    <div class="search-bar">
      <div class="back">
        <i class="iconfont icon-xiangzuo" @click="goback"></i>
      </div>
      <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @focus="fn">
        <div slot="action" class="search">搜索</div>
      </van-search>
    </div>
    <div class="kind">
      <van-dropdown-menu active-color="#e72e62" :overlay="false" ref="box">
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </div>
    <div class="nomore" v-if="isShow">没有更多</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      isShow: false,
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部分类', value: 0 },
        { text: '热血Live', value: 1 },
        { text: '疯狂舞台', value: 2 },
        { text: '欢乐萱年', value: 2 },
        { text: '独角秀应援', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ]
    }
  },
  methods: {
    fn() {
      this.value.focus()
    },
    goback() {
      this.$router.back()
    },
    clickItem() {
      console.log(this.$refs.box)
    }
  },
  created() {
    this.clickItem()
  }
}
</script>
<style lang="scss" scoped>
.page-search {
  .search-bar {
    display: flex;
    .back {
      align-self: center;
      height: 54px;
      line-height: 54px;
    }
    .van-search--show-action {
      flex: 1;
    }
    .search {
      color: #e72e62;
    }
  }
  .nomore {
    text-align: center;
  }
}
</style>

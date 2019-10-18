<template>
  <div>
    <!-- 一级路由 搜索页面 -->
    <h1>在此处搜索</h1>
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

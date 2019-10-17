<template>
  <div class="searchItem">
    <ul v-for="item in searchList" :key="item.id">
      <li class="img">
        <img :src="item.thumb" alt />
      </li>
      <li class="info">
        <div class="title">{{item.title}}</div>
        <div class="time">
          <p v-if="item.startdate-item.enddate<0">已结束</p>
          <p v-else>进行中</p>
        </div>
      </li>
    </ul>
    <!-- 没有搜索到结果时显示 -->
    <div class="noSearch" v-if="searchList.length==0&&value">
      <img src="https://m.mydeershow.com/empty_page_search_img.png" alt />
      <p>暂无搜索结果，换个词试试？</p>
    </div>
    <p v-if="searchList.length>0">没有更多</p>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  props: {
    value: {
      type: String
    }
  },
  computed: {
    ...mapState('search', ['searchList'])
  },
  methods: {
    ...mapActions('search', ['getSearchList'])
  },
  watch: {
    value() {
      this.getSearchList({
        searchValue: this.value
      })
    }
  },
  created() {
    console.log(this.searchList)
  }
}
</script>
<style scoped lang="scss">
.searchItem {
  padding: 13px;
  font-size: 14px;
  color: #333333;
  ul {
    padding-top: 6px;
    display: flex;
    line-height: 1.5;
    .img {
      width: 132px;
      height: 82px;
      padding-right: 20px;
      img {
        width: 132px;
        height: 100%;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 6px;
      p {
        width: 44px;
        font-size: 12px;
        color: #fdbb41;
        background: rgba(253, 187, 65, 0.1);
        text-align: center;
        border-radius: 4px;
      }
    }
  }
  .noSearch {
    color: #666666;
    font-size: 12px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    img {
      width: 110px;
      height: 85px;
    }
  }
}
</style>
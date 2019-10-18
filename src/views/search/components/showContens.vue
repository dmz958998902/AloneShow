<template>
  <div class="searchItem" ref="box">
    <div>
      <ul v-for="(item,index) in searchList" :key="index">
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
      <p v-if="searchList.length>0" class="nomore">没有更多</p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import BScroll from 'better-scroll'
import axios from 'axios'
export default {
  data() {
    return {
      pageNum: 1
    }
  },
  props: {
    value: {
      type: String
    }
    // title: {
    //   type: String,
    //   required: true
    // },
    // city: {
    //   type: String,
    //   required: true
    // }
  },
  computed: {
    ...mapState('search', ['searchList'])
  },
  methods: {
    ...mapActions('search', ['getSearchList'])
  },
  watch: {
    value: {
      handler(newal) {
        this.getSearchList({
          searchValue: this.value,
          pageNum: this.pageNum
        })
      },
      immediate: true,
      deep: true
    }
  },
  created() {},
  mounted() {
    let scroll = new BScroll(this.$refs.box, {
      pullUpLoad: true, // 只有是true的时候pullingUp才在某个时机触发
      click: true,
      probeType: 3
    })
    scroll.on('pullingUp', () => {
      this.pageNum++
      console.log(this.pageNum)
      this.getSearchList({
        searchValue: this.value,
        pageNum: this.pageNum,
        //当数据加载完后，重新加载
        callback: () => {
          scroll.finishPullUp()
        }
      })
    })
  }
}
</script>
<style scoped lang="scss">
.searchItem {
  padding: 13px;
  font-size: 14px;
  color: #333333;
  height: 600px;
  overflow: hidden;
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
  .nomore {
    text-align: center;
    height: 30px;
    line-height: 30px;
  }
}
</style>

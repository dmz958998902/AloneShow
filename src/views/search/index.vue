<template>
  <div class="page-search">
    <div class="search-bar">
      <div class="back">
        <i class="iconfont icon-xiangzuo" @click="goback"></i>
      </div>
      <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round">
        <div slot="action" class="search">搜索</div>
      </van-search>
    </div>
    <div class="gap"></div>
    <div class="kind">
      <ul>
        <li>
          全部类别
          <img
            src="https://m.mydeershow.com/img_s_xaila.png"
            alt
            @click="fn1()"
            :class="{'active':onclick1}"
          />
        </li>
        <li>
          全国
          <img
            src="https://m.mydeershow.com/img_s_xaila.png"
            alt
            @click="fn2()"
            :class="{'active':onclick2}"
          />
        </li>
      </ul>
    </div>
    <div class="gap"></div>
    <div class="nomore" v-if="isShow">没有更多</div>
    <div class="mask">
      <CityList v-if="onclick2"></CityList>
      <Classrify :list="searchBar" v-if="onclick1"></Classrify>
    </div>
  </div>
</template>
<script>
import Classrify from './components/classrify'
import CityList from '../../components/citylist'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    CityList,
    Classrify
  },
  data() {
    return {
      value: '',
      isShow: false,
      onclick1: false,
      onclick2: false,
      curType: 'classrify' //设置点击的是当前点击的是全部分类还是城市，默认的是全部分类
    }
  },
  computed: {
    ...mapState('search', ['searchBar'])
  },
  methods: {
    ...mapActions('search', ['getSearchBar']),
    // 点击向左返回
    goback() {
      this.$router.back()
    },
    clickItem() {
      console.log(this.$refs.box)
    },
    fn1() {
      this.onclick1 = !this.onclick1
      this.onclick2 = false
    },
    fn2() {
      this.onclick2 = !this.onclick2
      this.onclick1 = false
    }
  },
  created() {
    this.clickItem(), this.getSearchBar()
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/common/mixins.scss';
.page-search {
  color: #666666;
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
  .gap {
    height: 2px;
    background: transparent;
  }
  .kind {
    ul {
      display: flex;
      font-size: 14px;
      padding-left: 20px;
      @include border-bottom;
      height: 45px;
      line-height: 45px;
      li:nth-child(1) {
        margin-right: 20px;
      }
      li {
        img {
          height: 5px;
          width: 7px;
        }
        .active {
          transform: rotate(180deg);
          transition: all 0.5s;
        }
      }
    }
  }
  .nomore {
    text-align: center;
  }
}
</style>

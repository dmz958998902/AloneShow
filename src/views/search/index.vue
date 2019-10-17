<template>
  <div class="page-search">
    <div class="search-bar">
      <div class="back">
        <i class="iconfont icon-xiangzuo" @click="goback"></i>
      </div>
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @blur="show"
        @search="setVal"
      >
        <div slot="action" class="search">搜索</div>
      </van-search>
    </div>
    <div class="gap"></div>
    <!-- 全部类别和城市 -->
    <div class="kind">
      <ul>
        <li @changeKind="changeItem($event)">
          {{title}}
          <img
            src="https://m.mydeershow.com/img_s_xaila.png"
            alt
            @click="fn1()"
            :class="{'active':onclick1}"
          />
        </li>
        <li>
          城市
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
    <!-- 搜索记录 -->
    <div class="recode" v-if="isShow">
      <h4>搜索记录</h4>
      <ul v-if="showRecode">
        <li v-for="(item,index) in recodes" :key="index">
          <img src="https://m.mydeershow.com/img_bjxq_shijian.png" alt />
          <span>{{item}}</span>
        </li>
      </ul>
      <p>
        <img src="https://m.mydeershow.com/icon_search%20activity_delete.png" alt @click="del" />
        <span @click="del">清空搜索记录</span>
      </p>
    </div>
    <!-- 搜索结果展示 -->
    <ShowContens v-if="showContens" :value="value"></ShowContens>
    <div class="mask">
      <!-- 全部类别组件 -->
      <CityList v-if="onclick2"></CityList>
      <!-- 城市组件 -->
      <Classrify :list="searchBar" v-if="onclick1"></Classrify>
    </div>
  </div>
</template>
<script>
import Classrify from './components/classrify'
import CityList from '../../components/citylist'
import ShowContens from './components/showContens'

import { mapActions, mapState } from 'vuex'
export default {
  components: {
    CityList,
    Classrify,
    ShowContens
  },
  data() {
    return {
      title: '全部类别',
      value: '',
      isShow: true,
      onclick1: false,
      onclick2: false,
      curType: 'classrify', // 设置点击的是当前点击的是全部分类还是城市，默认的是全部分类
      recodeList: [], //存入localstorage的记录
      recodes: [], //得到localstorage中的记录
      showContens: false, //是否展示搜索结果的值，默认是不显示的
      showRecode: true
    }
  },
  computed: {
    ...mapState('search', ['searchBar'])
  },
  methods: {
    ...mapActions('search', ['getSearchBar']),
    ...mapActions('search', ['getSearchList']),
    // 点击向左返回
    goback() {
      this.$router.back()
    },
    clickItem() {
      console.log(this.$refs.box)
    },
    // 全部分类和城市的显示和隐藏
    fn1() {
      this.onclick1 = !this.onclick1
      this.onclick2 = false
    },
    fn2() {
      this.onclick2 = !this.onclick2
      this.onclick1 = false
    },
    // 确定搜索时触发，设置搜索的值
    setVal() {
      // 显示搜索内容结果
      this.showContens = true
      this.showRecode = false
      let obj = { value: this.value }
      this.recodeList.push(obj)
      window.localStorage.setItem('recodeInfo', JSON.stringify(this.recodeList))
    },
    //失去焦点时显示内容结果
    show() {
      this.isShow = false
    },
    // 得到搜索的值,
    getVal() {
      this.showRecode = true
      let brr = window.localStorage.getItem('recodeInfo')
      if (brr) {
        let arr = JSON.parse(brr)
        this.recodes = arr.map(item => item.value)
      }
      console.log(this.recodes)
    },
    //清除搜索记录
    del() {
      window.localStorage.setItem('recodeInfo', '')
      this.recodes = []
      this.isShow = true
    },
    // 得到子组件传递过来的值，改变全部分类
    changeItem(e) {
      this.title = e
      console.log(this.title)
    }
  },
  // 监听输入的值是否有变化，判断搜索记录是否显示
  watch: {
    value() {
      this.showRecode = true
      this.getVal()
      this.isShow = true
    }
  },
  created() {
    this.clickItem(), this.getSearchBar()
    this.getVal()
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/styles/common/mixins.scss';
.page-search {
  font-size: 12px;
  position: relative;
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
    background: #f6f8f8;
  }
  .kind {
    ul {
      color: #666666;
      display: flex;
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
  .recode {
    padding-left: 18px;
    color: #333333;
    h4 {
      height: 25px;
      font-weight: bold;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    ul {
      li {
        height: 40px;
        line-height: 40px;
        @include border-bottom;
        img {
          height: 16px;
          width: 16px;
          position: absolute;
          top: 13px;
          left: 0;
        }
        span {
          margin-left: 20px;
        }
      }
    }
    p {
      height: 30px;
      text-align: center;
      line-height: 30px;
      position: relative;
      img {
        height: 14px;
        width: 14px;
        vertical-align: middle;
        position: absolute;
        top: 10px;
      }
      span {
        color: #e72e62;
        padding-left: 20px;
      }
    }
  }
  .nomore {
    text-align: center;
  }
  .showContens {
  }
  .mask {
    z-index: 1000;
    position: absolute;
    left: 0;
    top: 93px;
    background: white;
    width: 100%;
  }
}
</style>

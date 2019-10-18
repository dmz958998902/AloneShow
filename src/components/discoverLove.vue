<template>
  <div>
    <div class="dis_love" ref="box">
      <div class="dis_scroll" scroll="true">
        <div>
          <ul class="dis_love_spot" style="padding:0px 14px;border-top: 5px solid #f0f0f0">
            <li v-for="(love,index) in discoverLoveList" :key="index">
              <div class="dis_love_user">
                <div class="dis_love_userImg">
                  <img :src=" love.headimgurl" alt style="width:29px;height:29px" />
                  <div class="dis_love_username">
                    <p class="dis_love_li_name">
                      <span class="dis_love_li_yh">{{ love.nickname }}</span>
                      <i class="iconfont" :class="{'active': love.sex  === '2'}" id="man">&#xe606;</i>
                      <i class="iconfont" :class="{'active': love.sex ==='1'}" id="woman">&#xe605;</i>
                    </p>
                    <p class="dis_love_li_time">{{love.create_time | formatDate}}</p>
                  </div>
                </div>
              </div>
              <div class="dis_love_title">{{ love.describes }}</div>
              <div class="dis_love_clear">
                <span class="browse_num">
                  <i class="iconfont">&#xe619;</i>
                  <span class="browse_num_ll">{{ love.likecount }}</span>
                </span>
                <span class="fabulous_num">
                  <i class="iconfont">&#xe73c;</i>
                  <span class="fabulous_num_ll">{{ love.likescount }}</span>
                </span>
                <span class="comment_num">
                  <i class="iconfont">&#xe60b;</i>
                  <span class="comment_num_ll">{{ love.commentcount }}</span>
                </span>
                <span class="dis_love_clear_read">阅读全文</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import formatDate from '../assets/js/publicTime'
import { mapState, mapActions } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'discoverLove',
  data() {
    return {
      curPage: 1
    }
  },
  computed: {
    ...mapState('discover', ['discoverLoveList'])
  },
  filters: {
    formatDate(time) {
      var date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd')
    }
  },
  methods: {
    ...mapActions('discover', ['getDiscoverLoveList'])
  },
  mounted() {
    let bs = new BScroll(this.$refs.box, {
      probeType: 3,
      pullUpLoad: true
    })
    //  console.log(bs)
    bs.on('scroll', data => {
      // console.log(data)
    })
    bs.on('pullingUp', () => {
      // 判断是否还有下一页

      let totalPage = Math.ceil(this.total_row / 10) // 总的页数
      if (this.curPage >= totalPage) {
        bs.finishPullUp()
        return
      }
      // 对curPage做++
      this.curPage++

      // 重新发送ajax请求
      this.getDiscoverLoveList({
        pageNum: this.curPage,
        callback: () => {
          bs.finishPullUp()
        }
      })
    })
  },
  created() {
    this.getDiscoverLoveList({
      pageNum: this.curPage
    })
  }
}
</script>
<style lang="scss">
.dis_love {
  height: 446px;
  border: none;
  .dis_scroll {
    // height: 100%;
    overflow: hidden;
    li {
      padding: 8px 0px;
      border-bottom: 1px solid #ddd;
      .dis_love_userImg {
        // float:left;
        display: flex;
        img {
          width: 100%;
          height: 100%;
          display: block;
          border-radius: 50%;
          object-fit: cover;
        }
        .dis_love_username {
          // float: left;
          display: flex;
          flex-direction: column;
          padding-left: 5px;
          .dis_love_li_name {
            height: 12px;
            line-height: 12px;
            font-size: 14px;
            color: #333;
            font-weight: 700;
            .dis_love_li_yh {
              font-size: 12px;
            }
            .iconfont {
              margin: 2px 0 0 5px;
            }
            .active {
              display: none;
            }
            #man {
              color: #6ab2ef;
            }
            #woman {
              color: #ef9dc7;
            }
          }
          .dis_love_li_time {
            padding-top: 7px;
            font-size: 10px;
            line-height: 10px;
            color: #999;
          }
        }
      }
      .dis_love_title {
        font-size: 12px;
        line-height: 16px;
        margin: 10px 0;
        max-height: 16px;
        overflow: hidden;
      }
      .dis_love_clear {
        width: 100%;
        .browse_num {
          font-size: 14px;
          .iconfont {
            display: inline-block;
            width: 17px;
            height: 17px;
            margin: 2px 0 0;
            font-size: 14px;
          }
          .browse_num_ll {
            line-height: 12px;
            margin-left: 4px;
          }
        }
        .fabulous_num {
          font-size: 14px;
          margin: 0 4px;
          .iconfont {
            display: inline-block;
            width: 17px;
            height: 17px;
            margin: 4px 0 0 6px;
            font-size: 14px;
          }
          .fabulous_num_ll {
            line-height: 12px;
            margin-left: 2px;
          }
        }
        .comment_num {
          font-size: 14px;
          margin: 0 4px;
          .iconfont {
            display: inline-block;
            width: 17px;
            height: 17px;
            margin: 4px 0 0 6px;
            font-size: 14px;
          }
          .comment_num_ll {
            line-height: 12px;
            margin-left: 2px;
          }
        }
        .dis_love_clear_read {
          display: block;
          float: right;
          width: 47px;
          height: 15px;
          text-align: center;
          margin: 2px 0px 0px;
          line-height: 15px;
          color: #fc0f4a;
          background: #f4e1e6;
          border-radius: 7px;
          font-size: 10px;
        }
      }
    }
  }
}
</style>

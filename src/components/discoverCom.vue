<template>
  <div class="com" ref="box">
    <div>
      <ul>
        <li v-for="(dis,index) in discoverList" :key="index"  @click="selectItem(dis)">
          <div class="content_item">
            <div class="dis_userInfo">
              <div class="dis_userCon">
                <a href="#">
                  <div class="dis_userimg">
                    <img :src="dis.headimgurl" />
                  </div>
                </a>
                <div class="dis_username">{{ dis.nickname }}</div>
              </div>
            </div>
            <div class="ids_article">
              <div style="position:relative">
                <div
                  class="article_img"
                  data-src="#"
                  :style="`background-image: url(${dis.thumb});`"
                ></div>
                <div class="img_shadow">
                  <div class="img_shadow_zzc"></div>
                  <div class="img_shadow_con">
                    <span>
                      <div>{{dis.create_time | formatDate}}</div>
                    </span>
                  </div>
                </div>
              </div>
              <div class="article_text">
                <div class="article_bot">
                  <span>REPO</span>
                  {{ dis.name }}
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import formatDate from '../assets/js/publicTime'
import { mapState, mapActions } from 'vuex'
import BScroll from 'better-scroll'
export default {
  namespaced: true,
  name: 'discoverCom',
  data() {
    return {
      curPage: 1
    }
  },
  computed: {
    ...mapState('discover', ['discoverList'])
  },
  filters: {
    formatDate(time) {
      var date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  },
  methods: {
    ...mapActions('discover', ['getDiscoverList']),
    selectItem(dis){
      this.$router.push({
        path:`/discoverinfo/${dis.id}`,
      })
      }
  },
  mounted() {
    let bs = new BScroll(this.$refs.box, {
      probeType: 3,
      click: true,
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
      this.getDiscoverList({
        pageNum: this.curPage,

        callback: () => {
          bs.finishPullUp()
        }
      })
    })
  },
  created() {
    this.getDiscoverList({
      pageNum: this.curPage
    })
  }
}
</script>
<style lang="scss" scope>
.com {
  height: 50px;
  width: 100%;
  position: relative;
  ul {
    // height: 100%;
    display: flex;
    flex-direction: column;
    li {
      border-top: 5px solid #f0f0f0;
      .content_item {
        width: 100%;
        height: 250px;
        // background: #f0f0f0;
        .dis_userInfo {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          padding: 8px 13px;
          .dis_userCon {
            display: flex;
            width: 90px;
            align-items: center;
            .dis_username {
              line-height: 18px;
              width: 100%;
              margin-left: 6px;
              font-size: 12px !important;
              color: #333;
              font-weight: 700;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .dis_userimg img {
              width: 23px;
              height: 23px;
              border-radius: 50%;
            }
          }
        }
        .ids_article {
          height: 210px;
          padding: 0 13px;
          .article_img {
            width: 100%;
            height: 170px;
            object-fit: cover;
            background-size: cover;
            border-radius: 10px;
          }
          .img_shadow {
            position: absolute;
            bottom: 0;
            color: #fff;
            .img_shadow_zzc {
              width: 295px;
              height: 21px;
              background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.4),
                hsla(0, 0%, 100%, 0)
              );
              border-radius: 8px;
            }
            .img_shadow_con {
              width: 295px;
              height: 21px;
              font-size: 12px;
              padding: 0 8px;
              bottom: 0;
              position: absolute;
            }
          }
          .article_text {
            text-align: left;
            padding: 10px 0 13px;
            line-height: 15px;
            border-radius: 8px;
            color: #383a3b;
            box-sizing: border-box;
            .article_bot {
              font-weight: bold;
              font-size: 12px;
              display: flex;
              align-items: center;
              span {
                display: inline-block;
                vertical-align: middle;
                color: #fe104c;
                font-size: 8px;
                padding: 0 5px;
                line-height: 14px;
                margin-right: 8px;
                height: 14px;
                border: 1px solid #fe104c;
                border-radius: 3px;
              }
            }
          }
        }
      }
    }
  }
  &.fixed {
    position: fixed;
    top: 0;
  }
}
</style>

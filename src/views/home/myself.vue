<!-- 二级路由 个人中心页面 -->
<template>
  <div class="myself_lw">
    <!-- <h1>个人中心-页面</h1> -->
    <div class="navtitle">
      <h3>个人中心</h3>
      <i class="iconfont icon-shezhi"></i>
    </div>
    <div class="myself_top">
      <div class="personal">
        <div class="myself_photo">
          <a href>
            <img src="../../../public/images/headInit.png" alt />
          </a>
        </div>
        <div class="myself_name">
          <p>
            <a href>
              <span class="uname">蔡徐坤的爸爸</span>
              <i class="iconfont icon-nan"></i>
              <!-- <i class="iconfont icon-nv"></i> -->
            </a>
          </p>
          <a href class="vip">
            <img src="../../../public/images/vip.png" alt />
          </a>
        </div>
        <div class="myself_traffic">
          <p>
            <a href>个人主页</a>
            <img src="../../../public/images/icon_more.png" alt />
          </p>
        </div>
      </div>
      <!-- 关注 粉丝 编辑资料 -->
      <div class="personal_list">
        <p>
          <em>0</em>
          <span></span>
          <a href>关注</a>
        </p>
        <p>
          <em>0</em>
          <span></span>
          <a href>粉丝</a>
        </p>
        <p>
          <em class="iconfont icon-bianji-01"></em>
          <a href>编辑资料</a>
        </p>
      </div>
      <!-- 发起约吧 -->
      <div class="yue">
        <div class="my_yue">我的约</div>
        <div class="fast">
          <a href>目前没有约哦~立即发起</a>
          <i class="iconfont icon-icon--"></i>
        </div>
      </div>
      <!-- 消息 商城 礼物 钱包 -->
      <div class="my_all">
        <div class="news">
          <i class="iconfont icon-icon-xiaoxi"></i>
          <em>0</em>
          <p>消息</p>
        </div>
        <div class="store">
          <i class="iconfont icon-shouye1"></i>
          <p>精品商城</p>
        </div>
        <div class="gift">
          <i class="iconfont icon-liwu"></i>
          <p>礼物</p>
        </div>
        <div class="wallet">
          <i class="iconfont icon-qianbao"></i>
          <p>钱包</p>
        </div>
      </div>
      <!-- 我的约 谁看过我 商城订单 ... -->
      <div class="aboutMyself">
        <ul>
          <li>
            <a href>
              <i class="iconfont icon-aiqingyuehui"></i>
              <span>我的约</span>
              <b class="iconfont icon-icon--"></b>
            </a>
          </li>
          <li>
            <a href>
              <i class="iconfont icon-xiaoyanjing"></i>
              <span>谁看过我</span>
              <b class="iconfont icon-icon--"></b>
            </a>
          </li>
          <li>
            <a href>
              <i class="iconfont icon-weibiaoti-1"></i>
              <span>商城订单</span>
              <b class="iconfont icon-icon--"></b>
            </a>
          </li>
          <li>
            <a href>
              <i class="iconfont icon-youhuiquan"></i>
              <span>我的票夹</span>
              <b class="iconfont icon-icon--"></b>
            </a>
          </li>
          <li>
            <a href>
              <i class="iconfont icon-icon-test1"></i>
              <span>我的券包</span>
              <b class="iconfont icon-icon--"></b>
            </a>
          </li>
          <li>
            <a href>
              <i class="iconfont icon-yijian"></i>
              <span>我的REPO</span>
              <b class="iconfont icon-icon--"></b>
            </a>
          </li>
          <li>
            <a href>
              <i class="iconfont icon-shoucang"></i>
              <span>我的收藏</span>
              <b class="iconfont icon-icon--"></b>
            </a>
          </li>
          <li>
            <a href>
              <i class="iconfont icon-weibiaoti-"></i>
              <span>我的评论</span>
              <b class="iconfont icon-icon--"></b>
            </a>
          </li>
          <li>
            <router-link to="/address_list">
              <i class="iconfont icon-weizhi"></i>
              <span>地址管理</span>
              <b class="iconfont icon-icon--"></b>
            </router-link>
          </li>
          <li>
            <a href>
              <i class="iconfont icon-lianxi"></i>
              <span>联系我们</span>
              <b class="iconfont icon-icon--"></b>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.myself_lw {
  height: 500px;
  overflow-y: auto;
  .navtitle {
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    display: flex;
    height: 42px;
    padding: 0 12px 0 40px;
    align-items: center;
    width: 320px;
    z-index: 10;
    h3 {
      text-align: center;
      flex: 3;
      font-weight: 600;
      color: #333;
      font-size: 14px;
    }
    i {
      flex: 1;
      font-size: 22px;
    }
  }
  .myself_top {
    margin-top: 42px;
    .personal {
      padding: 0px 13px 0 20px;
      height: 50px;
      display: flex;
      justify-content: flex-start;
      margin-top: 5px;
      .myself_photo {
        width: 39.5px;
        img {
          // margin-top: 5px;
          width: 100%;
          border-radius: 50%;
        }
      }
      .myself_name {
        margin: 4px 0 0 10px;
        a {
          text-decoration: none;
          i {
            color: pink;
            font-size: 16px;
            margin: 2px 0 0 8px;
          }
          .uname {
            font-size: 15px;
            color: #333;
            font-weight: 700;
          }
        }
        .vip {
          display: inline-block;
          width: 100px;
          height: 12.8px;
          margin: 4.2px 0 0 0;
          img {
            width: 42px;
            height: 12px;
          }
        }
      }
      .myself_traffic {
        flex: 1;
        p {
          margin-top: 15px;
          width: 54px;
          height: 19px;
          float: right;
          padding: 0 4.5px;
          border: 1px solid #ccc;
          border-radius: 10px;
          a {
            padding: 0 7.6px 0 0;
            text-align: center;
            font-size: 10px;
            text-decoration: none;
            color: #666;
          }
          img {
            width: 5.5px;
            height: 10px;
            position: relative;
            top: 1px;
          }
        }
      }
    }
    .personal_list {
      height: 42px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      p {
        flex: 1;
        height: 100%;
        a {
          font-size: 10px;
          text-decoration: none;
          display: block;
        }
        em {
          font-weight: normal;
          font-size: 12px;
          margin-left: 10px;
          height: 20px;
          display: inline-block;
        }
        span:after {
          content: '|';
          position: relative;
          top: 5px;
          left: 40px;
          padding-right: 5px;
          color: #d6d2d2;
        }
      }
    }
    .yue {
      height: 42px;
      background: url('../../../public/images/bgm.png') no-repeat;
      background-size: 100% 100%;
      position: relative;
      .my_yue {
        position: absolute;
        top: 22px;
        left: 22px;
        color: #fff;
        font-size: 14px;
      }
      .fast {
        position: absolute;
        top: 18px;
        right: 22px;
        a {
          color: #fff;
          font-size: 10px;
          text-decoration: none;
          padding-right: 4px;
        }
        i {
          font-size: 10px;
          color: #fff;
        }
      }
    }
    .my_all {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 57px;
      div {
        flex: 1;
        text-align: center;
        p {
          color: #333;
          font-size: 12px;
          padding: 0 0 4px;
        }
        i {
          display: block;
          margin: 8px 0px;
          color: #fe4c79;
          font-size: 22px;
        }
      }
      .news {
        position: relative;
        em {
          position: absolute;
          top: 8px;
          left: 54px;
          width: 18px;
          height: 18px;
          line-height: 18px;
          text-align: center;
          font-size: 12px;
          border-radius: 50%;
          background: #fe4c79;
          color: #fff;
        }
      }
    }
    .aboutMyself {
      ul {
        li {
          a {
            text-decoration: none;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-top: 4px solid #f4f4f4;
            padding: 12px;
            i {
              font-size: 16px;
              color: #9a9a9a;
              flex: 1;
            }
            span {
              color: #333;
              font-size: 12px;
              flex: 10;
            }
            b {
              color: #d2d2d2;
              font-size: 12px;
              flex: 1;
            }
          }
        }
      }
    }
  }
}
</style>

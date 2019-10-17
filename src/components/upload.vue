<template>
  <div class="yueh">
    <ul>
      <li v-for="person in personalYR" :key="person.user_id">
        <div class="girlimg">
          <img :src="person.thumb" alt />
        </div>
        <div class="head-right">
          <div class="title">{{person.title}}</div>
          <div class="remark">{{person.remark_name}}</div>
          <div class="data">截止日期:{{person.remark_plan_time}}</div>
          <div class="requir">
            <i>{{person.target_number}}人</i>
            <span>AA制{{person.buy_pattern}}</span>
            <p>仅限女{{person.choose_sex}}</p>
            <div class="look">
              <img src="https://m.mydeershow.com/list_icon_views.png" alt />
              <div class="looknum">{{person.likecount}}</div>
            </div>
          </div>
          <div class="headimg">
            <img :src="person.headimgurl" alt />
            <span>{{person.nickname}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Upload',
  props: {
    personalYR: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.yueh {
  ul {
    li {
      display: flex;
      padding: 10px 15px;
      .girlimg {
        img {
          width: 120px;
          height: 175px;
        }
      }
      .head-right {
        padding-left: 10px;
        .title {
          height: 30px;
          margin-top: 15px;
          font-size: 14px;
          font-family: '微软雅黑';
          color: #323232;
          font-weight: 800;
        }
        .remark {
          font-size: 12px;
          color: #666666;
          padding-bottom: 10px;
          width: 140px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .data {
          margin-bottom: 10px;
          color: #666666;
          font-size: 12px;
          width: 140px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .requir {
          display: flex;
          margin-bottom: 25px;
          i {
            font-size: 12px;
            color: #fe104c;
            border: 1px solid #fe104c;
            border-radius: 4px;
            padding: 1.5px;
          }
          span {
            color: #08b7ac;
            border: 1px solid#08b7ac;
            border-radius: 4px;
            margin: 0 8px;
            font-size: 12px;
            padding: 1.5px;
          }
          p {
            color: #fe104c;
            border: 1px solid#fe104c;
            border-radius: 4px;
            font-size: 12px;
            padding: 1.5px;
          }
          .look {
            display: flex;
            align-items: center;
            margin-left: 40px;
            img {
              width: 12px;
              height: 12px;
            }
            .looknum {
              font-size: 14px;
              color: #cccccc;
            }
          }
        }
        .headimg {
          display: flex;
          align-items: center;
          img {
            margin-right: 10px;
            width: 27px;
            height: 27px;
            border-radius: 50%;
          }
          span {
            font-size: 12px;
            color: #666666;
          }
        }
      }
    }
  }
}
</style>
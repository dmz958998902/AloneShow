<template>
  <div style="height:100%">
    <div class="showrecordmian">
      <div class="dhl">
        <ul class="dhl_ul" @select="movieDetail" >
          <li class="gohui" @click="onClickLeft">
            <span class="iconfont">&#xe647;</span>
          </li>
          <li class="dhl_username">
            <span>用户名</span>
          </li>
          <li class="dhl_gz" @click="onClickRight">
            <span>
              <div class="btntype">
                <span class="floow">+&nbsp;关注</span>
              </div>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import discovershow from '../../components/discoverShow'
import { Toast } from 'vant'
export default {
  components:{
      discovershow
  },
  methods: {
    onClickLeft() {
      Toast('返回')
      this.$router.back()
    },
    onClickRight() {
      Toast('关注成功')
    },
    movieDetail(show){
       console.log(`${show.id}`);
       this.$router.push({
         path: `/discoverinfo/${show.id}`
       })
     }
  }
}
</script>
<style lang="scss">
.showrecordmian {
  .dhl {
    height: 42px;
    width: 100%;
    line-height: 42px;
    display: flex;
    position: fixed;
    z-index: 6;
    padding: 0 13px;
    box-sizing: border-box;
    box-shadow: 0 2px 5px #ddd;
    .dhl_ul {
      width: 100%;
      display: flex;
      .gohui {
        flex: 2 1 0%;
        font-size: 14px;
      }
      .dhl_username {
        flex: 10;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
      }
      .dhl_gz {
        flex: 2 1 0%;
        font-size: 14px;
        align-items: center;
        .btntype {
          line-height: 42px;
          height: 42px;
          text-align: right;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          .floow {
            height: 22px;
            text-align: center;
            line-height: 22px;
            display: inline-block;
            width: 46px;
            color: #e72e62;
            font-weight: 600;
            font-size: 11px;
            border: 1px solid #e72e62;
            border-radius: 10px;
          }
        }
      }
    }
  }
}
</style>
<!-- 管理我的收货地址 一级路由 -->
<template>
  <div class="my_address">
    <address_nav
      title="我的收货地址"
      right-text="添加新地址"
      @rightEvent="changeRouter"
      @leftEvent="onleftSaves"
    ></address_nav>
    <ul>
      <li v-for="(item,index) in address_list" :key="index">
        <div class="content_list">
          <div class="content_user_Info">
            <div class="content_user">
              <span class="name">{{ item.name }}</span>
              <span class="user_default" v-if="item.is_default">默认</span>
              <span class="phone">{{ item.mobile }}</span>
            </div>
            <div
              class="content_address"
            >{{ item.province }}{{ item.city }}{{ item.district }}{{ item.address }}</div>
          </div>
          <div class="content_list_detail" @click="handleEdit(index)">编辑</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '../../../src/assets/styles/common/mixins.scss';
.my_address {
  height: 100%;
  background: #ebebeb;

  .content_list {
    box-sizing: border-box;
    position: relative;
    background: #fff;
    height: 63px;
    padding: 0 13px;
    @include border-bottom;
    .content_user_Info {
      box-sizing: border-box;
      padding: 12.8px;
      display: flex;
      height: 100%;
      flex-direction: column;
      .content_user {
        flex: 1;
        display: flex;
        align-items: center;
        .name {
          color: #333;
          font-size: 12px;
          font-weight: 600;
        }
        .user_default {
          display: inline-block;
          width: 24px;
          height: 12px;
          border: 1px solid #fe104c;
          text-align: center;
          line-height: 12px;
          border-radius: 3px;
          margin-left: 15px;
          color: #fe104c;
          font-size: 10px;
        }
        .phone {
          margin-left: 15px;
          color: #666;
          font-size: 11px;
        }
      }
      .content_address {
        display: flex;
        align-items: center;
        flex: 1;
        font-size: 11px;
        color: #666;
      }
    }

    .content_list_detail {
      position: absolute;
      right: 12px;
      top: 20px;
      float: right;
      width: 35px;
      height: 20px;
      border-radius: 10px;
      font-size: 9.6px;
      color: #fff;
      text-align: center;
      line-height: 20px;
      background: linear-gradient(90deg, #fe104c, #ff83a2);
    }
  }
}
</style>

<script>
import address_nav from '../../components/address_nav'
import axios from 'axios'
export default {
  name: 'address_list',
  components: {
    address_nav
  },
  data() {
    return {
      address_list: [],
      curUrl: ''
    }
  },
  methods: {
    changeRouter() {
      this.$router.push('/address_edit')
    },
    //请求加载页面的数据
    getAddressList() {
      axios
        .get(
          'https://api.mydeershow.com/mobile/app/address/retrieve?source=mobile&cityName=%E5%85%A8%E5%9B%BD&citySituationName=%E5%85%A8%E5%9B%BD&encrypt=dEZQUjE1NzExOTc3NzQ4MTAyU1hPdg%3D%3D&citySituationId=-1&accessToken=2A774543C0CD09F9B8A10D70A1A748B0&vno=3.2.3'
        )
        .then(response => {
          this.address_list = response.data.data
        })
    },
    onleftSaves() {
      this.$router.push('myself')
    },
    handleEdit(index) {
      // 点击携带参数过去编辑页面
      this.$router.push({
        path: 'address_edit',
        query: this.address_list[index]
      })
    }
  },
  created() {
    this.getAddressList()
    console.log()
  }
}
</script>

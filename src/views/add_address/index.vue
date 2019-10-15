<!-- 管理我的收货地址 一级路由 -->
<template>
  <div class="my_address">
    <address_nav title="我的收货地址" right-text="添加新地址"></address_nav>
    <ul>
      <li>
        <div class="content_list">
          <div class="content_user_Info">
            <div class="content_user">
              <span class="name">xx</span>
              <span class="user_default">默认</span>
              <span class="phone">158555555</span>
            </div>
            <div class="content_address">上海市上海市黄浦区xxxxxx吸血书</div>
          </div>
          <div class="content_list_detail">编辑</div>
        </div>
      </li>
      <li>
        <div class="content_list">
          <div class="content_user_Info">
            <div class="content_user">
              <span class="name">xx</span>
              <span class="user_default">默认</span>
              <span class="phone">158555555</span>
            </div>
            <div class="content_address">上海市上海市黄浦区xxxxxx吸血书</div>
          </div>
          <div class="content_list_detail">编辑</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
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
export default {
  name: 'address_list',
  components: {
    address_nav
  }
}
</script>
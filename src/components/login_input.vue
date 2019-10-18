<!-- 登录注册页面的输入框 -->
<template>
  <div class="step">
    <input type="text" placeholder="输入11位手机号码" @blur="input1(iptval1)" v-model="iptval1" />
    <span v-show="isshowspanone">请输入正确的手机号</span>
    <input type="password" placeholder="输入密码" @blur="input2(iptval2)" v-model="iptval2" />
    <div class="pwd" v-show="isshowpwd">
      <i class="iconfont icon-yanjing1"></i>
    </div>
    <span v-show="isshowspantwo">用户名或密码不正确</span>
    <a href class="lostpwd" v-show="isshowa">
      忘记密码
      <i></i>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iptval1: '',
      iptval2: ''
    }
  },
  props: {
    isshowpwd: {
      type: Boolean,
      default: false
    },
    isshowspanone: {
      type: Boolean,
      default: false
    },
    isshowspantwo: {
      type: Boolean,
      default: false
    },
    isshowa: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 账号框失去焦点触发事件
    input1 (val1) {
      // console.log(this.iptval)
      this.$emit('inputuname', val1)
    },
    // 密码框失去焦点触发事件
    input2 (val2) {
      this.$emit('inputpwd', val2)
    }
  }
}
</script>

<style lang="scss">
.step {
  box-sizing: border-box;
  height: 135px;
  padding-top: 98px;
  input {
    width: 275px;
    height: 37px;
    margin: 0 22px;
    padding: 1px 0;
    border: none;
    border-bottom: 1px solid #d8d8d8;
    font-size: 14px;
  }
  span {
    margin: 2px 22px;
    color: #ff0505;
    font-size: 12px;
    display: block;
  }
  .pwd {
    position: relative;
    i {
      position: absolute;
      right: 30px;
      top: -25px;
      font-size: 24px;
      color: #666;
    }
  }
  .lostpwd {
    display: flex;
    justify-content: flex-end;
    padding: 10px 25px 0 0;
    font-size: 12px;
    color: #666;
  }
}
</style>

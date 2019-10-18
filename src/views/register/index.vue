<template>
  <div class="my_register">
    <!-- 一级路由 注册页面 -->

    <login_nav @back="back"></login_nav>

    <login_title hcontent="手机号登录注册" pcontent="未注册手机号验证后自动注册"></login_title>

    <login_input @inputuname="checkname" :isshowspanone="isshowspanone" @inputpwd="checkpwd"></login_input>

    <div>
      <login_btn content="点击注册" :colors="colorss" @changerouter="toreg"></login_btn>
    </div>
    <p class="changelogin" @click="goLogin">账号密码登录</p>
    <div class="agreement">
      <p>
        注册或登录表示您已经同意
        <a href>《独角秀用户协议》</a>和
        <a href>《隐私权专项条款》</a>
      </p>
    </div>
  </div>
</template>
<script >
import login_nav from '../../components/login_nav'
import login_title from '../../components/login_title'
import login_btn from '../../components/login_btn'
import login_input from '../../components/login_input'
import axios from 'axios'
export default {
  data () {
    return {
      // isshowpwd: false,
      isshowspanone: false,
      colorss: 'a2',
      isClick: false,
      nameVal: '',
      pwdVal: ''
    }
  },
  components: {
    login_nav,
    login_btn,
    login_title,
    login_input
  },
  methods: {
    back () {
      let url = this.$route.query.redirect
      this.$router.push({
        path: '/login',
        query: {
          redirect: url
        }
      })
      // this.$router.push('/login')
    },
    goLogin () {
      // 在跳转的时候携带原来想要去的路径
      let url = this.$route.query.redirect
      this.$router.push({
        path: '/login/password',
        query: {
          redirect: url
        }
      })
    },
    // 判断用户名
    checkname (val) {
      this.nameVal = val
      let reg = /^1[3456789]\d{9}$/
      // 拿到传递来的input框的值，判断值的长度，等于11 触发这个事件
      if (val.length === 11 && reg.test(val)) {
        this.isshowspanone = false
        this.isClick = true
        this.colorss = 'a1'
      } else {
        this.colorss = 'a2'
        this.isshowspanone = true
      }
    },
    // 判断密码
    checkpwd (val2) {
      this.pwdVal = val2
    },
    toreg () {
      // 如果按钮亮了 那么发送注册的请求
      if (this.colorss == 'a1' && this.pwdVal.length > 5) {
        // 往db.json发送注册的数据
        this.testUname(this.nameVal, this.pwdVal)
      } else if (this.colorss == 'a1' && this.pwdVal.length <= 5) {
        alert('密码长度最低6位！')
      }
    },
    // 发送注册的请求
    toRegister (uname, pwd) {
      let token = new Date().getTime()
      axios
        .post('http://localhost:3000/user', {
          uname: uname,
          pwd: pwd,
          token: token
        })
        .then(response => {
          if (response.status == '201' && response.statusText == 'Created') {
            alert('注册成功！')
          }
          console.log(response)
        })
    },
    // 发送注册请求之前的测试操作
    testUname (uname, pwd) {
      // 在发送注册请求之前先发送获取数据请求，看看数据库是否存在相同的账号，相同就提示用户已被注册，并且终止本次操作
      axios
        .get('http://localhost:3000/user', {
          params: {
            uname: uname
          }
        })
        .then(response => {
          if (response.data.length > 0) {
            alert('用户已被注册，您可以点击下方登录按钮进行登录操作！')
          } else {
            // 如果不存在，那么发送注册请求
            this.toRegister(uname, pwd)
          }
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.my_register {
  width: 100%;
  .title_box {
    margin-top: 15px;
    width: 100%;
    height: 43px;
    padding: 0 20px;
    box-sizing: border-box;
    h1 {
      font-size: 22px;
      color: #333;
      font-weight: 900;
      margin-bottom: 4px;
    }
    p {
      font-size: 12px;
      color: #b3b3b3;
      padding-top: 4px;
    }
  }

  .changelogin {
    text-align: center;
    font-size: 12px;
    color: #333;
    font-weight: 700;
    margin-top: 160px;
  }
  .agreement {
    line-height: 16px;
    box-sizing: border-box;
    margin-top: 86px;
    font-size: 12px;
    color: #333;
    text-align: center;
    padding: 0 15px;
    a {
      color: #fc0f4a;
    }
  }
  .login_btn {
    z-index: 10;
    width: 256px;
    height: 52px;
    position: absolute;
    left: 33px;
    bottom: 200px;
  }
}
</style>

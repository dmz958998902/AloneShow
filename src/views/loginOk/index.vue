<!-- 登录页面 -->
<template>
  <div class="my_loginok">
    <!-- 一级路由 登录页面 -->
    <login_nav @back="back"></login_nav>

    <login_title hcontent="密码登录" pcontent="要确保和手机号一致哦"></login_title>

    <login_input
      :isshowpwd="isshowpwd"
      :isshowa="isshowa"
      @inputuname="checkname"
      :isshowspanone="isshowspanone"
      @inputpwd="checkpwd"
    ></login_input>

    <div>
      <login_btn content="登录" :colors="colorss" @changerouter="toreg"></login_btn>
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
  data() {
    return {
      isshowpwd: true, //显示密码框
      isshowa: true, //显示忘记密码
      colorss: 'a2', //改变登录按钮的背景色
      isshowspanone: false, //账号出错的时候提示用户账号错误
      nameVal: '', //用户账户
      pwdVal: '' //用户密码
    }
  },
  components: {
    login_nav,
    login_btn,
    login_title,
    login_input
  },
  methods: {
    back() {
      let url = this.$route.query.redirect
      this.$router.push({
        path: '/register',
        query: {
          redirect: url
        }
      })
    },
    //判断用户名是否合格
    checkname(val) {
      this.nameVal = val
      let reg = /^1[3456789]\d{9}$/
      //拿到传递来的input框的值，判断值的长度，等于11 触发这个事件
      if (val.length === 11 && reg.test(val)) {
        this.isshowspanone = false
        this.isClick = true
        this.colorss = 'a1'
      } else {
        this.colorss = 'a2'
        this.isshowspanone = true
      }
    },
    //判断密码
    checkpwd(val2) {
      this.pwdVal = val2
    },
    toreg() {
      //如果按钮亮了 那么发送注册的请求
      if (this.colorss == 'a1' && this.pwdVal.length > 5) {
        //往db.json发送注册的数据
        this.toLogins(this.nameVal, this.pwdVal)
      } else if (this.colorss == 'a1' && this.pwdVal.length <= 5) {
        alert('密码长度最低6位！')
      }
    },
    //登录设置cookie
    setCookie(cname, cvalue, exdays) {
      var d = new Date()
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
      var expires = 'expires=' + d.toUTCString()
      document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
    },
    //发送登录的请求
    toLogins(uname, pwd) {
      axios
        .get('http://localhost:3000/user', {
          params: {
            uname: uname
          }
        })
        .then(response => {
          if (response.data.length == 0) {
            alert('用户名不存在!')
            return
          } else {
            if (response.data[0].pwd === pwd) {
              //登录成功设置返回回来的token到cookie里面
              let token = response.data[0].token
              window.localStorage.setItem(
                'user_login',
                JSON.stringify({ token: token, uname: uname })
              )
              alert('登陆成功！')
              //登录成功过后重定向到用户想去的页面
              let willGo = this.$route.query.redirect || '/home'
              this.$router.replace(willGo)
              return
            } else {
              alert('密码错误！')
            }
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
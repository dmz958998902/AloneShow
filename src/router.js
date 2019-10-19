import Vue from 'vue'
import Router from 'vue-router'

// 引入一级路由组件
import Home from './views/home/index.vue'
// 引入二级路由
import Homes from './views/home/home.vue'
import Activity from './views/home/activity.vue'
import Discover from './views/home/discover.vue'
import Myself from './views/home/myself.vue'

// 引入一级路由
import City from './views/city/index.vue'
import FilmInfo from './views/filmInfo/index.vue'
import FilmList from './views/filmList/index.vue'
import Login from './views/login/index.vue'
// 引入二级登录的子路由
import Loginok from './views/loginOk/index.vue'

import Register from './views/register/index.vue'
import Search from './views/search/index.vue'
import EdirAddress from './views/edit_address/index.vue'
import AddAddress from './views/add_address/index.vue'

import ActivityDetail from './views/activity/activityDetail.vue'
// 引入三级路由
Vue.use(Router)

const router = new Router({
  routes: [
    // 主页路由配置
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'home',
          component: Homes
        },
        {
          path: 'activity',
          component: Activity
        },
        {
          path: 'activity/:id?',
          component: Activity
        },
        {
          path: 'discover',
          component: Discover
        },
        {
          path: 'myself',
          component: Myself,
          meta: {
            needIsLogin: true
          }
        },
        {
          path: '',
          redirect: 'home'
        }
      ]
    },
    // 城市路由配置
    {
      path: '/city',
      component: City
    },
    // 影片详情页路由配置
    {
      path: '/filmInfo/:id',
      component: FilmInfo
    },
    // 影片列表页路由配置
    {
      path: '/filmList',
      component: FilmList
    },
    // 登录页面路由配置
    {
      path: '/login',
      component: Login
      // children: [
      //   {
      //     path: 'password',
      //     component: Loginok
      //   }
      // ]
    },
    {
      path: '/login/password',
      component: Loginok
    },
    // 注册页路由配置
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    // 搜索页面路由配置
    {
      path: '/search',
      component: Search
    },
    // 新增地址页面路由配置
    {
      path: '/address_edit',
      component: EdirAddress
    },
    // 管理我的地址页面路由配置
    {
      path: '/activityDetail/:id',
      component: ActivityDetail
    }
  ]
})

// 登录拦截
router.beforeEach((to, from, next) => {
  let userInfo = window.localStorage.getItem('user_login')

  if (to.meta.needIsLogin && !userInfo) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  } else {
    next()
  }
})

export default router

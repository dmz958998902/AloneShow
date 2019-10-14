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
import Register from './views/register/index.vue'
import Search from './views/search/index.vue'
//引入三级路由
import Crazy from './components/crazy.vue'
import Live from './components/live.vue'
import Child from './components/child.vue'
import Aid from './components/aid.vue'

Vue.use(Router)

export default new Router({
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
          component: Activity,
          redirect: '/activity/0',
          children: [
            {
              path: '0',
              name: 'Live',
              component: Live
            },
            {
              path: '1',
              name: 'Crazy',
              component: Crazy
            },
            {
              path: '2',
              name: 'Child',
              component: Child
            },
            {
              path: '3',
              name: 'Aid',
              component: Aid
            }
          ]
        },
        {
          path: 'discover',
          component: Discover
        },
        {
          path: 'myself',
          component: Myself
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
      path: '/filmInfo',
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
    },
    // 注册页路由配置
    {
      path: '/register',
      component: Register
    },
    // 搜索页面路由配置
    {
      path: '/search',
      component: Search
    }
  ]
})

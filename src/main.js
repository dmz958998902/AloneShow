import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import { NavBar, Search, Toast, CountDown, IndexBar, IndexAnchor, Cell } from 'vant'
Vue.use(NavBar)
  .use(Search)
  .use(Toast)
  .use(CountDown)
  .use(IndexBar)
  .use(IndexAnchor)
  .use(Cell)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

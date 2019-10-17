import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import { NavBar, Search, Toast,Tab, Tabs } from 'vant'
Vue.use(NavBar)
  .use(Search)
  .use(Toast)
  .use(Tab)
  .use(Tabs)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

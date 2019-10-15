import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import {
  NavBar,
  Search,
  Toast,
  Swipe,
  SwipeItem,
  DropdownMenu,
  DropdownItem,
  AddressEdit,
  Area
} from 'vant'
Vue.use(NavBar)
  .use(Search)
  .use(Toast)
  .use(Swipe)
  .use(SwipeItem)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(AddressEdit)
  .use(Area)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

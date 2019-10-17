import Vue from 'vue'
import Vuex from 'vuex'
import CityModule from './modules/city'
import DiscoverModule from './modules/discover'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    city: CityModule,
    discover:DiscoverModule
  }
})
export default store

import Vue from 'vue'
import Vuex from 'vuex'
import CityModule from './modules/city'
import ActivityModul from './modules/activity'
import DiscoverModule from './modules/discover'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    city: CityModule,
    activity: ActivityModul,
    discover: DiscoverModule
  }
})
export default store

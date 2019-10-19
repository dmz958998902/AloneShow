import Vue from 'vue'
import Vuex from 'vuex'
import CityModule from './modules/city'
import ActivityModul from './modules/activity'
import DiscoverModule from './modules/discover'
import AddressModule from './modules/address'
import SearchModule from './modules/search'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    city: CityModule,
    activity: ActivityModul,
    discover: DiscoverModule,
    address: AddressModule,
    search: SearchModule
  }
})
export default store

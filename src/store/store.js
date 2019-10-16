import Vue from 'vue'
import Vuex from 'vuex'
import CityModule from './modules/city'
import AddressModule from './modules/address'
import SearchModule from './modules/search'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    city: CityModule,
    address: AddressModule,
    search: SearchModule
  }
})
export default store

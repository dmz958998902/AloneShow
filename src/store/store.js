import Vue from 'vue'
import Vuex from 'vuex'
import CityModule from './modules/city'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    city: CityModule
  }
})
export default store

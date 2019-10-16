import axios from 'axios'

export default {
  namespaced: true,
  state: {
    searchBar: []
  },
  getters: {},
  mutations: {
    setSearchBar(state, payload) {
      state.searchBar = payload
    }
  },
  actions: {
    getSearchBar({ commit }, payload) {
      axios
        .get(
          'https://api.mydeershow.com/mobile/app/activity/classifylist?source=mobile&cityName=%E5%85%A8%E5%9B%BD&citySituationName=%E5%85%A8%E5%9B%BD&encrypt=a3JNcTE1NzEyMTYxMDE1MzdFUmhCSA%3D%3D&citySituationId=&vno=3.2.3',
          {}
        )
        .then(response => {
          let result = response.data.data
          console.log(response.data.data)
          commit('setSearchBar', result)
        })
    }
  }
}

import axios from 'axios'

export default {
  namespaced: true,
  state: {
    searchBar: [],
    searchList: [],
    qunguo: '全国'
  },
  getters: {},
  mutations: {
    setSearchBar(state, payload) {
      state.searchBar = payload
    },
    setSearchList(state, payload) {
      state.searchList = payload
    }
  },
  actions: {
    // 得到搜索导航的信息
    getSearchBar({ commit }, payload) {
      axios
        .get(
          'https://api.mydeershow.com/mobile/app/activity/classifylist?source=mobile&cityName=%E5%85%A8%E5%9B%BD&citySituationName=%E5%85%A8%E5%9B%BD&encrypt=a3JNcTE1NzEyMTYxMDE1MzdFUmhCSA%3D%3D&citySituationId=&vno=3.2.3',
          {}
        )
        .then(response => {
          let result = response.data.data
          commit('setSearchBar', result)
        })
    },
    // 得到搜索结果的信息
    getSearchList({ commit, state }, payload) {
      axios
        .get('https://api.mydeershow.com/mobile/app/activity/searchActivity', {
          params: {
            source: 'mobile',
            cityName: '全国',
            citySituationName: '全国',
            encrypt: 'cThXODE1NzEyODMzNzQ0MTF3U2JmWQ==',
            citySituationId: '-1',
            vno: '3.2.3',
            searchValue: payload.searchValue,
            pageNum: payload.pageNum,
            pageSize: '10',
            activityState: '0',
            classifyType: '-1'
          }
        })
        .then(response => {
          let list = response.data.data
          commit('setSearchList', state.searchList.concat(list))
          payload.callback && payload.callback()
          console.log(list)
        })
    }
  }
}

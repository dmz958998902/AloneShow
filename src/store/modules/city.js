import axios from 'axios'
import { Toast } from 'vant'
export default {
  namespaced: true,
  state: {
    cities: []
  },
  getters: {
    cityList(state) {
      let res = []
      state.cities.forEach(item => {
        let py = item.sorts
        let index = res.findIndex(item => item.py === py)
        if (index > -1) {
          res[index].list.push(item)
        } else {
          let obj = {
            py: py,
            list: [item]
          }
          res.push(obj)
        }
      })
      return res.sort((a, b) => {
        return a.py.charCodeAt() - b.py.charCodeAt()
      })
    }
  },
  mutations: {
    setCities(state, payload) {
      state.cities = payload
    }
  },
  actions: {
    getCities({ commit }, payload) {
      Toast.loading({
        message: '加载中...'
      })
      axios
        .get(
          'https://api.mydeershow.com/mobile/app/city/list?source=mobile&cityName=%E4%B8%8A%E6%B5%B7&citySituationName=%E4%B8%8A%E6%B5%B7&encrypt=alZBNDE1NzEwNTgwOTUxNTdKeXFkdw%3D%3D&citySituationId=37&vno=3.2.3'
        )
        .then(response => {
          let result = response.data
          console.log(1)
          commit('setCities', result.data)
          Toast.clear()
        })
    }
  }
}

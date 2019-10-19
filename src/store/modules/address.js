import axios from 'axios'

export default {
  namespaced: true,
  state: {
    areaList: {}
  },
  getters: {},
  mutations: {
    fn1 (state, arr) {
      // 拿到全部数据
      let array1 = arr
      state.areaList = {
        province_list: {},
        city_list: {},
        county_list: {}
      }
      // 获取省数据
      array1.forEach(item => {
        state.areaList.province_list[item.provinceCode] = item.provinceName
        // 获取市数据
        item.mallCityList.forEach(items => {
          state.areaList.city_list[items.cityCode] = items.cityName
          // 获取县数据
          items.mallAreaList.forEach(itemss => {
            state.areaList.county_list[itemss.areaCode] = itemss.areaName
          })
        })
      })
    }
  },
  actions: {
    getCities ({ commit }, payload) {
      axios
        .get(
          'https://api.mydeershow.com/mobile/app/city/citylist?source=mobile&cityName=%E5%85%A8%E5%9B%BD&citySituationName=%E5%85%A8%E5%9B%BD&encrypt=amhDRDE1NzExMjIyNDc3OTh3YmZrdg%3D%3D&citySituationId=-1&accessToken=8C17D38E71423CCAAB0C91FA29F545D3&vno=3.2.3'
        )
        .then(response => {
          commit('fn1', response.data.data)
        })
    }
  }
}

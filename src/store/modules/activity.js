import axios from 'axios'
import { Toast } from 'vant'
export default {
  namespaced: true,
  state: {
    titleList: [], // 头部导航列表
    activityList: [],
    activityTotal: 1
  },
  getters: {

  },
  mutations: {
    setTitleList (state, payload) {
      state.titleList = payload
    },
    setactivityList (state, payload) {
      state.activityList = payload
    },
    setactivityTotal (state, payload) {
      state.activityTotal = payload
    }
  },
  actions: {
    getTitleList ({ commit, state }, payload) {
      axios.get('https://api.mydeershow.com/mobile/app/activity/classifylist',
        {
          params: {
            source: 'mobile',
            cityName: '% E5 % 85 % A8 % E5 % 9B % BD ',
            citySituationName: '% E5 % 85 % A8 % E5 % 9B % BD',
            encrypt: 'Q0l1ODE1NzExMjAyMTY1ODMxSVB0Yw % 3D % 3D ',
            citySituationId: -1,
            vno: '3.2.3'
          }
        }).then(response => {
        let result = response.data.data
        let arr = []
        result.forEach(item => {
          arr.push(item.remark)
        })
        if (response.status === 200) {
          commit('setTitleList', arr)
        }
        // console.log(arr)
      })
    },
    getactivityList ({ commit, state }, payload) {
      Toast.loading({
        mask: true,
        duration: 0, // 不让他自动消失
        message: '加载中...'
      })
      // console.log(payload)
        console.log(payload)
      axios.get('https://api.mydeershow.com/mobile/app/activity/activityList',
        {
          params: {
            source: 'mobile',
            cityName: '全国',
            citySituationName: '全国',
            encrypt: 'TU9lYzE1NzEyMDU4Njk4MjlIU053ZQ==',
            citySituationId: -1,
            vno: '3.2.3',
            pageNum: payload.pageNum,
            pageSize: 10,
            activityState: 3,
            classifyType: payload.classifyType
          }
        }).then(resp => {

        // console.log(resp.data.data)
        commit('setactivityList', state.activityList.concat(resp.data.data))
        // console.log(resp.data.data)
        commit('setactivityTotal', resp.data.total_row)
        payload.callback && payload.callback()
        Toast.clear()
      })
    }
  }
}

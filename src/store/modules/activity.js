import axios from 'axios'
export default {
  namespaced: true,
  state: {
    titleList: [], // 头部导航列表
    activityList: []
  },
  getters: {

  },
  mutations: {
    setTitleList (state, payload) {
      state.titleList = payload
    },
    setactivityList (state, payload) {
      state.activityList = payload
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
        // console.log(response.data.data)
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
      axios.get('https://api.mydeershow.com/mobile/app/activity/activityList',
        {
          params: {
            source: 'mobile',
            cityName: '% E5 % 85 % A8 % E5 % 9B % BD ',
            citySituationName: '% E5 % 85 % A8 % E5 % 9B % BD',
            encrypt: 'TU9lYzE1NzEyMDU4Njk4MjlIU053ZQ % 3D % 3D ',
            citySituationId: -1,
            vno: '3.2.3',
            pageNum: 1,
            pageSize: 10,
            activityState: 0,
            classifyType: 3
          }
        }).then(resp => {
        console.log(resp.data.data)
        let resu = resp.data.data
        // result.forEach(item => {
        //   arr.push(item.remark)
        // })
        // if (response.status === 200) {
          commit('setactivityList', resu)
        // }
        // console.log(resu)
      })
    }
  }
}

import axios from 'axios'
import {
  stat
} from 'fs'
import {
  Toast
} from 'vant'
export default {
  namespaced: true,

  state: {
    discoverList: [], // 全部数据列表
    discoverShowList: [], // 演出数据列表
    discoverMovList: [], // 电影页面
    discoverSpotList: [], // 景点页面
    discoverLoveList: [] // 爱的页面
  },
  getters: {

  },
  mutations: {
    setDiscoverList (state, payload) {
      // 全部数据
      state.discoverList = payload
      // console.log(payload)
    },
    setDiscoverShowList (state, payload) {
      // 演出数据
      state.discoverShowList = payload
      console.log(payload)
    },
    setDiscoverMovList (state, payload) {
      // 电影数据
      state.discoverMovList = payload
      console.log(payload)
    },
    setDiscoverSpotList (state, payload) {
      // 电影数据
      state.discoverSpotList = payload
      console.log(payload)
    },
    setDiscoverLoveList (state, payload) {
      state.discoverLoveList = payload
    }
  },
  actions: {
    getDiscoverList ({
      commit,
      state
    }, payload) {
      Toast.loading({
        mask: true,
        duration: 0,
        message: '加载中'
      })
      axios.get('https://api.mydeershow.com/mobile/app/dicsovery/homeRecommend', {
        params: {
          source: 'mobile',
          cityName: '%E5%85%A8%E5%9B%BD',
          citySituationName: '%E5%85%A8%E5%9B%BD',
          encrypt: 'T0FGeDE1NzExNDg2NjY2NTFKSXFGcw%3D%3D',
          citySituationId: -1,
          vno: '3.2.3',
          pageNum: payload.pageNum,
          pageSize: 10,
          type: -1
        }
      }).then(response => {
        // console.log(response.data)
        let result = response.data
        // console.log(result.data)
        if (result.retCode === '0') {
          // commit('setDiscoverList', result.data)
          commit('setDiscoverList', state.discoverList.concat(result.data))

          if (payload.callback) {
            payload.callback()
          }

          // 控制Toast消失
          Toast.clear()
        }
      })
    },
    getDiscoverShowList ({
      commit,
      state
    }, payload) {
      Toast.loading({
        mask: true,
        duration: 0,
        message: '加载中'
      })
      axios.get('https://api.mydeershow.com/mobile/app/dicsovery/homeRecommend', {
        params: {
          source: 'mobile',
          cityName: '%E5%85%A8%E5%9B%BD',
          citySituationName: '%E5%85%A8%E5%9B%BD',
          encrypt: 'cktLWjE1NzEyMTY2NDM4NjdrTktySg%3D%3D',
          citySituationId: -1,
          vno: '3.2.3',
          pageNum: payload.pageNum,
          pageSize: 10,
          type: 1
        }
      }).then(response => {
        // console.log(response.data)
        let result = response.data
        // console.log(result.data)
        if (result.retCode === '0') {
          // commit('setDiscoverList', result.data)
          commit('setDiscoverShowList', state.discoverShowList.concat(result.data))

          if (payload.callback) {
            payload.callback()
          }

          // 控制Toast消失
          Toast.clear()
        }
      })
    },
    getDiscoverMovList ({
      commit,
      state
    }, payload) {
      Toast.loading({
        mask: true,
        duration: 0,
        message: '加载中'
      })
      axios.get('https://api.mydeershow.com/mobile/app/dicsovery/homeRecommend', {
        params: {
          source: 'mobile',
          cityName: '%E5%85%A8%E5%9B%BD',
          citySituationName: '%E5%85%A8%E5%9B%BD',
          encrypt: 'eVQ0aTE1NzEyMTkyNTc5NjVoQnhGRQ%3D%3D',
          citySituationId: -1,
          vno: '3.2.3',
          pageNum: payload.pageNum,
          pageSize: 10,
          type: 2
        }
      }).then(response => {
        // console.log(response.data)
        let result = response.data
        // console.log(result.data)
        if (result.retCode === '0') {
          // commit('setDiscoverList', result.data)
          commit('setDiscoverMovList', state.discoverMovList.concat(result.data))

          if (payload.callback) {
            payload.callback()
          }

          // 控制Toast消失
          Toast.clear()
        }
      })
    },
    getDiscoverSpotList ({
      commit,
      state
    }, payload) {
      Toast.loading({
        mask: true,
        duration: 0,
        message: '加载中'
      })
      axios.get('https://api.mydeershow.com/mobile/app/dicsovery/homeRecommend', {
        params: {
          source: 'mobile',
          cityName: '%E5%85%A8%E5%9B%BD',
          citySituationName: '%E5%85%A8%E5%9B%BD',
          encrypt: 'emNNWTE1NzEyMzIxNjQxODhDSHV1SQ%3D%3D',
          citySituationId: -1,
          vno: '3.2.3',
          pageNum: payload.pageNum,
          pageSize: 10,
          type: 3
        }
      }).then(response => {
        // console.log(response.data)
        let result = response.data
        // console.log(result.data)
        if (result.retCode === '0') {
          // commit('setDiscoverList', result.data)
          commit('setDiscoverSpotList', state.discoverSpotList.concat(result.data))

          if (payload.callback) {
            payload.callback()
          }

          // 控制Toast消失
          Toast.clear()
        }
      })
    },
    getDiscoverLoveList ({
      commit,
      state
    }, payload) {
      Toast.loading({
        mask: true,
        duration: 0,
        message: '加载中'
      })
      axios.get('https://api.mydeershow.com/mobile/app/aboutchat/repo/findAboutchatRepoList', {
        params: {
          source: 'mobile',
          cityName: '%E5%85%A8%E5%9B%BD',
          citySituationName: '%E5%85%A8%E5%9B%BD',
          encrypt: 'UG5FTTE1NzEyOTc1MTQ0MzNFZGR6OA',
          citySituationId: -1,
          vno: '3.2.3',
          pageNum: payload.pageNum,
          pageSize: 10,
          type: 6
        }
      }).then(response => {
        // console.log(response.data)
        let result = response.data
        // console.log(result.data)
        if (result.retCode === '0') {
          // commit('setDiscoverList', result.data)
          commit('setDiscoverLoveList', state.discoverLoveList.concat(result.data))

          if (payload.callback) {
            payload.callback()
          }

          // 控制Toast消失
          Toast.clear()
        }
      })
    }
  }
}

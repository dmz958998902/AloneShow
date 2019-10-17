import axios from 'axios'
export default {
  namespaced: true,

  state: {
    discoverList: [], // 全部数据列表
    discoverShowList: [], //演出数据列表
    discoverMovList: [], // 电影页面
    discoverSpotList: [], // 景点页面
    discoverLoveList: [] // 爱的页面
  },
  getters: {

  },
  mutations: {
    setDiscoverList(state, payload) {
      // 全部数据
      state.discoverList = payload
      // console.log(payload)
    },
    setDiscoverShowList(state, payload) {
      // 演出数据
      state.discoverShowList = payload
      console.log(payload)
    },
    setDiscoverMovList(state, payload) {
      // 电影数据
      state.discoverMovList = payload
      console.log(payload)
    },
    setDiscoverSpotList(state, payload) {
      // 电影数据
      state.discoverSpotList = payload
      console.log(payload)
    },
    setDiscoverLoveList(state, payload) {
      state.discoverLoveList = payload
      console.log('我是爱的')
    }
  },
  actions: {
    getDiscoverList({
      commit
    }, payload) {
      axios.get('https://api.mydeershow.com/mobile/app/dicsovery/homeRecommend?source=mobile&cityName=%E5%85%A8%E5%9B%BD&citySituationName=%E5%85%A8%E5%9B%BD&encrypt=T0FGeDE1NzExNDg2NjY2NTFKSXFGcw%3D%3D&citySituationId=-1&vno=3.2.3&pageNum=1&pageSize=10&type=-1').then(response => {
        // console.log(response.data)
        let result = response.data
        // console.log(result.data)
        if (result.retCode === "0") {
          commit('setDiscoverList', result.data)
        }
      })
    },
    getDiscoverShowList({
      commit
    }, payload) {
      axios.get('https://api.mydeershow.com/mobile/app/dicsovery/homeRecommend?source=mobile&cityName=%E5%85%A8%E5%9B%BD&citySituationName=%E5%85%A8%E5%9B%BD&encrypt=cktLWjE1NzEyMTY2NDM4NjdrTktySg%3D%3D&citySituationId=-1&vno=3.2.3&pageNum=1&pageSize=10&type=1').then(response => {
        // console.log(response.data)
        let result = response.data
        console.log(result.data)
        if (result.retCode === "0") {
          commit('setDiscoverShowList', result.data)
        }
      })
    },
    getDiscoverMovList({
      commit
    }, payload) {
      axios.get('https://api.mydeershow.com/mobile/app/dicsovery/homeRecommend?source=mobile&cityName=%E5%85%A8%E5%9B%BD&citySituationName=%E5%85%A8%E5%9B%BD&encrypt=eVQ0aTE1NzEyMTkyNTc5NjVoQnhGRQ%3D%3D&citySituationId=-1&vno=3.2.3&pageNum=1&pageSize=10&type=2').then(response => {
        // console.log(response.data)
        let result = response.data
        console.log(result.data)
        if (result.retCode === "0") {
          commit('setDiscoverMovList', result.data)
        }
      })
    },
    getDiscoverSpotList({
      commit
    }, payload) {
      axios.get('https://api.mydeershow.com/mobile/app/dicsovery/homeRecommend?source=mobile&cityName=%E5%85%A8%E5%9B%BD&citySituationName=%E5%85%A8%E5%9B%BD&encrypt=emNNWTE1NzEyMzIxNjQxODhDSHV1SQ%3D%3D&citySituationId=-1&accessToken=D31EF6850017B2D0DED2AAC76848636A&vno=3.2.3&pageNum=1&pageSize=10&type=3').then(response => {
        // console.log(response.data)
        let result = response.data
        console.log(result.data)
        if (result.retCode === "0") {
          commit('setDiscoverSpotList', result.data)
        }
      })
    },
    getDiscoverLoveList({
      commit
    }, payload) {
      axios.get('https://api.mydeershow.com/mobile/app/aboutchat/repo/findAboutchatRepoList?source=mobile&cityName=%E5%85%A8%E5%9B%BD&citySituationName=%E5%85%A8%E5%9B%BD&encrypt=UG5FTTE1NzEyOTc1MTQ0MzNFZGR6OA%3D%3D&citySituationId=-1&vno=3.2.3&pageNum=1&pageSize=10&type=6').then(response => {
        let result = response.data
        if (result.retCode === '0') {
          commit('setDiscoverLoveList', result.data)
        }
      })
    }

  }
}

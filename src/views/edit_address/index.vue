<!-- 新增收货地址 一级路由 -->
<template>
  <div>
    <address_nav title="编辑地址" right-text="保存"></address_nav>
    <van-address-edit
      :area-list="this.areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import address_nav from '../../components/address_nav'
// import areaListss from '../../assets/address'
import { mapActions, mapState } from 'vuex'
import axios from 'axios'
export default {
  data () {
    return {
      // areaList: {
      //   province_list: {},
      //   city_list: {},
      //   county_list: {}
      // },

      searchResult: []
    }
  },

  name: 'address_list',
  components: {
    address_nav
  },

  computed: {
    ...mapState('address', ['areaList'])
  },

  methods: {
    ...mapActions('address', ['getCities']),
    onSave () {
      Toast('save')
    },
    onDelete () {
      Toast('delete')
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }
        ]
      } else {
        this.searchResult = []
      }
    }

    // fn1(arr) {
    //   let array1 = arr.data.data
    //   // let array2 = arr.data.data.mallCityList
    //   // console.log(array2)
    //   array1.forEach(item => {
    //     this.areaList.province_list[item.provinceCode] = item.provinceName
    //     item.mallCityList.forEach(items => {
    //       this.areaList.city_list[items.cityCode] = items.cityName
    //       items.mallAreaList.forEach(itemss => {
    //         this.areaList.county_list[itemss.areaCode] = itemss.areaName
    //       })
    //     })
    //   })
    //   console.log(this.areaList.province_list)
    //   console.log(this.areaList.city_list)
    //   console.log(this.areaList.county_list)
    // }
  },
  created () {
    // axios
    //   .get(
    //     'https://api.mydeershow.com/mobile/app/city/citylist?source=mobile&cityName=%E5%85%A8%E5%9B%BD&citySituationName=%E5%85%A8%E5%9B%BD&encrypt=amhDRDE1NzExMjIyNDc3OTh3YmZrdg%3D%3D&citySituationId=-1&accessToken=8C17D38E71423CCAAB0C91FA29F545D3&vno=3.2.3'
    //   )
    //   .then(response => {
    //     this.fn1(response)
    //     console.log(response)
    //   })
    console.log('aaa')
    console.log(this.getCities())
  }
}
</script>

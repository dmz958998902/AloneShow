<!-- 新增收货地址 一级路由 -->
<template>
  <div>
    <address_nav title="编辑地址" right-text="保存" @leftEvent="onleftSaves" @rightEvent="onSaves"></address_nav>
    <van-address-edit
      :area-list="areaList"
      :address-info="curUpdate"
      :area-columns-placeholder="curSelectCity"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @change-default="changeDefault"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import address_nav from '../../components/address_nav'
import axios from 'axios'
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      isDefault: false,
      searchResult: [],
      curUpdate: {},
      curSelectCity: ['请选择地址']
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
    //发送新增地址的请求
    addAddress(data) {
      axios
        .post(
          'https://api.mydeershow.com/mobile/app/address/create',
          {
            source: 'mobile',
            cityName: '全国',
            citySituationName: '全国',
            encrypt: 'b1ZhMzE1NzExOTIzNTkyNzVQZDZwRg==',
            citySituationId: '-1',
            accessToken: 'BC1FF20400BAC1F5B7C86D43A46853C9',
            vno: '3.2.3',
            name: data.name,
            mobile: data.tel,
            province: data.province,
            city: data.city,
            district: data.county,
            address: data.addressDetail,
            default: this.isDefault
          },
          {
            transformRequest(data) {
              let arr = []
              for (let key in data) {
                arr.push(`${key}=${data[key]}`)
              }
              return arr.join('&')
            }
          }
        )
        .then(responses => {
          if (responses.data.retCode === '0') {
            this.$router.push('./address_list')
          }
        })
    },

    onSave(data) {
      //点击保存的时候发送请求 把用户保存的地址存到数据库
      if (this.$route.query.name) {
        this.updateAddress(data)
      } else {
        this.addAddress(data)
      }
    },

    //点击设置为默认地址的时候触发的事件
    changeDefault(value) {
      this.isDefault = value
    },

    onleftSaves() {
      this.$router.push('address_list')
    },

    onSaves() {
      alert('此功能不可用！')
    },
    onDelete() {
      //点击删除->确定以后返回到页面
      this.$router.back()
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '江西省',
            address: '吉安市吉州区'
          }
        ]
      } else {
        this.searchResult = []
      }
    },
    //获取url传递过来的参数 放到页面上面去
    getcurUpdate() {
      this.curUpdate.name = this.$route.query.name
      this.curUpdate.tel = this.$route.query.mobile
      this.curUpdate.province = this.$route.query.province
      this.curUpdate.city = this.$route.query.city
      this.curUpdate.county = this.$route.query.district
      this.curUpdate.addressDetail = this.$route.query.address
      this.curUpdate.areaCode = this.$route.query.user_id + ''
      this.curUpdate.isDefault = this.$route.query.isDefault
      this.curUpdate.postalCode = this.$route.query.id
    }
  },
  created() {
    this.getcurUpdate()
    this.getCities()
  }
}
</script>

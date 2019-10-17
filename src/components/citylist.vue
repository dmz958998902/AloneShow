<template>
  <div class="cityList">
    <van-index-bar :indexList="cityPy" :highlight-color="color">
      <van-index-anchor index="全国"></van-index-anchor>
      <div class="cityShow" v-for="item in cityList" :key="item.py">
        <van-index-anchor :index="item.py"></van-index-anchor>
        <div class="cityItem" v-for=" city in item.list" :key="city.id">
          <van-cell :title="city.name" />
        </div>
      </div>
    </van-index-bar>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'cityList',
  props: {
    color: {
      type: String,
      default: '#e72e62'
    }
  },
  computed: {
    ...mapState('city', ['cities']),
    ...mapGetters('city', ['cityList', 'cityPy'])
  },
  methods: {
    ...mapActions('city', ['getCities'])
  },
  created() {
    this.getCities()
  }
}
</script>
<style scoped lang="scss">
.cityList {
  background: white;
}
</style>


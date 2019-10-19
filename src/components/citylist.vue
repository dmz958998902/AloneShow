<template>
  <div class="cityList">
    <van-index-bar :indexList="cityPy" :highlight-color="color">
      <div class="cityShow" v-for="item in cityList" :key="item.py">
        <van-index-anchor :index="item.py"></van-index-anchor>
        <div class="cityItem" v-for=" city in item.list" :key="city.id">
          <van-cell :title="city.name" @click="fn(city.name)" />
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
    ...mapState('city', ['cities', 'quanguo']),
    ...mapGetters('city', ['cityList', 'cityPy'])
  },
  methods: {
    ...mapActions('city', ['getCities']),
    // 点击每个城市触发一个自定义的事件
    fn(type) {
      this.$emit('changeCity', type)
    }
  },
  created() {
    this.getCities()
  }
}
</script>
<style scoped lang="scss">
.cityList {
  background: white;
  width: 100%;
  position: absolute;
  height: 410px;
  overflow-y: auto;
  top: 100px;
}
</style>

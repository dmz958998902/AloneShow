<template>
  <div class="classrify">
    <ul>
      <li :class="{'height-color':curType==='全部分类'}" @click="changeType('全部分类')">全部分类</li>
      <li
        v-for="item in list"
        :key="item.id"
        :class="{'height-color':curType===`${item.remark}`}"
        @click="changeType(item.remark)"
      >{{item.remark}}</li>
    </ul>
  </div>
</template>
<style lang="scss">
@import '../../../assets/styles/common/mixins.scss';
.classrify {
  font-size: 12px;
  color: #666666;
  position: absolute;
  top: 100px;
  background: white;
  width: 100%;
  ul {
    li {
      padding-left: 15px;
      height: 45px;
      line-height: 45px;
      @include border-bottom;
    }
    .height-color {
      color: #e72e62;
    }
  }
}
</style>
<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      curType: '全部分类'
    }
  },
  methods: {
    changeType(type) {
      this.curType = type
      this.$emit('changeKind', type)
    }
  },
  created() {}
}
</script>

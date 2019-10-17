<template>
  <div class="classrify">
    <ul>
      <li :class="{'height-color':curType==='classrify'}" @click="changeType('classrify')">全部分类</li>
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
  font-size: 14px;
  color: #666666;
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
      curType: 'classrify'
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

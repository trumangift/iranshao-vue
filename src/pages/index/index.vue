<template>
  <view class="header" :style="headerWidthStyle">
    <view  class="nosign">签到</view>
    <view class="searchBox">
      <at-input placeholder='搜索'></at-input>
    </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import { AtInput } from 'taro-ui-vue'
import { mapState } from "vuex";
import "taro-ui-vue/dist/style/components/button.scss"
import "taro-ui-vue/dist/style/components/toast.scss"
import "taro-ui-vue/dist/style/components/noticebar.scss"
import './index.scss'
export default {
  components: {
    AtInput
  },
  data () {
    return {
      msg: 'Hello world!',
      show: false
    }
  },
  computed: {
    ...mapState("app", ["boundingRect","systemInfo"]),
    headerWidthStyle() {
      const margin = 24;
      return {
        width: (this.boundingRect.left - margin) + 'px',
        height: (this.boundingRect.bottom + this.boundingRect.top - this.systemInfo.statusBarHeight) + 'px',
        marginLeft: '12px'
      };
    }
  },
  methods: {
    handleClick () {
      this.show = true
    },
    handleClose () {
      this.show = false
    }
  },
    }
</script>

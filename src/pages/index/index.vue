<template>
  <view class="header" :style="headerWidthStyle">
    <view  class="nosign">签到</view>
    <view class="searchBox">
      <AtIcon class="icon" value='search' size='20' color='#BEBEBE'></AtIcon>
      <view class="searchPlaceholder">搜索</view>
    </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import { AtInput, AtIcon } from 'taro-ui-vue'
import { mapState } from "vuex";
import "taro-ui-vue/dist/style/components/icon.scss"
import './index.scss'
export default {
  components: {
    AtInput,
    AtIcon
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
      const padding = 36;
      return {
        width: this.boundingRect.left + 'px',
        height: (this.boundingRect.bottom + this.boundingRect.top - this.systemInfo.statusBarHeight) + 'px'
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

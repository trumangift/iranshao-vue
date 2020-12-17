<!--  -->
<template>
  <view class="competition-link row">
     <view class="avatar">
         <iran-image  :url="data.cover || data.cover_url"></iran-image>
     </view>   
     <view class="text-container">
        <view class="title">我我哦我我哦我我哦我我哦我我哦我我哦我我哦我我哦</view> 
        <view class="rate row cross-center">
            <AtRate :value="5" :max="5" :size="14" /> 
            <text class="rate-txt">5.0</text>
        </view>
        <view>
           <text class="sub-text">青岛市五四广场</text>
        </view>
        <view>
            <text class="sub-text">2019.05.04</text>
        </view>
     </view>
  </view>
</template>

<script>
import './index.scss';
import IranImage from '@/components/image'
import { AtRate } from 'taro-ui-vue'
import "taro-ui-vue/dist/style/components/rate.scss";
export default {
  props: {
     data: {}
  },
  data () {
    return {
    };
  },
  components: {
      IranImage,
      AtRate
  },
  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
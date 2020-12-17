<!--  -->
<template>
  <view class="competition-link column">
     <view class="row">
        <view class="avatar">
            <iran-image  :url="data.cover || data.cover_url"></iran-image>
        </view>   
        <view class="text-container column">
            <view>
              <text  class="title">我我哦我我哦我我哦我我哦我我哦我我哦我我哦我我哦</text>
            </view> 
            <view class="rate row cross-center">
                <AtRate :value="5" :max="5" :size="9" /> 
                <text class="rate-txt">5.0</text>
            </view>
            <view class="watcher-container row cross-center">
              <AtIcon  prefixClass='fa' value='iconsFocus_on' size='12' color='red'></AtIcon>
              <view><text class="watcher row">1.5万人关注</text></view>
          </view>  
        </view>
     </view>
  </view>
</template>

<script>
import './index.scss';
import IranImage from '@/components/image'
import { AtRate, AtIcon } from 'taro-ui-vue'
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
      AtRate,
      AtIcon
  },
  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
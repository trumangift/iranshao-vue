<!--  -->
<template>
  <view class="competition-link column layout-two main-center">
     <view class="row">
        <view class="avatar">
            <iran-image  :url="url"></iran-image>
        </view>   
        <view class="text-container column">
            <iran-text :text="title" :ellipsis="true" className="title"></iran-text>
            <view class="rate row cross-center" style="margin-top: 5px;">
                <AtRate :value="rate" :max="5" :size="9" /> 
                <text class="rate-txt">{{rate}}</text>
            </view>
            <view class="watcher-container row cross-center">
              <AtIcon  prefixClass='fa' value='iconsFocus_on' size='12' color='red'></AtIcon>
              <view><text class="watcher row">{{count}}{{icon_text}}</text></view>
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
     url: '',
     title: '',
     rate: '',
     count: '',
     icon_text: ''
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
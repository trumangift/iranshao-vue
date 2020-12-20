<!--  -->
<template>
  <view class="competition-link column">
     <view class="row">
        <view class="avatar">
            <iran-image  :url="url"></iran-image>
        </view>   
        <view class="text-container column space-between">
            <iran-text :text="title" :ellipsis="true" className="title"></iran-text>
            <view class="rate row cross-center">
                <AtRate :value="rate" :max="5" :size="16" /> 
                <text class="rate-txt">{{rate}}</text>
            </view>
            <iran-text :text="location" :ellipsis="true" className="sub-text"></iran-text>
            <iran-text :text="date" :ellipsis="true" className="sub-date-text"></iran-text>
        </view>
     </view>
     <view class="watcher-container row cross-center one">
        <AtIcon  prefixClass='fa' value='iconsFocus_on' size='12' color='red'></AtIcon>
        <view><text class="watcher row">{{count}}人关注</text></view>
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
     location: '',
     date: ''
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
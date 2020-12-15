<template>
    <view class='manifesto-container' @tap="linkToDetail">
      <text>{{text}}</text>
    </view>
</template>

<script>
import Taro from '@tarojs/taro'
import './index.scss'
export default {
   props: {
       text: '',
       participationId: ''
   }, 
   methods: {
       linkToDetail() {
           Taro.navigateTo({ url: `/pages/articleDetail/index?id=${this.participationId}&type=Participation` })
       }
   }
}
</script>

<style>

</style>
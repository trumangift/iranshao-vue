<template>
  <view class="container">
    <scroll-view :style="{height:scrollHeight}" scrollY >
      <view id="demo21" class="scroll-view-item_H demo-text-1">a</view>
      <view id="demo22"  class="scroll-view-item_H demo-text-2">b</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
      <view id="demo23" class="scroll-view-item_H demo-text-3">dddc</view>
    </scroll-view>
  </view>
</template>
<script>
 import Taro from '@tarojs/taro'
 import { callApi } from "@/utils";
 import { mapState } from "vuex"
 import './index.scss'
 let pageNum = 1;
 export default {
   computed: {
     ...mapState("app", ["systemInfo"]),
   },
   data () {
     return {
       scrollHeight: ''
     }
   },
   async created() {
     const res = await callApi('homePageList', { page: 1, per_page: 10, category: 'recommend' })
   },
   mounted() {
     const query = Taro.createSelectorQuery();
     query.select('.index_header').boundingClientRect();
     query.select('.at-tabs__item').boundingClientRect();
     query.select('.taro-tabbar__tabbar-bottom').boundingClientRect();
     query.exec((res) => {
       const indexHeaderHeight =  res[0] && res[0].height || 60;
       const tabsHeight =  res[1] && res[1].height || 51.5;
       const tabbarHeight =  res[2] && res[2].height || 50;
       const loadingTextHeight = 40;
       let excludeScrollHeight = indexHeaderHeight + tabsHeight + tabbarHeight + loadingTextHeight + 24; // 24 is the at-tabs__header padding-top + 1px border
       const scrollHeight = this.systemInfo.screenHeight - excludeScrollHeight;
        if (scrollHeight) {
          this.scrollHeight = scrollHeight + 'px'
        } else {
          this.scrollHeight = '75vh'
        }
     });
   }
 }
</script>

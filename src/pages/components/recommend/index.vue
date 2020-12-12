<template>
  <view>
    <taro-scroll-view  :height="scrollHeight" :list="list" :isLoadingMore="isLoadingMore" @onloadMore="onloadMore" @onPullRefresh="onPullRefresh">
      <view slot="pullLoadingSlot" class="pull-load">
         <AtIcon  value='loading' size='18' color='#666'></AtIcon>
         <text class="loading-text">刷新中...</text>
      </view>
      <view slot="loadMoreSlot" class="load-more">
         <AtIcon  value='loading' size='18' color='#666'></AtIcon>
         <text class="loading-text">加载中...</text>
      </view>
    </taro-scroll-view>
  </view>
</template>
<script>
 import Taro from '@tarojs/taro'
 import { AtIcon } from 'taro-ui-vue'
 import { callApi } from "@/utils";
 import { mapState, mapActions } from "vuex"
 import TaroScrollView from '@/components/scrollview';
 import "taro-ui-vue/dist/style/components/icon.scss"
 import './index.scss'
 let pageNum = 1;
 export default {
   computed: {
     ...mapState("app", ["systemInfo"])
   },
   components: {
    TaroScrollView,
    AtIcon,
   },
   data () {
     return {
       scrollHeight: '',
       list: [],
       isLoadingMore: false
     }
   },
   methods: {
      ...mapActions('recommendModule',['queryListByPage']),
      onloadMore() {
        const nextPage = pageNum + 1; // no use pageNum++ because of error loading fall back
        this.isLoadingMore = true; // 显示加载中...
        this.queryListByPage(nextPage).then(res => {
              this.list = this.list.concat(res.statuses);
              this.isLoadingMore = false;
              // 如果加载成功了，才修改页码
              pageNum = nextPage;
        }).catch(e => {
              this.isLoadingMore = false;
        });
      },
      onPullRefresh() {
        pageNum = 1;
        this.queryListByPage(pageNum).then(res => {
              this.list = res.statuses;
        });
      }
   },
   created() {
     this.queryListByPage(pageNum).then(res => {
         this.list = this.list.concat(res.statuses);
     });
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
       let excludeScrollHeight = indexHeaderHeight + tabsHeight + tabbarHeight  + 24; // 24 is the at-tabs__header padding-top + 1px border
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

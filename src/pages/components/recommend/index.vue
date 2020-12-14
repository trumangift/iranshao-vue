<template>
  <view>
    <taro-scroll-view  :height="scrollHeight" :list="list"  :loadMore="onloadMore" @onPullRefresh="onPullRefresh">
      <view slot="pullLoadingSlot-pre" class="pull-load">
         <AtIcon class="loading-turn" value='loading' size='18' color='#666'></AtIcon>
         <text class="loading-text">下拉刷新</text>
      </view>
      <view slot="pullLoadingSlot-release" class="pull-load">
         <AtIcon class="loading-turn" value='loading' size='18' color='#666'></AtIcon>
         <text class="loading-text">释放刷新</text>
      </view>
      <view slot="loadMoreSlot" class="load-more">
         <AtIcon class="loading-turn"  value='loading' size='18' color='#666'></AtIcon>
         <text class="loading-text">加载中...</text>
      </view>


      <view slot="content">
        <view class='home-page-list'>
          <view>
             <ContentList
              type='recommend'
              :list="list"
            /> 
            <!-- <RecommendTopics topics={recommendTopics} />
            <ContentList
              type='recommend'
              list={recommendList.slice(3)}
            /> -->
          </view>
        </View>
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
 import ContentList from '../content-list';
 import "taro-ui-vue/dist/style/components/icon.scss"
 import './index.scss'
import { reject } from 'lodash';
 export default {
   computed: {
     ...mapState("app", ["systemInfo"])
   },
   components: {
    TaroScrollView,
    AtIcon,
    ContentList
   },
   data () {
     return {
       scrollHeight: '',
       list: []
     }
   },
   methods: {
      ...mapActions('recommendModule',['queryListByPage']),
      onloadMore(pageNum, type) {
        const nextPage = pageNum;
        return new Promise((resolve, reject) => {
            this.queryListByPage(pageNum).then(res => {
                  if (type === 'init') {
                    this.list = res.statuses;
                  } else {
                    this.list = this.list.concat(res.statuses);
                  } 
                  resolve(res); 
            }).catch(e => {
                  reject(e); 
            });
        });
      },
      onPullRefresh() {
        this.onloadMore(1, 'init');
      }
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
       let excludeScrollHeight = indexHeaderHeight + tabsHeight + tabbarHeight  + 16; // 24 is the at-tabs__header padding-top + 1px border
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

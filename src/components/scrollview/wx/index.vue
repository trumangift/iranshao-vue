<template>
  <view class="iranshao-scroll-view" :style="{height, top: scrollTop}">
   <scroll-view 
      ref="taro-scrollView"
      class="iranshao-inner-scroll-view"
      :style="{height: '100%', top: scrollTop + 'px'}" :scrollY="scrollY"
      @touchMove="onTouchMove"
      @touchStart="onTouchStart"
      @touchEnd="onTouchEnd"
      @scrollToLower="onScrollToLower"
      @scroll="onScroll"
   >
      <view v-show="scrollTop > 0">
        <slot name="pullLoadingSlot-pre" v-if="!isRefreshing"></slot>
        <slot name="pullLoadingSlot-release" v-else></slot>
      </view> 
      <slot name="content">
      </slot>   
      <view  class="iranshao-load-more-wrapper row center" v-show="isLoadingMore">
        <slot name="loadMoreSlot"></slot>
      </view> 
   </scroll-view> 
  </view>  
</template>
<script>
let pageNum = 1;
import './index.scss'
import { debounce } from 'lodash';
export default {
    props: {
        height: {
            type: String,
            required: true
        },
        loadMore: {
             type: Function,
             required: true,
        }
    },
    data() {
        return {
            scrollY: true,
            scrollTop: 0,
            isRefreshing: false,
            startPosition: {},
            isDraggable: true,
            isLoadingMore: false,
        }
    },
    created() {
      this.notifyLoadMore =  debounce(this.notifyLoadMore, 50);
      this.isLoadingMore = true;
      this.loadMore(1, 'init').then(d => {
        this.isLoadingMore = false;
      }).catch(e => {
        this.isLoadingMore = false;
      });
    },
    methods: {
      notifyLoadMore() {
        this.$emit('onPullRefresh');
      },
      onTouchStart(e) {
        if (this.isDraggable) {
          this.startPosition = e.touches[0]; 
          this.scrollY = false;
        }
      },
      onScroll(e) {
         if (e.detail.scrollTop < 30) {
           this.isDraggable = true;
         } else {
           this.isDraggable = false;
         }
      },
      onTouchMove(e) {
        if (this.isDraggable) {
        let move_p = e.touches[0],
            startP = this.startPosition,
            start_y = startP.clientY,
            move_y = move_p.clientY;
            const offsetY = move_y - start_y;
            const threadHold = 5; // 降低重绘频率 减少小程序掉帧
            
            if ((offsetY - this.scrollTop) >= threadHold) {
              this.scrollTop = offsetY;
              if (offsetY > 70) { //下拉刷新
                this.isRefreshing = true;
                this.notifyLoadMore();
              }
            }
        }
      },
      onTouchEnd(e) {
        this.scrollTop = 0;
        this.scrollY = true;
        this.isRefreshing = false;
      },
      onScrollToLower(e) {
        // 加载更多
        if (!this.isLoadingMore) {
           this.isLoadingMore = true; 
           this.loadMore(pageNum + 1).then(d => {
             pageNum += 1;
             this.isLoadingMore = false;
           }).catch(e => {
             this.isLoadingMore = false;
           });
        }
      }
    }       
}
</script>

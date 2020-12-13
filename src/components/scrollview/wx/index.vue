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
      <view  class="iranshao-load-more-wrapper" v-show="isLoadingMore">
        <slot name="loadMoreSlot"></slot>
      </view> 
   </scroll-view> 
  </view>  
</template>
<script>
import './index.scss'
import { debounce } from 'lodash';
export default {
    props: {
        height: {
            type: String,
            required: true
        },
        isLoadingMore: {
             type: Boolean,
             required: true
        }
    },
    data() {
        return {
            scrollY: true,
            scrollTop: 0,
            isRefreshing: false,
            startPosition: {},
            isDraggable: true,
        }
    },
    created() {
      this.notifyLoadMore =  debounce(this.notifyLoadMore, 50);
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
            start_x = startP.clientX,
            start_y = startP.clientY,
            move_x = move_p.clientX,
            move_y = move_p.clientY;
            const offsetY = move_y - start_y;
            this.scrollTop = offsetY;
            if (offsetY > 70) { //下拉刷新
               this.isRefreshing = true;
               this.notifyLoadMore();
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
           this.$emit('onloadMore');
        }
      }
    }       
}
</script>

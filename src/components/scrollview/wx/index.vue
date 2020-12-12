<template>
  <view class="iranshao-scroll-view" :style="{height, top: scrollTop}">
   <view v-show="isRefreshing">
     <slot name="pullLoadingSlot"></slot>
   </view> 
   <scroll-view class="iranshao-inner-scroll-view" :style="{height: '100%', top: scrollTop}" :scrollY="scrollY"
      @touchMove="onTouchMove"
      @touchStart="onTouchStart"
      @touchEnd="onTouchEnd"
      @scrollToLower="onScrollToLower"
   >
      <view :key="index" v-for="(item, index) in list" style="height: 200px;">
        {{item.body}}
      </view>
    </scroll-view> 
   <view v-show="isLoadingMore" class="iranshao-load-more-wrapper">
     <slot name="loadMoreSlot"></slot>
   </view> 
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
        list: {
            type: Array,
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
            scrollTop: 0 + 'px',
            isRefreshing: false,
            startPosition: {}
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
        this.startPosition = e.touches[0]; 
        this.scrollY = false;
      },
      onTouchMove(e) {
        let move_p = e.touches[0],
            startP = this.startPosition,
            start_x = startP.clientX,
            start_y = startP.clientY,
            move_x = move_p.clientX,
            move_y = move_p.clientY;
            const offsetY = move_y - start_y;

            if (offsetY > 0) { //下拉刷新
               this.scrollTop = offsetY + 'px';
               this.isRefreshing = true;
               this.notifyLoadMore();
            }
      },
      onTouchEnd(e) {
        this.scrollTop = 0 + 'px';
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

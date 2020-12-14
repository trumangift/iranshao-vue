<template>
 <view :class="customClass" @tap="linkToDetail">
      <view class='tag-icon'>
        <view class='topic-icon'>#</view>
      </view>
      <view class='tag-body'>
        <view class='tag-title'>{{topicMsg.title}}</view>
        <view class='tag-subtitle' v-if="show">
            {{topicMsg.participants_count || 0}}篇话题
            <text class='tag-subtitle-line'>|</text>
            {{topicMsg.views_count || 0}}次浏览
        </view>
      </view>
 </view>      
</template>
<script>
import Taro from '@tarojs/taro'
import './index.scss'
export default {
    props: {
        topicMsg: {
            type: Object,
            default: {}
        },
        type: {
            type: String,
            required: true
        },
        action: {
            type: String
        }
    },
    data() {
        return {
            show: false
        }
    },
    computed: {
        customClass() {
            let className = ['tag-container'];
            const {
                title,
                participants_count,
                views_count,
                id,
            } = this.topicMsg;
              const follow = this.type === 'follow' && (participants_count !== null || views_count !== null);
              const show = (follow && (action == "follow_topic" || action == "create_topic")) || this.type === 'utopicIncludedStatuses';
              this.show = show;
              if (show) {
                 className.push('follow-tag');
              }
              if (this.type === 'utopicIncludedStatuses') {
                 className.push('search-tag')
              }
              return className;
        }
    },
    methods: {
        linkToDetail(){
            debugger;
            Taro.navigateTo({ url: `/pages/utopicSquare/utopicDetail/index?utopicId=${this.topicMsg.id}` })
        }
    }
}
</script>
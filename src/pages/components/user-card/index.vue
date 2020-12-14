<template>
    <view class='user-card-container row cross-center'
      :style="style"
    >
        <view class ='user-msg'>
            <avatar :user="item.user"  :type="type">
            </avatar>   
            <view class='user-msg-detail'>
                <view class="user-name row center">
                    <text class='nickname'>{{item.user.nickname}}</text>  
                    <text class='identification' v-if="item.user.role === 'admin'">（{{item.user.identification}}）</text>
                </view>
                <view v-if="type === 'follow'" class='sub-name'>{{item.user.actionText}}</view>
                <view v-if="type === 'utopicIncludedStatuses'"  style='margin-left: 14px'>{{item.user.actionText}}</view>
            </view>  
        </view> 
        <view class='operation' v-if="type === 'follow'  || type === 'utopicIncludedStatuses'">
          <text  class='sub-name'>{{item.user.publishedAt}}</text>
        </view>  
    </view>    
</template>
<script>
import Avatar from '@/pageComponents/avatar';
import './index.scss';
export default {
    components: {
        Avatar
    },
    computed: {
       style() {
           if (this.type === 'utopicIncludedStatuses') {
               return {
                   'height': '78rpx',
                   'align-items': 'flex-start',
                   'border-bottom': '1rpx solid #EBEBEB'
               }
           }
           return {}
       }
    },
    props: {
        item: {
            type: Object,
            required: true,
        },
        type: {
            type: String,
            required: true,
        }
    }
}
</script>
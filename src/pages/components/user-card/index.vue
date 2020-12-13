<template>
    <view className='user-card-container'
      :style="style"
    >
        <view className='user-msg'>
        </view>    
    </view>    
</template>
<script>
export default {
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
        },
        actionText: {
            type: String,
        },
        publishedAt: {
            type: String,
        }
    }
}
</script>
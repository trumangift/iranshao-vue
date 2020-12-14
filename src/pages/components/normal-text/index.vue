<template>
<view class="normal-text-container" @tap="linkToDetail">
    {{text}}
    <text v-if="fullTextFlag" class='full-text' @tap="linkToDetail">全文</text>
</view>        
</template>
<script>
import Taro from '@tarojs/taro'
import './index.scss';
export default {
    props: {
       type: {
           type: String,
           default: 'Status'
       },
       text: '',
       detailId: '',
       fullTextFlag: {
           type: Boolean
       }
    },
    methods: {
        linkToDetail() {
            let newType = this.type
            if(this.type === 'GearComment') {
                newType = 'Comment'
            }
            Taro.navigateTo({ url: `/pages/articleDetail/index?id=${this.detailId}&type=${newType}` })
        }
    }
}
</script>
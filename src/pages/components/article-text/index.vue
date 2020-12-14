<template>
    <view class='article-text-container'>
      <view class='article-body' @tap='linkToArticleDetail'>
        <text class='h1-body'>{{h1Body}}</text>
        <view class='body-text'>
          {{bodyText}} <text class='full-text' @tap="linkToArticleDetail">全文</text>
        </view>
      </view>
    </view>
</template>
<script>
import './index.scss';
import Taro from '@tarojs/taro';
export default {
    props: {
        h1Body: '',
        bodyText: '',
        articleId: '',
        type: ''
    },
    methods: {
        linkToArticleDetail() {
            const {articleId, type} = this;
            Taro.navigateTo({ url: `/pages/articleDetail/index?id=${articleId}&type=${type}` })
        }
    }
}
</script>
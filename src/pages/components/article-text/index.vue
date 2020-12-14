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
export default {
    props: {
        h1Body: '',
        bodyText: '',
        articleId: '',
        type: ''
    },
    methods: {
        linkToArticleDetail() {
            Taro.navigateTo({ url: `/pages/articleDetail/index?id=${articleId}&type=${type}` })
        }
    }
}
</script>
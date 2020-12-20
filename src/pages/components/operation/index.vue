<template>
    <view class="information-operation-container">
      <view class='operation-item' @tap="like">
        <view class='operation-btn'>
           <AtIcon  prefixClass='fa' value='iconsLiketouch' size='iconSize' :color="isLikedByMe ? '#FF5000' : ''"></AtIcon>
          <view class='operation-number' :style="{ color: isLikedByMe ? '#FF5000' : '' }">{{likesNumber || 0}}</view>
        </view>
      </view>
      <view class='operation-item' @tap="() => linkToDetail()">
        <view class='operation-btn'>
          <AtIcon  prefixClass='fa' value='iconsComments' :size='iconSize'></AtIcon>
          <view class='operation-number'>{{repliesCount || 0}}</view>
        </view>
      </view>
        <view class='operation-item' @tap="share">
            <button openType='share' class='operation-btn'>
            <AtIcon  prefixClass='fa' value='iconsSharetouch' size='iconSize'></AtIcon>
            <view class='operation-number'>
            </view>
        </button>
    </view>
    </view>
</template>

<script>
import Taro from '@tarojs/taro'
import { AtIcon } from 'taro-ui-vue'
import { callApi } from '@/utils/index'
export default {
   props: {
    shareBgPic: '',
    h1Body: '',
    bodyCopy: '',
    likesCount: '',
    repliesCount: '',
    referableId: '',
    referableType: '',
    action: '',
    likedByMe: '',
    statusesId: '',
   }, 
   components: {
      AtIcon
   },
   data() {
      return {
          isLikedByMe: false,
          likesNumber: 0,
          iconSize: 16
      }
   },
   created() {
    const {likedByMe, likesCount} = this;
    this.isLikedByMe = likedByMe;
    this.likesNumber = likesCount
   },
   methods: {
       linkToDetail()  {
            const {action,referableId,referableType} = this;
            if (action === 'create_diary' || action === 'create_article' || action === 'create_race_review' || action === 'create_participation') {
               Taro.navigateTo({ url: `/pages/articleDetail/index?id=${referableId}&type=${referableType}` })
            } else {
               Taro.navigateTo({ url: `/pages/articleDetail/index?id=${statusesId}&type=Status` })
            }
       },
       async like() {
           const {action,referableId,referableType, isLikedByMe, statusesId} = this;
            const apiName = isLikedByMe ? 'deleteLike' : 'createLike';
            if (action === 'create_diary' || action === 'create_article' || action === 'create_race_review' || action === 'create_participation') {
               await callApi(apiName, { likable_id: referableId, likable_type: referableType })
            } else {
               await callApi(apiName, { likable_id: statusesId, likable_type: 'Status' })
            }
            this.isLikedByMe = !isLikedByMe;
            if(apiName === 'createLike'){
               this.likesNumber += 1;
            } else {
               this.likesNumber -= 1;
            }
       },

       generateShareOptions(actionType) {
            const {bodyCopy, shareBgPic, action,referableId,referableType, isLikedByMe, statusesId} = this;
            const oneShareOptions =() => {
                return {
                    title: bodyCopy,
                    path: `/pages/articleDetail/index?id=${statusesId}&type=Status`,
                    imageUrl: shareBgPic,
                }
            }
            const twoShareOptions =() => {
                return {
                    title: h1Body,
                    path: `/pages/articleDetail/index?id=${referableId}&type=${referableType}`,
                    imageUrl: shareBgPic,
                }
            }
            let shareOptionsMap = {
                'status': oneShareOptions,
                'create_race_review': oneShareOptions,
                'create_diary': twoShareOptions,
                'create_article': twoShareOptions,
                'create_participation': oneShareOptions,
            }
            return shareOptionsMap[actionType] && shareOptionsMap[actionType]()
       },
       share() {
           const {action} = this;
            console.log('generateShareOptions(action)', this.generateShareOptions(action))
        }

   }
}
</script>

<style lang="scss">
.information-operation-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  height: 80px;
  margin-top: 20px;

  .operation-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .operation-btn {
    font-size: 20px;
    position: relative;
    color: #BEBEBE;
    width: 80px;
    height: 50px;
    display: flex;
    align-items: center;
    background: #FFFFFF;
  }

  button:after {
    border: 0;
  }

  .operation-number {
    position: absolute;
    font-family:DINPro-Regular,DINPro;
    top: 2px;
    left: 40px;
  }
}

.information-operation-position-left {
  justify-content: flex-start;

  .operation-item {
    flex: none;
    margin-right: 20px;
  }
}
</style>
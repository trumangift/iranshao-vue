<template>
  <view class="gallery row cross-start" v-if="photos && photos.length > 0">
    <view :style="{width: `${imageWidth}px`, height: `${imageWidth}px`, marginLeft: `${index === 0 ? 0 : gap}px`}"  @tap="previewImage(url)" v-for="(url, index) in percolatePhotos" :key="index" >
      <iran-image  :url="url" className="gallery-item">
      </iran-image> 
    </view>  
  </view>   
</template>

<script>
import Taro from '@tarojs/taro'
import {dealPhotoUrl} from '@/utils/commonUtils';
import './index.scss';
import IranImage from '@/components/image'
import { mapState } from "vuex";

export default {
  components: {
      IranImage
  },
  data() {
    return {
      gap: 20,
      imageWidth: ''
    }
  },
  props: {
      photos: {
          type: Array,
          default: []
      },
      size: {
        type: Number,
        default: 3
      }
  },
  created() {
      const contentCardPadding = 24;
      const galleryItemBorder = 2;
      const screenWidth = this.systemInfo.screenWidth;
      this.imageWidth = (screenWidth - this.gap * 2) / 3 ;
  },
  computed: {
   ...mapState("app", ["systemInfo"]),
    percolatePhotos() {
       const mpPhotos = this.photos.map(photo => dealPhotoUrl(photo) + '!168x168'); 
       return mpPhotos.slice(0, this.size);
    },
  },
  methods: {
    previewImage(url) {
      Taro.previewImage({
        urls: this.photos,
        current: url,
      })
    }
  }
}
</script>

<style>

</style>
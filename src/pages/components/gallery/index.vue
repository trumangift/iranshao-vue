<template>
  <view class="gallery row cross-start" v-if="photos && photos.length > 0">
      <iran-image :style="{width: `${imageWidth}px`, height: `${imageWidth}px`}" className="gallery-item" v-for="(item, index) in percolatePhotos" :key="index" :url="item">
      </iran-image> 
  </view>   
</template>

<script>
import {dealPhotoUrl} from '@/utils/commonUtils';
import './index.scss';
import IranImage from '@/components/image'
import { mapState } from "vuex";

export default {
  components: {
      IranImage
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
  computed: {
   ...mapState("app", ["systemInfo"]),
    percolatePhotos() {
       const mpPhotos = this.photos.map(photo => dealPhotoUrl(photo) + '!168x168'); 
       return mpPhotos.slice(0, this.size);
    },
    imageWidth() {
      const screenWidth = this.systemInfo.screenWidth;
      const gap = 20;
      return ( (screenWidth - 20 * 2) /3 ).toFixed(0);
    }
  }
}
</script>

<style>

</style>
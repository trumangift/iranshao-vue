<template>
  <view>
      <iran-image v-for="(item, index) in photos" :key="index" :url="item">
      </iran-image> 
  </view>   
</template>

<script>
import './index.scss';
import IranImage from '@/components/image'
export default {
  components: {
      IranImage
  },
  props: {
      photos: {
          type: Array,
          default: []
      }
  } 
}
</script>

<style>

</style>
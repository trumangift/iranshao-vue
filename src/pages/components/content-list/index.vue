<template>
   <view class="content-list">
    <content-card :item="item" :type="type" :key="index" v-for="(item, index) in list">
    </content-card>    
   </view>    
</template>
<script>
import ContentCard from '../content-card';
import './index.scss';
export default {
    props: {
      type: {
        type: String,
        required: true,
      },
      list: {
        type: Array,
        required: true  
      }
    },
    components: {
        ContentCard
    }
}
</script>
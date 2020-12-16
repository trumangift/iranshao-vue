<template>
   <view class="content-list">
     <template  v-for="(item, index) in list">
        <content-card  v-if="item" :item="item" :type="type" :key="index">
        </content-card>    
     </template>
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
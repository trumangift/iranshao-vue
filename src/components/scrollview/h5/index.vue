<template>
   <scroll-view  :style="{height:scrollHeight}" :scrollY="scrollY">
      <view :key="index" v-for="(item, index) in list" style="height: 200px;">
        {{item.body}}
      </view>
    </scroll-view> 
</template>
<script>
import './index.scss'
export default {
    props: {
        height: {
            type: String,
            required: true
        },
        list: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            scrollY: true,
        }
    }       
}
</script>

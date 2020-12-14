<template>
  <view>
     <image 
        v-if="loading"
        :src="defaultLoadingImg"
        :class="className"
        :style="customStyle"
        :mode="mode"
        :lazyLoad="true">
    </image> 
    <image 
        v-else
        @load="loading = false"
        :class="className"
        :style="customStyle"
        @click="click"
        :src="url"
        :mode="mode"
        :lazyLoad="true">
    </image> 
  </view>     
</template>
<script>
import {defaultLoadingImg} from '@/constants/image'
import './index.scss';
export default {
    props: {
       className: {
           required: false,
           default: ''
       },
       customStyle: {
           required: false,
           type: Object,
           default: () => {}
       },
       url: {
           default: ''
       },
       mode: {
           default: 'scaleToFill'
       }
    },
    data() {
        return {
            loading: true,
            defaultLoadingImg
        }
    },
    methods: {
        click() {
            this.$emit('click');
        }
    }
}
</script>
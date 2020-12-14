<template>
  <view>
     <image 
        v-if="loading"
        :src="defaultLoadingImg"
        @load="loading = false"
        :class="className"
        :style="customStyle"
    :lazyLoad="true">
    </image> 
    <image 
        v-else
        @load="loading = false"
        :class="className"
        :style="customStyle"
        @click="click"
        :src="url"
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
           required: true,
           type: String,
           default: ''
       }
    },
    data() {
        return {
            loading: false,
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
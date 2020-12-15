<template>
  <view class="iran-image"> 
    <image 
        @load="loaded = true"
        @error="loaded = false"
        :class="className"
        :style="customStyle"
        @click="click"
        :src="url"
        :mode="mode"
        :lazyLoad="true">
    </image> 
    <image 
        v-if="!loaded"
        :src="defaultLoadingImg"
        :class="[className, 'defaultLoadingImg']"
        :style="customStyle"
        :mode="mode"
        >
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
            loaded: false,
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
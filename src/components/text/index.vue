<!-- 全局文本组件，默认不需要省略号 -->
<template>
  <view :class="['default-text', ellipsis ? 'ellipsis' : '', className || '']">
     {{text}}
  </view>
</template>

<script>
export default {
  name: 'iran-text',
  props: {
     text: '',
     ellipsis: {
         type: Boolean,
         default: false
     },
     className: ''
  },
  data() {
    return {
    };
  }
}

</script>
<style lang='scss'>
  .default-text {
     color: #313131;
     font-size: 24px;
  }
 .ellipsis {
    color: #313131;
    overflow: hidden;;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
 }
</style>
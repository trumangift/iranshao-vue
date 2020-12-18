<!--  -->
<template>
   <scroll-view
    class='carousel'
    :scrollX="true"
    scrollWithAnimation
    :scrollLeft="0"
   > 
        <slot name="content">   
        </slot>
   </scroll-view>
</template>

<script>
export default {
  props: {
      data: {
          type: Array,
          default: []
      }
  },  
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
}

</script>
<style lang='scss'>
.carousel {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  white-space:nowrap;
  width: 100%;
  height: 190px;
  .item {
    display: inline-block;
    width: 70vw;
    margin-right: 20px;
  }
}

</style>
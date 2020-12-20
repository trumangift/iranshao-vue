<template>
  
</template>

<script>
export default {
  props: {
      topics: [],
      active: 0
  } 
}
</script>

<style lang="scss">
.recommend-topics-swiper {
  border-top: 1px solid #F2F2F2;
  margin: 0px -24px 0px 0px;
  padding-bottom: 15px;
  .topic-item {
    color: #262626;
    font-size: 28px;
    margin: 18px 0;
    display: flex;
    align-items: center;
  }

  .swiper-item  {
    opacity: 0.5;
  }

  .active-item {
    opacity: 1;
  }

  .topic-icon {
    width:28px;
    height:28px;
    background:rgba(236,109,51,1);
    border-radius: 100%;
    color: #fff;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
}

.recommend-topics-container {
  position: relative;
  margin-top: 20px;

  .recommend-swiper-indicator {
    position: absolute;
    color: #FF5000;
    font-size: 24px;
    top: 25px;
    right: 20px;
  }

  .indicator-number {
    font-weight:bold;
    font-size: 26px;
    margin: 0 5px;
  }

  .indicator-number-active {
    font-size: 32px;
  }
}

</style>
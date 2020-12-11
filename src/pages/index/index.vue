<template>
  <view>
    <view class="index_header container" :style="headerWidthStyle">
      <view  class="nosign">签到</view>
      <view class="searchBox">
        <AtIcon class="icon-search" value='search' size='18' color='#BEBEBE'></AtIcon>
        <view class="searchPlaceholder">搜索</view>
      </view>
    </view>
    <view class="iranshao-tab">
      <AtTabs
        :current="current"
        :tabList="tabList"
        :onClick="handleClick"
      >
        <AtTabsPane :current="current" :index="0">
          <view class='tab-content'>
            <recommend></recommend>
          </view>
        </AtTabsPane>
        <AtTabsPane :current="current" :index="1">
          <view class='tab-content'>关注</view>
        </AtTabsPane>
      </AtTabs>
    </view>
  </view>
</template>

<script>
// 按需引入, 更小的应用体积
import { AtIcon, AtTabs, AtTabsPane } from 'taro-ui-vue'
import recommend from '../components/recommend';
import { mapState } from "vuex";
import "taro-ui-vue/dist/style/components/icon.scss"
import "taro-ui-vue/dist/style/components/tabs.scss"
import './index.scss'
export default {
  components: {
    AtIcon,
    AtTabs,
    AtTabsPane,
    recommend
  },
  data () {
    return {
      current: 0,
      tabList: [
        { title: '推荐' },
        { title: '关注' }
      ],
    }
  },
  computed: {
    ...mapState("app", ["boundingRect","systemInfo"]),
    headerWidthStyle() {
      return {
        width: this.boundingRect.left + 'px',
        height: (this.boundingRect.bottom + this.boundingRect.top - this.systemInfo.statusBarHeight) + 'px'
      };
    }
  },
  methods: {
    handleClick(value) {
      this.current = value;
    }
  },
}
</script>

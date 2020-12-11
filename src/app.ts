import Vue from 'vue'
import Taro from '@tarojs/taro'
import store from './vuex/store';
import './app.scss'

const App = new Vue({
  store,
  mounted () {
    if (process.env.TARO_ENV !== 'h5') {
      Taro.getSystemInfo({
        success: function (res) {
          store.dispatch('app/SET_SYSTEM_INFO', res);
        }
      });
      let boundingRect = Taro.getMenuButtonBoundingClientRect();
      store.dispatch('app/SET_BOUNDING_RECT', boundingRect);
    } else {
      store.dispatch('app/SET_BOUNDING_RECT', {
        left: document.documentElement.clientWidth
      });
      store.dispatch('app/SET_SYSTEM_INFO', {
        screenHeight: document.documentElement.clientHeight,
        statusBarHeight: 20,
      });
    }
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})

export default App

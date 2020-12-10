import Vue from 'vue'
import Taro from '@tarojs/taro'
import store from './vuex/store';
import './app.scss'

const App = new Vue({
  store,
  created(){
    if (process.env.TARO_ENV !== 'h5') {
      Taro.getSystemInfo({
        success: function (res) {
          store.dispatch('app/SET_SYSTEM_INFO', res);
        }
      });
      const boundingRect = Taro.getMenuButtonBoundingClientRect();
      store.dispatch('app/SET_BOUNDING_RECT', boundingRect);
    }

  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default)
  }
})

export default App

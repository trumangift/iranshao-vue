import h5ScrollView from './h5/index.vue';
import wxScrollView from './wx/index.vue';
let scrollView = null;
if (process.env.TARO_ENV === 'weapp') {
    scrollView = wxScrollView;
} else if (process.env.TARO_ENV === 'h5') {
    scrollView = wxScrollView;
} else {
    console.error('scroll view now only support h5 and weapp');
}

export default scrollView;
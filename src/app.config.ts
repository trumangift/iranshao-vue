export default {
  pages: [
    'pages/index/index',
    'pages/race/index',
    'pages/equip/index',
    'pages/mine/index'
  ],
  tabBar: {
    color: '#999999',
    selectedColor: '#FF5000',
    position: 'bottom',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './images/Home_default.png',
        selectedIconPath: './images/Home_touch.png'
      },
      {
        pagePath: 'pages/race/index',
        text: '赛事',
        iconPath: './images/Race_default.png',
        selectedIconPath: './images/Race_touch.png'
      },
      {
        pagePath: 'pages/equip/index',
        text: '装备',
        iconPath: './images/Equipment_default.png',
        selectedIconPath: './images/Equipment_hover.png'
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
        iconPath: './images/My_default.png',
        selectedIconPath: './images/My_touch.png'
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#FFFFFF',
    navigationBarTitleText: '爱燃烧',
    navigationBarTextStyle: 'black',
    backgroundColor: '#f6f6f6',
  },
}

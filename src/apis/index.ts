import * as GraphQl from '../apis/graphql'
import {defaultRequest as request} from '../utils/httpRequest'

export default {
  createAuth: request(GraphQl.createAuth), // 返回用户唯一标识
  weixinUserInfo: request(GraphQl.weixinUserInfo), // 获取用户微信信息
  weixinPhoneNumber: request(GraphQl.weixinPhoneNumber), // 获取用户手机号授权
  sendPhoneCode: request(GraphQl.phoneCode), //发送手机验证码
  bindingPhoneNumber: request(GraphQl.bindingPhoneNumber), //手动输入手机号
  accountUnlink: request(GraphQl.accountUnlink),  // 小程序账号解绑
  homePageList: request(GraphQl.homePageList), // 首页推荐列表 或 关注列表
  home: request(GraphQl.home), // 推荐话题列表
  races: request(GraphQl.races), // 赛事列表
  race: request(GraphQl.race), // 赛事详情
  raceShareQrcode: request(GraphQl.raceShareQrcode), // 赛事详情 二维码链接
  utopicList: request(GraphQl.utopicList), // 话题广场中话题列表
  hotRacesAndTopics: request(GraphQl.hotRacesAndTopics), // 热门赛事和话题
  searchTogether: request(GraphQl.searchTogether), // 搜索综合
  searchRaces: request(GraphQl.searchRaces), // 搜索赛事
  searchDiaries: request(GraphQl.searchDiaries), // 搜索日记
  searchTopics: request(GraphQl.searchTopics), // 搜索话题
  searchGears: request(GraphQl.searchGears), // 搜索装备
  articleDetail: request(GraphQl.articleDetail), // 资讯详情
  diaryDetail: request(GraphQl.diaryDetail), // 原创详情
  likeList: request(GraphQl.likeList), // 文章详情点赞列表
  repliesList: request(GraphQl.repliesList), // 文章详情回复列表
  collectList: request(GraphQl.collectList), // 文章详情收藏列表
  privateLetters: request(GraphQl.privateLetters), // 私信列表
  privateLetterMsgList: request(GraphQl.privateLetterMsgList), // 对话内容列表(message列表)
  mine: request(GraphQl.mine), // 我的
  publishUtopic: request(GraphQl.publishUtopic), // 发布话题
  utopicDetail: request(GraphQl.utopicDetail), // 话题详情页接口
  publishStatuses: request(GraphQl.publishStatuses), // 发布说说（动态）
  qiniuUptoken: request(GraphQl.qiniuUptoken), // 获取七牛云token
  createLike: request(GraphQl.createLike), // 点赞
  deleteLike: request(GraphQl.deleteLike), // 取消点赞
  createReply: request(GraphQl.createReply), // 评论
  deleteReply: request(GraphQl.deleteReply), // 删除评论
  createFavorite: request(GraphQl.createFavorite), // 收藏
  deleteFavorite: request(GraphQl.deleteFavorite), // 取消收藏
  createFollow: request(GraphQl.createFollow), // 关注
  deleteFollow: request(GraphQl.deleteFollow), // 取消关注
  statusDetail: request(GraphQl.statusDetail), // 动态详情
  createCheckin: request(GraphQl.createCheckin), // 用户签到
  raceReviewDetail: request(GraphQl.raceReviewDetail), // 赛事点评
  commentDetail: request(GraphQl.commentDetail), // 装备点评
  participationDetail: request(GraphQl.participationDetail), // 赛事宣言
  declarationList: request(GraphQl.declarationList), // 赛事宣言列表
  reviewList: request(GraphQl.reviewList), // 赛事点评列表
  diaryList: request(GraphQl.diaryList), // 赛事日记列表(diary)
  raceDetails: request(GraphQl.raceDetails), // 赛事详情
  myParticipationAndRaceReview: request(GraphQl.myParticipationAndRaceReview), //查询跑过页面数据(参与过+写点评)
  createParticipation: request(GraphQl.createParticipation), // 跑过页面 创建（创建参与了 + 创建点评）
  updateParticipation: request(GraphQl.updateParticipation), // 跑过页面 更新（更新参与了 + 更新点评）
  queryDeclaration: request(GraphQl.queryDeclaration), // 查询宣言
  userInfo: request(GraphQl.userInfo), // 用户信息
  userStatuses: request(GraphQl.userStatuses), // 用户动态
  userPssedParticipations: request(GraphQl.userPssedParticipations), // 用户比赛
  userApprovedDiaries: request(GraphQl.userApprovedDiaries), // 用户日记
  userUtopics: request(GraphQl.userUtopics), // 用户话题
  userUpcomingParticipations: request(GraphQl.userUpcomingParticipations), // 用户宣言
  followings: request(GraphQl.followings), // 我关注的人
  followers: request(GraphQl.followers), // 关注我的人
  mpNotifications: request(GraphQl.mpNotifications), // 通知列表
  mpNotificationView: request(GraphQl.mpNotificationView), // 将通知改为已读
  createDialogMessage: request(GraphQl.createDialogMessage), // 发送私信
  raceAlbums: request(GraphQl.raceAlbums), // 更多照片中的相簿
  albumInfo: request(GraphQl.albumInfo), // 具体某个相簿  详情(更多照片)
  photosOfAlbum: request(GraphQl.photosOfAlbum), // 具体某个相簿 照片
  pastRace: request(GraphQl.pastRace), // 查看评分
  createFeedback: request(GraphQl.createFeedback), // 提交意见反馈
  mineCollection: request(GraphQl.mineCollection), // 我的收藏接口
  raceGroupDetail: request(GraphQl.raceGroupDetail), // 赛事组别详情接口
  mineFollow: request(GraphQl.mineFollow), // 我的关注
  unpaidOrders: request(GraphQl.unpaidOrders), // 我的报名--待付款
  unparticipatedOrders: request(GraphQl.unparticipatedOrders), // 我的报名--待参赛
  uncommentedOrders: request(GraphQl.uncommentedOrders), // 我的报名--待点评
  orders: request(GraphQl.orders), // 我的报名--全部
  ordersBaseInfo: request(GraphQl.ordersBaseInfo), // 我的报名--订单基本情况
  gearHome: request(GraphQl.gearHome), // 装备--主页
  recentCalendar: request(GraphQl.recentCalendar), // 装备---新品日历查看更多
  hotGearRecommend: request(GraphQl.hotGearRecommend), // 装备---热门推荐 查看更多
  selectOrNewGears: request(GraphQl.selectOrNewGears), // 装备---精选和2020新品
  findGearsByCategory: request(GraphQl.findGearsByCategory), // 装备----根据装备分类（即tab标签）查询装备(除开精品、2020新品)
  gearDetails: request(GraphQl.gearDetails), // 装备----装备详情
  promotionGears: request(GraphQl.promotionGears), // 装备----装备导购
  gearComments: request(GraphQl.gearComments), // 装备----装备详情---简评
  gearLikeList: request(GraphQl.gearLikeList), // 装备----装备详情---点赞列表
  gearPhotos: request(GraphQl.gearPhotos), //  装备---装备详情---平台上传和用户上传的图片列表
  gearAttributes: request(GraphQl.gearAttributes), //  装备---装备详情---装备参数
  gearAndComment: request(GraphQl.gearAndComment), // 装备拥有退役想要--三个按钮的基本数据获取
  createComment: request(GraphQl.createComment), // 装备拥有退役想要--三个按钮的创建点评接口
  updateComment: request(GraphQl.updateComment), // 装备拥有退役想要--三个按钮的修改点评接口
  createTag: request(GraphQl.createTag), // 装备详情---》添加标签
  createTaggging: request(GraphQl.createTaggging), // 点标签，数量加1
  deleteTagging: request(GraphQl.deleteTagging), // 点标签，数量减1
  ranshaoTrials: request(GraphQl.ranshaoTrials), // 燃烧众测查看更多
  trialsList: request(GraphQl.trialsList), // 众测列表
  trialDetails: request(GraphQl.trialDetails), // 众测详情接口
  trialDetailApply: request(GraphQl.trialDetailApply), // 众测申请页面接口
  successApplication: request(GraphQl.successApplication), // 申请成功页面
  mallCoupon: request(GraphQl.mallCoupon), //  我的钱包--我的商城券
  balance: request(GraphQl.balance), // 我的钱包--余额
  availableMallCoupons: request(GraphQl.availableMallCoupons), // 我的钱包--可用商城券
  transactionDetails: request(GraphQl.transactionDetails), // 我的钱包--交易明细
  redeemCoupons: request(GraphQl.redeemCoupons), // 我的钱包---兑换商城优惠券
  wallet: request(GraphQl.wallet), // 我的钱包
  bindWithdrawAccount: request(GraphQl.bindWithdrawAccount), //绑定提现账号
  sendWithdrawApply: request(GraphQl.sendWithdrawApply), //钱包提现
  createTrialApply: request(GraphQl.createTrialApply), //申请众测
  trialAppliedByMe: request(GraphQl.trialAppliedByMe), //是否申请过众测
  trialReplies: request(GraphQl.trialReplies), //众测回复
}

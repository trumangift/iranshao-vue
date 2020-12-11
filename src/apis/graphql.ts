import {provider} from "../config"
// 获取token
export const createAuth = `
  mutation($code: String!) {
    CreateAuth(input: {code: $code, provider: "${provider}"}) {
      success
      access_token
      logined
    }
  }
`

// 获取用户微信信息
export const weixinUserInfo = `
  mutation($user_info: String!, $iv: String!) {
    UpdateAuth(input: {user_info: $user_info, iv: $iv}) {
      success
      errors
    }
  }
`

// 获取用户微信手机号
export const weixinPhoneNumber = `
  mutation($phone_info: String!, $iv: String!) {
    BindPhoneAuth(input:{phone_info: $phone_info, iv: $iv}) {
      success
      errors
    }
  }
`

// 获取手机验证码
export const phoneCode = `
  mutation($phone: String!) {
    SendCodeAuth(input: {phone: $phone}) {
      success
      errors
    }
  }
`

// 小程序账号绑定手动输入手机号
export const bindingPhoneNumber = `
  mutation($phone: String!, $code: String!) {
    BindManuPhoneAuth(input: {phone: $phone, code: $code}) {
      success
      errors
    }
  }
`

// 小程序账号解绑
export const accountUnlink = `
  mutation {
    UnBindUserAuth(input:{}) {
      success
      errors
    }
  }
`

// 发布说说（动态）
export const publishStatuses = `mutation($status: StatusInput) {
  CreateMpStatus(input: {status: $status}) {
    success
    status {
      id
      body
      photos
    }
    errors
  }
}`

// 七牛云token
export const qiniuUptoken = `query {
  qiniu_uptoken {
    token
    uptoken
    upload_url
    bucket
    bucket_domain
  }
}`

// 推荐列表 或 关注列表
export const homePageList = `
  query($page: Int, $per_page: Int, $category: String) {
    statuses(page: $page, per_page: $per_page, category: $category) {
      id
      referable_id
      referable_type
      body
      user {
        id
        slug
        nickname
        avatar_normal
        role
        identification
      }
      payload {
        id
        title
        cover
        avg_score
        follows_count
        location
        start_date
        type
      }
      payloads {
        id
        title
        cover
        avg_score
        follows_count
        location
        start_date
        type
      }
      published_at
      action
      action_text
      views_count
      likes_count
      liked_by_me
      replies_count
      posted_by_current_user
      favored_by_me
      photo_url
      photos
      utopic {
        id
        title
        participants_count
        views_count
      }
    }
  }
`

export const home = `
  {
    mine {
      checked
    }
    recommend_utopics{
      id
      category
      title
      content
      user{
        id
        slug
        nickname
        avatar_normal
        role
        identification
      }
    }
  }
`

// 话题广场中话题列表
export const utopicList = `query ($category: String, $page: Int, $per_page: Int) {
  utopic_list(category: $category, page: $page, per_page: $per_page) {
    id
    title
    participants_count
    views_count
    user {
      id
      slug
      nickname
      avatar_normal
      role
      identification
    }
  }
}
`

export const hotRacesAndTopics = `
  {
    hot_races {
      id
      name
      follows_count
      avg_score
      cover_url
    }
    hot_utopics {
      id
      title
      content
      participants_count
      views_count
    }
  }
`

export const races = `
  query races($type: String, $region: String, $region_scope: String, $date: String, $screen: String, $sort: String, $page: Int, $per_page: Int) {
    races(type: $type, region: $region, region_scope: $region_scope, date: $date, screen: $screen, sort: $sort, page: $page, per_page: $per_page) {
      id
      name
      avg_score
      follows_count
      cover_url
      start_date
      region_name
      is_reging
      reg_url
    }
  }
`

// 赛事详情 二维码链接
export const raceShareQrcode = `
query raceShareQrcode($id: ID!){
  race(id: $id){
    id
    share_qrcode
    yearly_race {
      cover
    }
  }
}
`
// 赛事详情
export const race = `
query race($id: ID!){
  race(id: $id){
    id
    name
    race_reviews_count
    upcoming_participations_count
    diaries_count
    yearly_race {
      id
      name #名称
      avg_score #评分
      posts_count #动态数量
      recent_post {
        body
        created_at
      } #当前动态
      is_recent_child #是否为最新一年比赛
      cover(version: "320x320") #封面小图
      reg_race_reminder_guide #是否已显示过报名提醒引导
      category #种类，判断显示顶部大图
      reg_start_date #报名开始时间
      reg_end_date #报名结束时间
      start_date #比赛开始时间
      #passed_participations_count #参加过
      upcoming_participations_count #参赛宣言
      estimate #是否预估比赛开始时间
      reg_published #是否公布比赛时间
      follows_count #关注的人
      banner #上方广告
      banner_url  #上方广告链接
      results_count #成绩数量
      photos_count #照片数量
      official_website_url #官网地址
      bottom_banner #下方广告
      bottom_banner_url #下方广告链接
      description #详细介绍
      is_reging #报名中
      race_groups {
        id
        name
      } #比赛项目
      ab_is_open 
      liked_races { #感兴趣的赛事
        name
        is_reging
        start_date
        location
        has_certs
        has_photos
        has_results
        reg_tag:reg_url
        avg_score
        cover(version: "320x320") #封面小图
        id
        follows_count
        display_region
      }
      pop_races { #大家都在报
        name
        is_reging
        start_date
        location
        has_certs
        has_photos
        has_results
        reg_tag:reg_url
        cover(version: "320x320") #封面小图
        id
        follows_count
        avg_score
      }
      declaration_participations {
        id
        content
        published_at
        wish_duration
        wish_comment
        cached_votes_up
        liked_by_me
        user{
          slug
          nickname
          avatar_normal
          level
          level_color
          identification
        }
      }
      button_status
      participated_by_me
      declarated_by_me
      reviewed_by_me
      is_reging
      has_results
      has_photos 
      reg_race_query_url  #报名查询
      reg_race {
        id
        slug
        name
        status_text
        reg_groups {
          name
          instruction
          button_status_text
          fee
          enable
          url
        }
      }
      race_desc              #想起介绍140字
      race_desc_images       #详细介绍3张图
      location #比赛地点
      avg_path_score #风光
      avg_org_score #组织
      avg_env_score #环境
    }
    bundled_race {
      id
      avg_score #评分
      children_count
      children {
        id
        name
      } #历届赛事
      avg_env_score
      avg_org_score
      avg_path_score
      avg_score_rates
      albums_count
      race_reviews_count #点评数量
      diaries_count
      posts_count
      followed_by_me
      passed_participations_count #参加过
      upcoming_participations_count #参赛宣言
      follows_count  
      has_photos  
      has_results
      top_photos {
        id
        token
        image_url(version:"w640")
        taken_time
      }
      recent_child {
        id
        name
        is_reging
      }
      albums(page: 1, per_page: 6) {
        id
        photos_url
        cover(version:"168x168")
        photos_count
      }
      diaries(page: 1, per_page: 1) {
        user {
          avatar_normal
          nickname
          slug
          level
          level_color
          identification
        }
        race {
          id
          name
          start_date
        }
        title
        summary
        body_images
        published_at
        replies_count
        likes_count
        liked_by_me
        id
      } 
      race_reviews(page: 1, per_page: 3) {
        id
        body
        created_at
        env_rating
        org_rating
        path_rating
        avg_rating
        liked_by_me
        likes_count
        images(first: 3, version: "320x320") {
          image_key
          image_url
        }
        images_count
        race {
          start_date
          name
        }
        participated
        participation{
          race_group {
            name
          }
          actual_duration
        }
        user{
          avatar_normal
          nickname
          slug
          level
          level_color
          identification
        }
      }
    }
  }
}
`

export const searchTogether = `
  query search_together($kw: String!, $page: Int, $per_page: Int) {
    search_gears(kw: $kw, page: $page, per_page: $per_page) {
       gears {
        id
        name
        cover(version: "80x80")
        avg_score
        likes_count
      }
    }
    search_races(kw: $kw, page: $page, per_page: $per_page) {
      races {
        id
        name
        avg_score
        follows_count
        cover_url
      }
    }
    search_articles(kw: $kw, page: $page, per_page: $per_page) {
      articles {
        id
        title
        cover
        mp_summary
        replies_count
        likes_count
        user {
          id
          nickname
        }
      }
    }
    search_diaries(kw: $kw, page: $page, per_page: $per_page) {
      diaries {
        id
        title
        cover
        mp_summary
        replies_count
        likes_count
        user {
          id
          nickname
        }
      }
    }
  }
`

export const searchRaces = `
  query search_races($kw: String!, $page: Int, $per_page: Int) {
    search_races(kw: $kw, page: $page, per_page: $per_page) {
      races {
        id
        name
        avg_score
        follows_count
        cover_url
      }
    }
  }
`

export const searchDiaries = `
  query search_diaries($kw: String!, $page: Int, $per_page: Int) {
    search_articles(kw: $kw, page: $page, per_page: $per_page) {
      articles {
        id
        title
        cover
        mp_summary
        replies_count
        likes_count
        user {
          id
          nickname
        }
      }
    }
    search_diaries(kw: $kw, page: $page, per_page: $per_page) {
      diaries {
        id
        title
        cover
        mp_summary
        replies_count
        likes_count
        user {
          id
          nickname
        }
      }
    }
  }
`

export const searchTopics = `
  query ($kw: String!, $page: Int, $per_page: Int) {
    search_utopics(kw: $kw, page: $page, per_page: $per_page) {
      utopics {
          id
          title
          participants_count
          views_count
      }
    }
  }
`
export const searchGears = `
  query ($kw: String!, $page: Int, $per_page: Int) {
    search_gears(kw: $kw, page: $page, per_page: $per_page) {
       gears {
        id
        name
        cover(version: "80x80")
        avg_score
        likes_count
      }
    }
  }
`

// 私信列表
export const privateLetters = `
{
  private_letters {
    id
    dialog_id
    last_msg_sent_at
    unread_count
    mute
    other_user {
      id
      slug
      nickname
      avatar_normal
      role
      identification
    }
    last_msg_body
  }
}
`

// 对话内容列表(message列表)
export const privateLetterMsgList = `
query ($dialog_id: String!, $page: Int, $per_page: Int) {
  private_letter_msg_list(dialog_id: $dialog_id) {
    id
    dialog_id
    other_user {
      id
      slug
      nickname
      avatar_normal
      role
      identification
    }
    user {
      id
      slug
      nickname
      avatar_normal
      role
      identification
    }
    messages(page: $page, per_page: $per_page) {
      id
      body
      created_at
      sender_id
    }
  }
}
`

// 发送私信
export const createDialogMessage = `
mutation ($receiver_id: Int!, $message: String!) {
  CreateDialogMessage(input: {receiver_id: $receiver_id, message: $message}) {
    success
  }
}
`

// 我的
export const mine = `query {
  mine {
    id
    slug
    follower_count   #被关注数
    following_count  #关注用户数
    nickname
    avatar_normal
    role
    identification
  }
}`

// 发表话题
export const publishUtopic = `
mutation ($title: String!, $content: String) {
  CreateUtopic(input: {title: $title, content: $content}) {
    success
  }
}
`
// 话题详情页接口
export const utopicDetail = `query ($id: ID!, $category: String! $page: Int, $per_page: Int) {
  utopic_details(id: $id) {
    id
    title
    category
    content
    participants_count
    views_count
    followed_by_me
    created_at
    published_at
    user {
      id
      nickname
      avatar_normal
    }
    statuses(category: $category, page: $page, per_page: $per_page) {
      id
      body
      published_at
      location
      shareable
      user {
        id
        slug
        nickname
        avatar_normal
        role
        identification
      }
      payload {
        id
        title
        cover
        avg_score
        follows_count
        location
        start_date
        type
      }
      action
      action_text
      likes_count
      replies_count
      photos
    }
  }
}
`

export const articleDetail = `
  query article($id: ID!) {
    article(id: $id) {
      id
      title
      summary
      content
      user {
        nickname
        avatar_normal
        slug
        id
        role
        identification
      }
      published_at
      cover
      replies_count
      views_count
      likes_count
      favorites_count
      published_at
      category_name
      related_articles {
        id
        title
      }
      liked_by_me
      favored_by_me
      related_races {
        id
        title: name
        start_date
        cover
        participations_count
        location
        follows_count
        avg_score
      }
      related_gears {
        id
        title: name
        cover(version: "320x320")
        avg_score
        likes_count
      }
    }
  }
`

export const diaryDetail = `
  query diary($id: ID!) {
    diary(id: $id) {
      id
      title
      body
      prized
      cover
      summary
      created_at
      replies_count
      likes_count
      views_count
      liked_by_me
      favored_by_me
      favorites_count
      published_at
      year
      user {
        nickname
        avatar_normal
        id
        slug
        role
        identification
        followed_by_me
      }
      related_races {
        id
        title: name
        start_date
        cover
        participations_count
        location
        follows_count
        avg_score
      }
      related_gears {
        id
        title: name
        cover(version: "320x320")
        avg_score
        likes_count
      }
    }
  }
`

export const likeList = `
  query ($likable_id: ID!, $likable_type: LikableType!, $page: Int, $per_page: Int) {
    votes_list(likable_id: $likable_id, likable_type: $likable_type, page: $page, per_page: $per_page) {
      id
      published_at
      user {
        id
        slug
        nickname
        avatar_normal
        role
        identification
      }
    }
  }
`

export const repliesList = `
  query ($repliable_id: ID!, $repliable_type: RepliableType!, $page: Int, $per_page: Int) {
  replies_list(repliable_id: $repliable_id, repliable_type: $repliable_type, page: $page, per_page: $per_page) {
    id
    body
    published_at
    user {
      id
      slug
      nickname
      avatar_normal
      role
      identification
    }
    created_by_me
    children {
      id
      body
      published_at
      reply_to {
        id
        user {
          id
          slug
          nickname
          avatar_normal
          role
          identification
        }
      }
      user {
        id
        slug
        nickname
        avatar_normal
        role
        identification
      }
      created_by_me
    }
  }
}
`

export const collectList = `
  query ($favorable_id: ID!, $favorable_type: FavorableType!, $page: Int, $per_page: Int) {
    favorites_list(favorable_id: $favorable_id, favorable_type: $favorable_type, page: $page, per_page: $per_page) {
      id
      published_at
      user {
        id
        slug
        nickname
        avatar_normal
        role
        identification
      }
    }
  }
`

export const createLike = `
  mutation($likable_id: ID!,$likable_type: LikableType,$type: String){
    CreateLike(input: {
      likable_id: $likable_id,
      likable_type: $likable_type,
      type: $type
    }){
      dislikes_count
      likable_id
      likable_type
      likes_count
      success
      user{
        id
        nickname
      }
    }
  }
`

export const deleteLike = `
  mutation($likable_id: ID!,$likable_type: LikableType!,$type: String){
    DeleteLike(input: {
      likable_id: $likable_id,
      likable_type: $likable_type,
      type: $type
    }){
      dislikes_count
      likable_id
      likable_type
      likes_count
      success
      user{
        id
        nickname
      }
    }
  }
`
export const createReply = `
  mutation($repliable_id: ID!,$repliable_type: RepliableType!,$body: String!,$reply_to_id: ID){
    CreateReply(input: {
      repliable_id: $repliable_id,
      repliable_type: $repliable_type,
      body: $body
      reply_to_id: $reply_to_id
    }){
      success
      reply{
        id
        body
        created_at
        user{
          id
          nickname
        }
      }
      replies_count
    }
  }
`

export const deleteReply = `
  mutation($id: ID!){
    DeleteReply(input: {
      id: $id
    }){
      success
    }
  }
`

export const createFavorite = `
  mutation($favorable_id: ID!,$favorable_type: FavorableType){
    CreateFavorite(input: {
      favorable_id: $favorable_id
      favorable_type: $favorable_type
    }){
      success
      favorable_id
      favorable_type
    }
  }
`

export const deleteFavorite = `
  mutation($favorable_id: ID!,$favorable_type: FavorableType){
    DeleteFavorite(input: {
      favorable_id: $favorable_id
      favorable_type: $favorable_type
    }){
      success
      favorable_id
      favorable_type
    }
  }
`

export const createFollow = `
  mutation($followable_id: ID!,$followable_type: FollowableType!){
    CreateFollow(input:{
      followable_id: $followable_id,
      followable_type: $followable_type
    }){
      success
      followable_id
      followable_type
    }
  }
`

export const deleteFollow = `
  mutation($followable_id: ID!,$followable_type: FollowableType!){
    DeleteFollow(input:{
      followable_id: $followable_id,
      followable_type: $followable_type
    }){
      success
      followable_id
      followable_type
    }
  }
`

export const statusDetail = `
  query ($id: ID!) {
    status(id: $id) {
      id
      body
      photos
      location
      published_at
      likes_count
      favorites_count
      liked_by_me
      favored_by_me
      replies_count
      liked_by_current_user
      user {
        id
        slug
        nickname
        avatar_normal
        role
        identification
      }
      utopic{
        id
        title
        content
      }
      payload{
        id
        title
        start_date
        cover
        avg_score
        location
        follows_count
      }
    }
  }
`

export const raceReviewDetail = `
  query race_review($id: ID!) {
    race_review(id: $id) {
      id
      published_at
      avg_rating
      liked_by_me
      favored_by_me
      body
      likes_count
      replies_count
      favorites_count
      voters {
        id
        avatar_normal
        nickname
      }
      photos
      race {
        id
        title: name
        start_date
        cover
        participations_count
        location
        follows_count
        avg_score
      }
      participated
      participation {
        race_group {
          name
        }
        actual_duration
      }
      user {
        id
        avatar_normal
        nickname
        slug
        level
        level_color
        role
        identification
        followed_by_me
      }
    }
  }
`

export const participationDetail = `
  query participation($id: ID!) {
    participation(id: $id) {
      actual_duration
      bib
      finished
      id
      is_plan
      is_mine
      published_at
      likes_count
      replies_count
      favorites_count
      race {
        id
        title: name
        start_date
        cover
        participations_count
        location
        follows_count
        avg_score
      }
      user {
        id
        avatar_normal
        nickname
        slug
        level
        level_color
        role
        identification
        followed_by_me
      }
      body: wish_comment
      wish_duration
      created_at
      cached_votes_up
      liked_by_me
      favored_by_me
    }
  }
`

export const createCheckin = `
  mutation CreateCheckin {
    CreateCheckin(input: {}) {success}
  }
`

// 赛事宣言列表
export const declarationList = `
query race($id: ID!, $page: Int, $per_page: Int, $sort: String) {
  race(id: $id) {
    list_declaration_participations(page: $page, per_page: $per_page, sort: $sort) {
      id
      published_at
      content
      wish_comment
      cached_votes_up:likes_count
      liked_by_me
      race_group {
        name
      }
      user {
        slug
        nickname
        avatar_normal
        level
        level_color
        identification
      }
    }
  }
}`

// 赛事点评列表
export const reviewList = ` 
  query race($id: ID!, $page: Int, $per_page: Int, $sort: String){
    race(id: $id) {
      bundled_race {
        race_reviews(page: $page, per_page: $per_page, sort: $sort) {
          body
          published_at
          env_rating
          id
          likes_count
          liked_by_me
          org_rating
          path_rating
          race {
            start_date
            name
          }
          replies_count
          is_recommended
          has_reg_order
          images(first: 3, version: "320x320") {
            image_key
            image_url
          }
          images_count
          user {
            avatar_normal
            nickname
            slug
            level
            level_color
            identification
          }
        }
      }
    }
  }
`

// 赛事日记列表(diary)
export const diaryList = `
query race($id: ID!, $page: Int, $per_page: Int, $sort: String) {
  race(id: $id) {
    diaries_mp(page: $page, per_page: $per_page, sort: $sort) {
      id
      title
      body
      prized
      favorites_count
      views_count
      liked_by_me
      set_recommended
      favored_by_me
      body_images
      published_at
      cover
      summary
      user {
        slug
        nickname
        avatar_normal
        level
        level_color
        identification
        role
      }
      url
      mobi_url
      likes_count
      replies_count
      year
      category_name
    }
  }
}`

// 赛事详情
export const raceDetails = `
query race($id: ID!){
  race(id: $id){
    detail
    yearly_race {
      id
      name #名称
      description
      race_desc
      reg_race_reminder_guide #是否已显示过报名提醒引导
      category #种类，判断显示顶部大图
      reg_start_date #报名开始时间
      reg_end_date #报名结束时间
      start_date #比赛开始时间
      estimate #是否预估比赛开始时间
      reg_published #是否公布比赛时间
      official_website_url #官网地址
      is_reging #报名中
      race_groups {
        id
        name
      } #比赛项目
      button_status
      participated_by_me
      declarated_by_me
      reviewed_by_me
      is_reging
      has_results
      has_photos 
      reg_race_query_url  #报名查询
      location #比赛地点
    }
  }
}

`// 赛事组别详情接口
export const raceGroupDetail = `
query race($id: ID!){
  race(id: $id){
    yearly_race {
      id
      race_groups {
        id
        name
        distance
        start_at
        fee
        qualification
        quota
        route
        start_line
        time_limit
        reg_started_on
        reg_ended_on
        price_in_cents
        need_race_certificate
        min_age
        registration_quota
        max_age
        length
        elevation_gain
        route_maps
      } #比赛项目
    }
  }
}
`

// 查询跑过页面数据(参与过+写点评)
export const myParticipationAndRaceReview = `
query race($id: ID!){
  race(id: $id){
    interests: children {
      id
      name
      start_date
      race_groups {
        id
        name
      }
      my_participation {
        actual_duration
        wish_duration
        wish_comment
        bib
        finished
        has_review
        id
        result_athlete {
          id
        }
        race_group {
          id
          name
        }
      }
      my_race_review {
        body
        env_rating
        id
        org_rating
        path_rating
        has_reg_order
        images_count
        images(version: "w640") {
          image_key
          image_url
        }
      }
    }
  }    
}  
`

// 跑过页面 创建（创建参与了 + 创建点评）
export const createParticipation = `
mutation ($participation: ParticipationInput, $race_review: RaceReviewInput){
  CreateParticipation(input: {participation: $participation, race_review: $race_review}){
      success
      participation {
        id
      }
      field_errors {
        field
        messages
      }
  }
}
`

// 跑过页面 更新（更新参与了 + 更新点评）
export const updateParticipation = `
mutation ($id: ID!, $participation: ParticipationInput, $race_review: RaceReviewInput){
  UpdateParticipation(input: {id: $id, participation: $participation, race_review: $race_review}){
      success
      participation {
        id
      }
      field_errors {
        field
        messages
      }
    }
}
`
// 查询宣言
export const queryDeclaration = `
query ($id: ID!) {
  race(id: $id) {
    race_groups {
      id
      name
    }
    yearly_race {
      my_declaration {
        actual_duration
        wish_duration
        wish_comment
        bib
        finished
        has_review
        id
        result_athlete {
          id
        }
        race_group {
          id
          name
        }
      }
    }
  }
}
`

// 用户信息
export const userInfo = `
  query user($id: ID!) {
    user(id: $id) {
      id
      slug
      nickname
      avatar_normal
      followed_by_me
      identification
      role
      follower_count  #被关注数
      following_count #关注数
      followings(page: 1, per_page: 50) {
        id
        slug
        nickname
        avatar_small
        followed_by_me
        follower_count
      }
    }
  }
`

// 用户动态
export const userStatuses = `
  query user($id: ID!, $page: Int, $per_page: Int) {
    user(id: $id) {
      statuses(page: $page, per_page: $per_page) {
        id
        referable_id
        referable_type
        body
        payload {
          id
          title
          cover
          avg_score
          follows_count
          location
          start_date
          type
        }
        action
        likes_count
        liked_by_me
        replies_count
        photos
        utopic {
          id
          title
        }
        published_at
      }
    }
  }
`

// 用户比赛
export const userPssedParticipations = `
  query user($id: ID!, $page: Int, $per_page: Int) {
    user(id: $id) {
      passed_participations(page: $page, per_page: $per_page) {
        id
        race_group {
          name
        }
        actual_duration_text
        race_review {
          id
          body
          likes_count
          replies_count
          avg_rating
          liked_by_me
          photos
        }
        race {
          id
          name
          avg_score
          cover_url
          start_date
          location
          region_name
          bundled_race{
           follows_count
          }
        }
        published_at
      }
    }
  }
`

// 用户日记
export const userApprovedDiaries = `
  query user($id: ID!, $page: Int, $per_page: Int) {
    user(id: $id) {
      approved_diaries(page: $page, per_page: $per_page) {
        id
        title
        summary
        body_images
        likes_count
        replies_count
        published_at
        liked_by_me
      }
    }
  }
`

// 用户话题
export const userUtopics = `
  query user($id: ID!, $page: Int, $per_page: Int) {
    user(id: $id) {
      utopic_statuses(page: $page, per_page: $per_page) {
        id
        body
        likes_count
        liked_by_me
        replies_count
        photos
        action
        utopic {
          id
          title
          content
        }
        published_at
      }
    }
  }
`

// 用户宣言
export const userUpcomingParticipations = `
  query user($id: ID!, $page: Int, $per_page: Int) {
    user(id: $id) {
      upcoming_participations(page: $page, per_page: $per_page) {
        id
        race_group {
          name
        }
        wish_duration_text
        wish_comment
        published_at
        likes_count
        replies_count
      }
    }
  }
`

// 更多照片中的相簿
export const raceAlbums = `
  query race_albums($id:ID!, $race_id: ID!, $page: Int, $per_page: Int){
    race(id: $id){
      name
      photos_url
      children_with_albums{
        id
        albums_count
        start_date
        photos_url
      }
    }
    
    race_albums(race_id: $race_id, page: $page, per_page: $per_page){
      id
      name
      photos_count
      photos(first: 5){
        image_url(version: "320x320")
      }
      published_at
    }
  }
`

// 具体某个相簿  详情(更多照片)
export const albumInfo = `
query ($id: ID!) {
  album(id: $id) {
    id
    name
    photos_count
    publicvisible
    taken_time_ranges {
      is_date
      date
      start_time
      end_time
      photos_count
    }
    user {
      id
      avatar_normal
      nickname
    }
  }
}
`

// 具体某个相簿 照片
export const photosOfAlbum = `
query ($id: ID!, $page: Int, $per_page: Int, $taken_start_at: String, $taken_end_at: String) {
  album(id: $id) {
    photos(taken_start_at: $taken_start_at, taken_end_at: $taken_end_at, page: $page, per_page: $per_page) {
      id
      token
      image_url
      taken_time
    }
  }
}
`

// 我的关注
export const mineFollow  = `
query ($page: Int, $per_page: Int, $category: String) {
  me {
    follows(page: $page, per_page: $per_page, category: $category) {
      id
      created_at
      followable {
        __typename
        ... on User {
          id
          slug
          nickname
          avatar_normal
          role
          identification
          followed_by_me
          follower_count
        }
        ... on Utopic {
          id
          title
          content
          participants_count
          views_count 
        }
        ... on Race {
          id
          name
          follows_count
          avg_score
          cover_url
        }
      }
    }
  }
}
`

// 我关注的人  我的关注-用户
export const followings  = `
  query user($id: ID!, $page: Int, $per_page: Int) {
    user(id: $id) {
      followings(page: $page, per_page: $per_page) {
        id
        slug
        nickname
        avatar_normal
        role
        identification
        followed_by_me
        follower_count
      }
    }
  }
`

// 关注我的人
export const followers = `
  query user($id: ID!, $page: Int, $per_page: Int) {
    user(id: $id) {
      followers(page: $page, per_page: $per_page) {
        id
        slug
        nickname
        avatar_normal
        role
        identification
        followed_by_me
        follower_count
      }
    }
  }
`

// 我的消息-通知列表
export const mpNotifications = `
  query mp_notifications($page: Int, $per_page: Int) {
    mp_notifications(page: $page, per_page: $per_page) {
      id
      dest_type
      dest_id
      content
      event
      unread
      published_at
    }
  }
`

// 将通知更改为已读
export const mpNotificationView = `
  query {
    mp_notification_view(id: 2125783)
  }
`

// 查看评分
export const pastRace = `
query race($id: ID!){
  race(id: $id){
    bundled_race {
      id
      name
      avg_score #评分
      children {
        id
        name
        avg_score
        start_date
      } #历届赛事
    }
  }
}
`
// 提交意见反馈
export const createFeedback = `
mutation CreateFeedback($type: String!, $content: String!, $photos: [String], $mobile: String!) {
  CreateFeedback(input: {type: $type, content: $content, photos: $photos, mobile: $mobile}) {
    success
  }
}
`

// 我的收藏接口
export const mineCollection = `
query user($page: Int, $per_page: Int) {
  me {
    favorites(page: $page, per_page: $per_page) {
      id
      created_at:published_at
      favorable {
        __typename
        ... on Diary {
          diary_id:id
          title
          summary
          replies_count
          likes_count
          favorites_count
          user {
            id
            slug
            nickname
            avatar_normal
            role
            identification
          }
          published_at
          photos:body_images
          related_races {
            id
            cover
            cover_url
            title:name
            avg_score
            start_date
            location
            follows_count
          }
        }
        ... on Article {
          article_id:id 
          title
          summary
          replies_count
          likes_count
          favorites_count
          user {
            id
            slug
            nickname
            avatar_normal
            role
            identification
          }
          published_at
          photos:body_images
          related_races{
            id
            cover
            cover_url
            title:name
            avg_score
            start_date
            location
            follows_count
          }
        }
        ... on Status {
          status_id:id
          referable_id
          referable_type
          body
          user {
            id
            slug
            nickname
            avatar_normal
            role
            identification
          }
          payload {
            id
            cover_url:cover
            title
            avg_score
            start_date
            location
            follows_count
            type
          }
          published_at
          likes_count
          replies_count
          photos
          utopic {
            id
            title
          }
        }
        ... on RaceReview {
          race_review_id:id
          body
          published_at
          user {
            id
            slug
            nickname
            avatar_normal
            role
            identification
          }
          replies_count
          likes_count
          favorites_count
          photos
          race{
            id
            cover_url
            name
            avg_score
            start_date
            location
            follows_count
          }
        }
        ... on Participation {
          participation_id:id
          wish_comment
          wish_duration_text
          user {
            id
            slug
            nickname
            avatar_normal
            role
            identification
          }
          race{
            id
            cover_url
            name
            avg_score
            start_date
            location
            follows_count
          }
          published_at
          replies_count
          likes_count
          favorites_count
        }
      }
    }
  }
}
`

// 我的报名--待付款
export const unpaidOrders = `
query ($page: Int, $per_page: Int) {
  me {
    unpaid_orders(page: $page, per_page: $per_page) {
      order_no
      amount
      status
      bib
      has_comment_race
      payment_url
      reg_order_url
      package_cert_url
      payable
      reg_group {
        name
        enable
        reg_race {
          name
          start_date
          cover_url
          location
          race {
            name
            start_date
            location
            cover(version: "320x320")
          }
        }
      }
      registration_name
      status
      created_at
    }
  }
}`

// 我的报名--待参赛
export const unparticipatedOrders = `
query ($page: Int, $per_page: Int) {
  me {
    unparticipated_orders(page: $page, per_page: $per_page) {
      order_no
      amount
      status
      bib
      has_comment_race
      payment_url
      reg_order_url
      package_cert_url
      payable
      reg_group {
        name
        enable
        reg_race {
          name
          start_date
          cover_url
          location
          race {
            name
            start_date
            location
            cover(version: "320x320")
          }
        }
      }
      registration_name
      status
      created_at
    }
  }
}`

// 我的报名--待点评
export const uncommentedOrders = `
query ($page: Int, $per_page: Int) {
  me {
    uncommented_orders(page: $page, per_page: $per_page) {
      order_no
      amount
      status
      bib
      has_comment_race
      payment_url
      reg_order_url
      package_cert_url
      payable
      reg_group {
        name
        enable
        reg_race {
          name
          start_date
          cover_url
          location
          race {
            name
            start_date
            location
            cover(version: "320x320")
            yearly_race {
              id
            }
            bundled_race {
              id
            }
          }
        }
      }
      registration_name
      status
      created_at
    }
  }
}`

// 我的报名--全部
export const orders = `
query ($page: Int, $per_page: Int) {
  me {
    orders(page: $page, per_page: $per_page) {
      order_no
      amount
      status
      bib
      has_comment_race
      payment_url
      reg_order_url
      package_cert_url
      payable
      reg_group {
        name
        enable
        reg_race {
          name
          start_date
          cover_url
          location
          race {
            name
            start_date
            location
            cover(version: "320x320")
            yearly_race {
              id
            }
            bundled_race {
              id
            }
          }
        }
      }
      registration_name
      status
      created_at
    }
  }
}`

// 我的报名--订单基本情况
export const ordersBaseInfo = `
  query me {
    me {
      avatar_normal
      id
      nickname
      slug
      location #废弃
      region #城市
      signature
      unread_notifications_count
      level #用户等级
      level_color #等级颜色
      identification
      level_task_completed #会员基础任务是否完成
      checked #是否已签到
      follower_count # 被关注数量 
      following_count # 关注数量
      unpaid_count
      unparticipated_count
      uncommented_count
    }
  }
`

// 装备--主页
export const gearHome = `
  query gearHome {
    gear_categories {
      id
      name
    }
    equipment_banners {
      id
      recommendable_id
      recommendable_type
      name
      cover_image
      url
    }
    recent_calendar(page: 1, per_page: 5) {
      id
      name
      cover: recommend_cover_image(place: "GearMpNew")
      mp_slogan
    }
    hot_gear_recommend(page: 1, per_page: 10) {
      id
      name
      cover: recommend_cover_image(place: "GearMpHot")
      score : avg_score
      gear_type
    }
    ranshao_trials(page: 1, per_page: 10) {
      id
      title
      product_name
      product_price
      cover
      status_text
      quantity
      trial_applies_count
      applicants: some_applicants(size: 5) {
        id
        slug
        avatar_small
      }
    }
  }
`

// 装备列表页
export const gears = `
  query gears {

  }
`
// 装备---》新品日历 查看更多
export const recentCalendar = `
query recent_calendar($page: Int, $per_page: Int) {
  recent_calendar(page: $page, per_page: $per_page) {
    id
    name
    cover: recommend_cover_image(place: "GearMpNew")
    mp_slogan
  }
}
`
// 装备---》热门推荐  查看更多
export const hotGearRecommend = `
query hot_gear_recommend($page: Int, $per_page: Int) {
  hot_gear_recommend(page: $page, per_page: $per_page) {
    id
    name
    cover: recommend_cover_image(place: "GearMpHot")
    score : avg_score
    gear_type
  }
}
`

// 装备---》精选和2020新品
export const selectOrNewGears = `
query select_or_new_gears($category_type: String, $page: Int, $per_page: Int) {
  select_or_new_gears(category_type: $category_type, page: $page, per_page: $per_page) {
    id
    name
    cover: recommend_cover_image(category_type: $category_type)
    score : avg_score
    gear_type
    diaries_and_articles {
      __typename
      ... on Diary {
        id
        title
        cover
        user {
          id
          slug
          nickname
        }
      }
      ... on Article {
        id
        title
        cover
        user {
          id
          slug
          nickname
        }
      }
    }
    comments_count
    comment_users {
      id
      slug
      avatar_normal
    }
  }
}
`

// 装备----根据装备分类（即tab标签）查询装备(除开精品、2020新品)
export const findGearsByCategory = `
query find_gears_by_category($category_id: Int, $page: Int, $per_page: Int) {
  find_gears_by_category(category_id: $category_id, page: $page, per_page: $per_page) {
    id
    name
    cover(version: "168x168")
    score : avg_score
    gear_type
    diaries_and_articles {
      __typename
      ... on Diary {
        id
        title
        cover(version: "168x168")
        user {
          id
          slug
          nickname
        }
      }
      ... on Article {
        id
        title
        cover(version: "168x168")
        user {
          id
          slug
          nickname
        }
      }
    }
    comments_count
    comment_users {
      id
      slug
      avatar_normal
    }
  }
}
`

// 装备详情
export const gearDetails = `
query gear($id: ID) {
  gear(id: $id) {
    id
    name: display_name
    hint
    price
    currency_unit
    photos {
      id
      image_url
    }
    photos_count
    avg_score
    users_avg_score
    org_score
    own_gear_count
    want_gear_count
    retire_gear_count
    is_wanted
    is_owned
    is_retired
    on_sale_shop_count
    desc
    colors
    brand {
      id
      name
    }
    sale_time
    gear_attrs {
      name
      value
    }
    tags: all_tags {
      id
      name
      count: taggings_count
      color
      checked
    }
    relative_gears_count
    relative_gears {
      id
      cover
      name
      score : avg_score
      gear_type
      price
      currency_unit
    }
    reviews_count
    reviews {
      __typename
      ... on Diary {
        id
        title
        cover
        user {
          id
          slug
          nickname
          avatar_normal
        }
      }
      ... on Article {
        id
        title
        cover
        user {
          id
          slug
          nickname
          avatar_normal
        }
      }
    }
    rating_user_count
    test_org_count
    dimensions_score(id: $id) {
      name
      avg_score
    }
    is_shoes
    comments_count
    likes_count
    avg_score_rates
    user {
      id
      slug
      nickname
      avatar_normal
    }
    share_qrcode
    cover(version: "640x640")
  }
}
`

export const promotionGears = `
  query promotion_gears($id: Int!) {
    promotion_gears(id: $id) {
      id
      platform_name
      shop_name
      lowest_price
      gear_path
      url
      promo_code
      quality_assurance
      delivery_guarantee
      app_id
    }
  }
`

// 装备详情页中的简评
export const gearComments = `
query gear_comments($gear_id: Int,$sort: String, $page: Int, $per_page: Int) {
  gear_comments(gear_id: $gear_id, sort: $sort, page: $page, per_page: $per_page) {
    id
    body
    user {
      id
      slug
      nickname
      avatar_normal
      identification
      role
    }
    avg_score
    replies_count
    likes_count
  }
}
`

//  点赞列表
export const gearLikeList = `
query ($likable_id: ID!, $likable_type: LikableType!, $page: Int, $per_page: Int) {
  votes_list(likable_id: $likable_id, likable_type: $likable_type, page: $page, per_page: $per_page) {
    id
    published_at
    user {
      id
      slug
      avatar_normal
      identification
      role
      nickname
    }
  }
}
`
// 平台上传和用户上传的图片
export const gearPhotos = `
query gear_photos($gear_id: Int, $tab: String, $page: Int, $per_page: Int) {
  gear_photos(gear_id: $gear_id, tab: $tab, page: $page, per_page: $per_page) {
    id
    image_url
    count
    comment{
      id
      mode
      mode_name
      body_own_mode{
        tag_type
        tag_comment
      }
      body
    }
  }
}
`

// 装备参数
export const gearAttributes=`
query gear_attributes($id: ID) {
  gear(id: $id) {
    id
    price
    currency_unit
    colors
    cn_gender
    brand {
      id
      name
    }
    sale_time
    gear_attrs {
      name
      value
    }
  }
}
`

export const commentDetail = `
  query comment($id: ID!) {
    comment(id: $id) {
      id
      body
      avg_rating: avg_score
      user {
        id
        slug
        nickname
        avatar_normal
        identification
        role
      }
      gear {
        id
        title: name
        cover(version: "320x320")
        avg_score
        likes_count
        is_shoes
      }
      photos {
        image_url
      }
      replies_count
      likes_count
      ratings(is_shoes: true) {
        id: raty_id
        name
        score
      }
    }
  }
`
// 装备拥有退役想要--三个按钮的基本数据获取
export const  gearAndComment =  `
query gear_and_comment($id: ID, $mode: String, $is_shoes: Boolean) {
  gear(id: $id) {
    id
    name: display_name
    cover(version: "168x168")
    dimensions_score(id: $id) {
      name
      avg_score
    }
    avg_score
    gear_tags {
      id
      name
      checked
    }
    raties(is_shoes: $is_shoes) {
      id
      name
    }
    comment(mode: $mode) {
      id
      body
      ratings(is_shoes: $is_shoes) {
        id: raty_id
        name
        score
      }
      photos {
        id
        image
      }
    }
    body_want_mode
    body_own_mode{
      tag_type
      tag_comment
    }
    ratings_own_mode {
      name
      id: raty_id
      score
    }
    top_photo {
      id
      image_url(version: "660x360")
    }
    user {
      id
      slug
      nickname
      avatar_normal
      identification
      role
    }
  }
}
`

// 装备拥有退役想要--三个按钮的创建点评接口
export const createComment = `
mutation CreateComment($id: ID!, $is_shoes: Boolean!,$mode: String!, $ratings: [RatingInput], 
  $tag_list: [String], $body: String!, $photos: [String]) {
    CreateComment(input: {id: $id,is_shoes: $is_shoes, mode: $mode, ratings: $ratings, 
  tag_list: $tag_list, body: $body, photos: $photos}) {
      success
      field_errors {
        field
        messages
      }
    }
  }
`

// 装备拥有退役想要--三个按钮的修改点评接口
export const updateComment = `
mutation UpdateComment($id: ID!, $is_shoes: Boolean!,$mode: String!, 
  $ratings: [RatingInput], $tag_list: [String], $body: String!, $photos: [String]) {
    UpdateComment(input: {id: $id,is_shoes: $is_shoes, mode: $mode, 
  ratings: $ratings, tag_list: $tag_list, body: $body, photos: $photos}) {
      success
      field_errors {
        field
        messages
      }
    }
  }
`
// 添加标签 --- 》装备详情
export const createTag = `
mutation CreateTag($gear_id: Int!, $tag: String!) {
  CreateTag(input: {gear_id: $gear_id,tag: $tag}) {
    success
  }
}
`

// 点标签，数量加1
export const createTaggging= `
mutation CreateTaggging($tag_id: Int!, $gear_id: Int!) {
  CreateTagging(input: {tag_id: $tag_id, gear_id: $gear_id}) {
    success
  }
}
`

// 点标签，数量减1
export const deleteTagging= `
mutation DeleteTagging($tag_id: Int!, $gear_id: Int!) {
  DeleteTagging(input: {tag_id: $tag_id, gear_id: $gear_id}) {
    success
  }
}
`

// 燃烧众测查看更多
export const ranshaoTrials = `
query ranshao_trials($page: Int, $per_page: Int, $size: Int) {
  ranshao_trials(page: $page, per_page: $per_page) {
    id
    title
    product_name
    product_price
    cover
    status_text
    quantity
    trial_applies_count
    applicants: some_applicants(size: $size) {
      id
      slug
      avatar_small
    }
  }
}`

// 我的钱包---->我的商城券
export const mallCoupon = `
query ($page: Int, $per_page: Int){
  mine {
    eshop_coupon_codes(page: $page, per_page: $per_page) {
      code
      eshop_coupon {
        name
        expired_at
        amount
        desc
      }
    }
  }
}
`

//众测列表
export const  trialsList = `
query ranshao_trials($page: Int) {
  ranshao_trials(page: $page, per_page: 10) {
    id
    product_name
    title
    price: product_price
    cover
    status_text
    time_text
    quantity
    trial_applies_count
    applicants: some_applicants(size: 5) {
      id
      slug
      avatar_small
    }
  }
}`

// 我的钱包---->余额
export const balance = `
query {
  mine {
    wallet_balance
  }
}
`

// 众测申请页面
export const trialDetailApply = `
query trial($id: ID!) {
  me {
    avatar_normal
    avatar_small
  }
  trial(id: $id) {
    id
    product_name
    title
    cover
    price: product_price
    quantity
    trial_applies_count
    template
    mp_templates
    provider_name
    provider_avatar
    avatars: some_applicants(size: 5) {
      avatar_normal: avatar_small
    }
  }
}
`
// 众测详情
export const trialDetails = `
query trial($id: ID!, $page: Int, $per_page: Int, $apply_user_slug: String) {
  mine {
    avatar_normal
    avatar_small
  }
  trial(id: $id) {
    id
    product_name
    title
    cover
    price: product_price
    quantity
    trial_applies_count
    template
    mp_templates
    provider_name
    provider_avatar
    shared_cover
    shared_title
    provider_introduction: mp_provider_introduction
    purchase_link
    related_gear {
      id
      title: name
      price
      cover
    }
    related_race {
      id
      title: name
      cover: cover_url
    }
    description
    status_text
    time_text
    avatars: some_applicants(size: 5) {
      avatar_normal: avatar_small
    }
    approved_applicants {
      id
      slug
      nickname
      avatar_small
      identification
      role
    }
    diaries(page: $page, per_page: $per_page) {
      id
      title
      cover(version: "80x80")
      user {
        id
        slug
        nickname
        avatar_small
        identification
        role
      }
    }
    helpers(apply_user_slug: $apply_user_slug) {
      id
      slug
      nickname
      avatar_small
      identification
      role
    }
    replies_count
    replies(page: $page, per_page: $per_page) {
      id
      body
      published_at
      user {
        id
        slug
        nickname
        avatar_normal
        identification
        role
      }
    }
  }
}`

// 是否申请众测
export const trialAppliedByMe = `
query trial($id: ID!) {
  trial(id: $id) {
    applied_by_me
  }
}
`

// 众测讨论
export const trialReplies = `
query trial($id: ID!, $page: Int) {
  trial(id: $id) {
    replies(page: $page) {
      id
      body
      reply_to {
        id
        user {
          id
          slug
          nickname
          avatar_normal
          role
          identification
        }
      }
      user {
        id
        slug
        nickname
        avatar_normal
        role
        identification 
      }
    }
  }
}
`

// 申请众测
export const createTrialApply = `
mutation CreateTrialApply($trial_id: ID!,$reason: String!) {
  CreateTrialApply(input: {trial_id: $trial_id, reason: $reason}) {
    success
    field_errors {
      field
      messages
    }
  }
}`

// 我的钱包--可用商城券
export const availableMallCoupons = `
query {
  eshop_coupons {
    id
    name
    expired_at
    amount
    desc
    status
  }
}
`

// 我的钱包--交易明细
export const transactionDetails = `
query ($page: Int, $per_page: Int){
  mine {
    wallet_logs(page: $page, per_page: $per_page) {
      desc
      amount
      created_at
    }
  }
}
`

// 众测申请成功页面

export const successApplication = `
query trial($id: ID!, $page: Int, $per_page: Int) {
  trial(id: $id) {
    id
    trial_end_at: mp_trial_end_at
    current_user {
      id
      slug
      nickname
      avatar_normal
      identification
      role
    }
    approved_applicants {
      nickname
      avatar_small
    }
    applicants(page: $page, per_page: $per_page) {
      id
      slug
      nickname
      avatar_normal
      avatar_small
    }
  }
}`

// 我的钱包---兑换商城优惠券
export const redeemCoupons = `
mutation ($eshop_coupon_id: ID!) {
  CreateEshopCouponCode(input: {eshop_coupon_id: $eshop_coupon_id}) {
    success
    error
  }
}`

// 我的钱包
export const wallet = `
query {
  me {
    mobile
    wallet {
      balance
      bind_account
      bind_account_text
      bind_platform_text
      bind_platform
      bind_name
    }
  }
}`

export const bindWithdrawAccount = `
mutation($bind_account: String!, $code: String!, $bind_name: String!, $bind_platform: String!)  {
  BindWithdrawAccount(input: {bind_account: $bind_account, code: $code, bind_name: $bind_name, bind_platform: $bind_platform}) {
    success
    error
  }
}
`

export const sendWithdrawApply = `
mutation($amount: Float!, $code: String!)  {
  SendWithdrawApply(input: {amount: $amount, code: $code}) {
    success
    error
  }
}
`
// 将 格式为hh:mm:ss格式的时间 转换成 秒
export const timeToSecond = (time) => {
  const hour = time.split(':')[0]
  const min = time.split(':')[1]
  const sec = time.split(':')[2]
  return Number(hour * 3600) + Number(min * 60) + Number(sec)
}

// 将 秒 转换成 格式为hh:mm:ss格式的时间
export const secondToTime = (second) => {
  let t
  if (second > -1) {
    const hour = Math.floor(second / 3600)
    const min = Math.floor(second / 60) % 60
    const sec = second % 60
    if(hour < 10) {
      t = '0'+ hour + ":"
    } else {
      t = hour + ":"
    }
    if(min < 10){
      t += "0"
    }
    t += min + ":"
    if(sec < 10){
      t += "0" + sec
    } else {
      t += sec
    }
  }
  return t
}

// 将[{id: "", xx: "", yy: ""}, {id: "", xx: "", yy: ""}]的数组对象转换成map,即 {id: {id: "", xx: "", yy: ""}}
export const flattenArr = (arr: Array<any>, arrItemProperty1, arrItemProperty2: string):object => {
  return arr.reduce((map, item) => {
    if(arrItemProperty2 === 'start_date'){
      map[item[arrItemProperty1]] = item[arrItemProperty2].substring(0, item[arrItemProperty2].indexOf('-'))
    } else {
      map[item[arrItemProperty1]] = item[arrItemProperty2]
    }
    return map
  }, {})
}

// 对图片url处理,删掉!或者?后面的内容：（1）末尾带有类似于 ?340x340 图片大小限制字符；（2）末尾带有类似于 !680x680 图片大小限制字符
export const dealPhotoUrl = (photo: string): string => {
  const endIndex: number = (photo.indexOf('?') === -1) ? photo.indexOf('!') : photo.indexOf('?')
  if (endIndex !== -1){
    photo = photo.substring(0, endIndex)
  }
  return photo
}

//生成一个数组 [00, 01, ... , 59]，用于时间选择器
export const getTimeArr = (): Array<string> => {
  let timeArr: Array<string> = []
  for (let i = 0; i <= 9; i++) {
    timeArr.push(`0${i}`)
  }
  for (let i = 10; i < 60; i++) {
    timeArr.push(i.toString())
  }
  return timeArr
}

// 赛事详情中的按钮是否显示
export const isDisplayDeclarationBtn = (date): boolean => {
  let today = new Date()
  let start_date = new Date(date)
  return start_date >= today
}

// 判断当前日期是否过期，比赛已经结束，则返回true
export const timeExpired = (date) => {
  const today = new Date();
  const raceDate = new Date(date);
  return raceDate <= today;
};

// 装备首页 tabs的index对应id的Map
export const categoriesIndextoIdMap = new Map<number,number|string>([
  [0,'select_gear'],
  [1,'new_gear']
]);
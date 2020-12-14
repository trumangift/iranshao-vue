import Taro from '@tarojs/taro'
import React from 'react'
import { View, Text } from '@tarojs/components'

import './index.scss'

const Manifesto = ({ text, participationId }: any) => {

  const linkToDetail = () => {
    Taro.navigateTo({ url: `/pages/articleDetail/index?id=${participationId}&type=Participation` })
  }

  return (
    <View className='manifesto-container' onClick={linkToDetail}>
      <Text>{text}</Text>
    </View>
  )
}

export default Manifesto

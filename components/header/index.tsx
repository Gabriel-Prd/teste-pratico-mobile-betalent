import { Pressable, Text, View } from 'react-native'
import React from 'react'
import { style } from './styles'
import NotificationIcon from '../notificationIcon'

const Header = () => {
  return (
    <View style={style.container}>
      <Pressable style={style.buttonUser}>
        <Text style={{fontSize: 20, fontFamily: 'Helvetica'}}>CG</Text>
      </Pressable>

      <Pressable >
        <NotificationIcon count={2}/>
      </Pressable>
    </View>
  )
}

export default Header

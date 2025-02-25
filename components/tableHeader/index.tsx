import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { style } from './styles'

const TableHeader = () => {
  return (
   
      <View style={style.header}>
        <View style={style.photoColumn}>
            <Text style={style.headerText}>Foto</Text>

        </View>
        <View style={style.nameColumn}>
            <Text style={style.headerText}>Nome</Text>

        </View>
        <View style={style.iconColumn}>
            <Image
                source={require('../../assets/images/Circle.png')}
            />
        </View>

        </View>
     
  )
}

export default TableHeader


import { StyleSheet, View, StatusBar, Image } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '@/constants/theme'
import { useRouter} from 'expo-router'

const index = () => {
  const router = useRouter();
  useEffect(()=> {
    setTimeout(() => {
      router.push('/employees/employees')
    }, 2000)
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.bluePrimary} barStyle="light-content" />
      <Image
        resizeMode='contain'
        source={require('../../assets/images/LogoBetalent.png')}
      />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.bluePrimary,
    }
})
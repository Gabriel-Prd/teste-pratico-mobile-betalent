import { ScrollView, StatusBar, StyleSheet, Text, View, SafeAreaView, Platform} from 'react-native'
import { colors } from '@/constants/theme'
import { style } from "./styles"
import { useFonts } from 'expo-font'


import Header from '@/components/header'
import EmployeesScreen from '@/components/EmployeesScreen/EmployeesScreen'

const employees = () => {

  const [fontsLoaded] = useFonts({
    'Helvetica': require('../../../assets/fonts/Helvetica.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>;
  }

  return (

    <>
     {Platform.OS === "ios" && <View style={style.statusBar} />}
    <SafeAreaView style={style.safeArea}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <ScrollView
          style={style.scrollView}
          showsVerticalScrollIndicator={false}
      >
        
        <Header/>
        <Text style={{fontSize: 25, fontWeight: 'medium', fontFamily: 'Helvetica'}}>Funcionários</Text>
        <EmployeesScreen/>
          

      </ScrollView>
    </SafeAreaView>
    {Platform.OS === "ios" && <View style={style.bottomSafeArea} />}
    </>
  )
}

export default employees

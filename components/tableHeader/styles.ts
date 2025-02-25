import { colors } from "@/constants/theme"
import { StyleSheet } from "react-native"


export const style = StyleSheet.create({
      header: {
        marginTop: 8,
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.blue10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 1,
        borderColor: colors.grayNeutral10
      },
      headerText: {
        fontWeight: "bold",
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Helvetica'
      },
      photoColumn:{
        flex: 0.5,
      },
      nameColumn:{
        flex: 2.5,
        justifyContent: 'center'
      },
      iconColumn:{
        flex: 0.5,
        textAlign: 'right',
        alignItems: 'center'
      }


})
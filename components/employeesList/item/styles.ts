import { colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    pressable: {
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.white,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: colors.grayNeutral10
      },
      headerText: {
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
      },
      content:{
        overflow: "hidden",
        borderTopWidth: 0,
        borderWidth: 1,
        borderColor: colors.grayNeutral10,
        gap: 15,
        paddingBottom: 16
      },
      view:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingRight: 25
      },
      textInfo:{
        fontFamily: 'Helvetica',
        fontSize: 16
      }

})
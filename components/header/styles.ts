import { colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 40,
    },
    buttonUser:{
        width: 45,
        height: 45,
        backgroundColor: colors.grayNeutral05,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        
    },
    buttonNotification:{
        position: 'relative',
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
    countNotification:{
        borderRadius: 100,
        width: 15,
        height: 15,
        position: 'absolute',
        backgroundColor: colors.bluePrimary
    }
})    
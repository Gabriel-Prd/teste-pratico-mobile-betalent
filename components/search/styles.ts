import { colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: colors.grayNeutral05,
        justifyContent:'flex-start',
        alignItems: 'center',
        marginVertical: 16,
        paddingHorizontal: 16,
        height: 48,
        borderRadius: 50,
        gap: 5
    }
})
import { colors } from "@/constants/theme";
import { Platform, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#4A90E2",
      },
    scrollView:{
        flex: 1,
        backgroundColor: colors.white,
        padding: 16
    },
    statusBar: {
        height: Platform.OS === "ios" ? 50 : 0,
        backgroundColor: colors.white,
      },
      bottomSafeArea: {
        height: Platform.OS === "ios" ? 34 : 0,
        backgroundColor: colors.white,
      },
    
})
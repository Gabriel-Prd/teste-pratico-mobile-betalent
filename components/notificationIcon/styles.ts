import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
      position: 'relative',
      width: 45,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 100,
    },
    badge: {
      position: "absolute",
      top: 0,
      right: 0,
      backgroundColor: "blue",
      borderRadius: 20,
      width: 24,
      height: 24,
      justifyContent: "center",
      alignItems: "center",
    },
    badgeText: {
      color: "white",
      fontSize: 12,
      fontWeight: "bold",
    },
  });
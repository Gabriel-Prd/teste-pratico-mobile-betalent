import React from "react";
import { View, Text, Image } from "react-native";
import { style } from './styles'

export default function NotificationIcon({ count }: any) {
  return (
    <View style={style.container}>
      <Image
        source={require('../../assets/images/bell-notification.png')}
      />
      {count > 0 && (
        <View style={style.badge}>
          <Text style={style.badgeText}>
            {count < 10 ? `0${count}` : count}
          </Text>
        </View>
      )}
    </View>
  );
}



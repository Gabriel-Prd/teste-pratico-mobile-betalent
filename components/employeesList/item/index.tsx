import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { style } from "./styles";
import { employeesProps } from "..";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/constants/theme";

const EmployeesItem = ({ item }: { item: employeesProps }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const formatPhoneNumber = (phone: string) => {
    const cleaned = phone.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/);
    return match ? `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}` : phone;
  };

  return (
    <View>
      <TouchableOpacity
        onPress={toggleExpand}
        style={[style.pressable, { borderBottomWidth: expanded ? 0 : 1 }]}
      >
        <View style={style.photoColumn}>
          <Image source={{ uri: item.image }} style={{ width: 34, height: 34, borderRadius: 50 }} />
        </View>
        <View style={style.nameColumn}>
          <Text style={style.headerText}>{item.name}</Text>
        </View>
        <View style={style.iconColumn}>
          <Feather
            name={expanded ? "chevron-up" : "chevron-down"}
            size={32}
            color={colors.bluePrimary}
          />
        </View>
      </TouchableOpacity>
      {expanded && (
        <View style={style.content}>
          <View style={style.view}>
            <Text style={[style.textInfo, { fontWeight: "bold" }]}>Cargo</Text>
            <Text style={style.textInfo}>{item.job}</Text>
          </View>
          <View style={style.view}>
            <Text style={[style.textInfo, { fontWeight: "bold" }]}>Data de admissão</Text>
            <Text style={style.textInfo}>
              {String(new Date(item.admission_date).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              }))}
            </Text>
          </View>
          <View style={style.view}>
            <Text style={[style.textInfo, { fontWeight: "bold" }]}>Telefone</Text>
            <Text style={style.textInfo}>{String(formatPhoneNumber(item.phone))}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default EmployeesItem;

import { TextInput, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/theme';
import { style } from './styles';

interface SearchProps {
  search: string;
  onSearchChange: (text: string) => void;
}

const Search = ({ search, onSearchChange }: SearchProps) => {
  return (
    <View style={style.container}>
      <Ionicons name='search' size={24} color={colors.black} />
      <TextInput
        placeholder='Pesquisar'
        placeholderTextColor={colors.black}
        style={{ fontSize: 20, flex: 1 }}
        value={search}
        onChangeText={onSearchChange}
      />
    </View>
  );
};

export default Search;

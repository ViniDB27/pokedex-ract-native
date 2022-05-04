import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Platform } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 20px;
  padding-top: ${Platform.OS === "android" ? 30 : 0}px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  line-height: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.darkGray};
  margin-left: 10px;
`;

export const SearchArea = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding: 0 20px;
`;

export const Search = styled.TextInput`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  height: ${RFValue(24)}px;
  padding-left: 10px;
`;

export const Content = styled.View`
  margin-top: 20px;
  align-items: center;
  flex: 1;
`;

export const PokeList = styled.FlatList``;

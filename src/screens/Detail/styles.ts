import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

type PokeType = {
  type?: string;
};

export const Container = styled.SafeAreaView<PokeType>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    theme.colors.types[type] ?? theme.colors.darkGray};
  position: relative;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 24px;
`;

export const Main = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  line-height: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 10px;

  text-transform: capitalize;
`;

export const IconButton = styled(BorderlessButton as any)``;

export const Icon = styled(MaterialIcons as any)`
  font-size: 24px;
`;

export const Number = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  width: 95%;
  height: ${RFPercentage(65)}px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: auto auto 0;
  border-radius: 8px;

  align-items: center;
`;

export const Image = styled.Image`
  width: ${RFValue(200)}px;
  height: ${RFValue(200)}px;
  margin-top: -${RFValue(140)}px;
`;

export const TypeArea = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const TypeBox = styled.View<PokeType>`
  padding: 6px 10px;
  margin: 0px 10px;
  background-color: ${({ theme, type }) =>
    theme.colors.types[type] ?? theme.colors.darkGray};

  border-radius: 50px;
`;

export const Type = styled.Text`
  min-width: 50px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: capitalize;
`;

export const About = styled.Text<PokeType>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, type }) =>
    theme.colors.types[type] ?? theme.colors.darkGray};
  margin: 10px;
`;

export const Infor = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Weight = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const WTitleView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const WTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.darkGray};
  margin-left: 5px;
`;

export const WSpan = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.mediumGray};
  margin-top: 8px;
`;

export const Height = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  position: relative;

  border-left-color: ${({ theme }) => theme.colors.lightGray};
  border-left-width: 1px;

  border-right-color: ${({ theme }) => theme.colors.lightGray};
  border-right-width: 1px;
`;

export const HTitleView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.darkGray};
  margin-left: 5px;
`;

export const HSpan = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.mediumGray};
  margin-top: 8px;
`;

export const Moves = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const MText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const MSpan = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.mediumGray};
  margin-top: 8px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.darkGray};
  margin: 20px 30px;
`;

export const BaseTitle = styled.Text<PokeType>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  color: ${({ theme, type }) =>
    theme.colors.types[type] ?? theme.colors.darkGray};
  margin-bottom: 10px;
`;

export const BaseStatuArea = styled.View``;

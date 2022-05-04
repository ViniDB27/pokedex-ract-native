import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { RectButton } from "react-native-gesture-handler";

type PokeType = {
  type: string;
};

export const Container = styled(RectButton as any)<PokeType>`
  width: ${RFValue(100)}px;
  height: ${RFValue(110)}px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;

  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme, type }) =>
    theme.colors.types[type] ?? theme.colors.darkGray};

  margin-right: 5px;
  margin-bottom: 5px;

  overflow: hidden;
  padding: 0;
`;

export const Content = styled.View`
  flex: 1;
  position: relative;

  justify-content: flex-end;
  align-items: center;
  padding: 0px;
`;

export const Number = styled.Text<PokeType>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;

  color: ${({ theme, type }) =>
    theme.colors.types[type] ?? theme.colors.darkGray};

  position: absolute;
  top: 8px;
  right: 10px;
`;

export const Image = styled.Image`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
`;

export const Footer = styled.View<PokeType>`
  width: 100%;
  height: ${RFValue(24)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, type }) =>
    theme.colors.types[type] ?? theme.colors.darkGray};
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.white};
`;

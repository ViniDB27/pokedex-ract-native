import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { StatusBar } from "react-native";
import { StackActions } from "@react-navigation/native";

import {
  Container,
  Header,
  Main,
  Name,
  IconButton,
  Icon,
  Number,
  Content,
  Image,
  TypeArea,
  TypeBox,
  Type,
  About,
  Infor,
  Weight,
  WTitleView,
  WTitle,
  WSpan,
  Height,
  HTitleView,
  HTitle,
  HSpan,
  Moves,
  MText,
  MSpan,
  Description,
  BaseTitle,
  BaseStatuArea,
} from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

import PokeballSvg from "../../assets/images/pokeball.svg";
import WeightSvg from "../../assets/images/weight.svg";
import HeightSvg from "../../assets/images/height.svg";
import { usePokemon } from "../../hooks/pokemon";
import { CommonActions } from "@react-navigation/native";

interface type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface moves {
  move: {
    name: string;
  };
}
interface Pokemon {
  id: number;
  name: string;
  number: number;
  weight: number;
  height: number;
  image: string;
  types: type[];
  moves: moves[];
}

export function Detail({
  navigation,
  route: {
    params: { id },
  },
}) {
  const theme = useTheme();
  const { getPokemon } = usePokemon();

  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);

  async function loadPokemonDetails() {
    if (!id) {
      navigation.dispatch(CommonActions.goBack());
    }

    const pokemon = await getPokemon(id);
    setPokemon(pokemon);
  }

  useEffect(() => {
    loadPokemonDetails();
  }, []);

  function handleOpenDetailPokemon() {
    // const pushAction = StackActions.replace("Home");
    // navigation.dispatch(pushAction);
    navigation.dispatch(CommonActions.goBack());
  }

  return (
    <Container type={pokemon?.types ? pokemon?.types[0].type.name : null}>
      <StatusBar barStyle="light-content" />
      <PokeballSvg
        style={{
          position: "absolute",
          top: 55,
          right: 20,
        }}
        width={RFValue(250)}
        height={RFValue(250)}
        color={theme.colors.background}
      />
      <Header>
        <Main>
          <IconButton onPress={handleOpenDetailPokemon}>
            <Icon
              name="arrow-back"
              height={32}
              width={32}
              color={theme.colors.white}
            />
          </IconButton>
          <Name>{pokemon.name}</Name>
        </Main>
        <Number>#{pokemon.id}</Number>
      </Header>
      <Content>
        <Image
          source={{
            uri: pokemon.image,
          }}
        />
        <TypeArea>
          {pokemon?.types &&
            pokemon.types.map((tp) => (
              <TypeBox key={tp.slot} type={tp.type.name}>
                <Type>{tp.type.name}</Type>
              </TypeBox>
            ))}
        </TypeArea>
        <About type={pokemon?.types ? pokemon?.types[0].type.name : null}>
          About
        </About>
        <Infor>
          <Weight>
            <WTitleView>
              <WeightSvg width={24} height={24} color={theme.colors.darkGray} />
              <WTitle>{pokemon.weight / 10} Kg</WTitle>
            </WTitleView>
            <WSpan>Weight</WSpan>
          </Weight>
          <Height>
            <HTitleView>
              <HeightSvg width={12} height={24} color={theme.colors.darkGray} />
              <HTitle>{pokemon.height / 10} m</HTitle>
            </HTitleView>
            <HSpan>Height</HSpan>
          </Height>
          <Moves>
            <MText>{pokemon?.moves && pokemon?.moves[0].move.name}</MText>
            <MSpan>Moves</MSpan>
          </Moves>
        </Infor>
        <Description>
          There is a plant seed on its back right from the day this Pokémon is
          born. The seed slowly grows larger.
        </Description>
        <BaseTitle type={pokemon?.types ? pokemon?.types[0].type.name : null}>
          Base Stats
        </BaseTitle>
        <BaseStatuArea></BaseStatuArea>
      </Content>
    </Container>
  );
}

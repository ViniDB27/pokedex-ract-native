import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { StackActions } from "@react-navigation/native";

import {
  Container,
  Header,
  Title,
  SearchArea,
  Search,
  Content,
  PokeList,
} from "./styles";

import PokeballSvg from "../../assets/images/miniPokeball.svg";

import { PokeCard } from "../../components/PokeCard";

import { usePokemon } from "../../hooks/pokemon";

interface Pokemon {
  id: number;
  name: string;
  number: number;
  image: string;
  type: string;
}

export function Home({ navigation }) {
  const theme = useTheme();
  const { listPokemons } = usePokemon();

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  async function loadPokemons(offset = 0) {
    const pkms = await listPokemons(offset);
    setPokemons(pkms);
  }

  function oderPokeArray(array: Pokemon[]): Pokemon[] {
    return array.sort((a, b) => (a.id > b.id ? 1 : -1));
  }

  async function loadMorePokemons() {
    const pkms = await listPokemons(pokemons.length);
    setPokemons((oldPokemons) => oderPokeArray([...oldPokemons, ...pkms]));
  }

  useEffect(() => {
    loadPokemons();
  }, []);

  function handleOpenDetailPokemon(id: number) {
    const pushAction = StackActions.push("Detail", { id });
    navigation.dispatch(pushAction);
  }

  return (
    <Container>
      <Header>
        <PokeballSvg width={32} height={32} color={theme.colors.darkGray} />
        <Title>Pokédex</Title>
      </Header>
      <SearchArea>
        <Search placeholder="Procurar" />
      </SearchArea>

      <Content>
        <PokeList
          data={pokemons}
          numColumns={3}
          keyExtractor={(item: Pokemon) => String(item.id)}
          renderItem={({ item }) => (
            <PokeCard
              onPress={handleOpenDetailPokemon}
              pokemon={item as Pokemon}
            />
          )}
          showsVerticalScrollIndicator={false}
          onEndReached={loadMorePokemons}
          onEndReachedThreshold={0.1}
          contentContainerStyle={{ alignItems: "center" }}
        />
      </Content>
    </Container>
  );
}

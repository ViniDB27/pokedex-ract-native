import React from "react";

import { Container, Content, Number, Image, Footer, Name } from "./styles";

interface Pokemon {
  id: number;
  name: string;
  number: number;
  image: string;
  type: string;
}

interface PokeCardProps {
  pokemon: Pokemon;
  onPress?: (id: number) => void;
}

export function PokeCard({ pokemon, onPress }: PokeCardProps) {
  return (
    <Container onPress={() => onPress(pokemon.id)} type={pokemon.type}>
      <Content>
        <Number type={pokemon.type}>#{pokemon.number}</Number>
        <Image source={{ uri: pokemon.image }} resizeMode="contain" />
      </Content>
      <Footer type={pokemon.type}>
        <Name>{pokemon.name}</Name>
      </Footer>
    </Container>
  );
}

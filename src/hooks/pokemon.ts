import axios from "axios";
import { api } from "../services/api";

interface PokemonsAxiosResponse {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonsResponse[];
}

interface PokemonsResponse {
  id: number;
  name: string;
  number: number;
  image: string;
  type: string;
  url: string;
}

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

interface PokemonAxionsResponse {
  id: number;
  name: string;
  order: number;
  weight: number;
  height: number;
  types: type[];
  moves: moves[];
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
    "official-artwork": {
      front_default: string;
    };
  };
}

async function getPokemon(id: number) {
  const response = await api.get<PokemonAxionsResponse>(`pokemon/${id}`);
  const pkm = response.data;

  const pokemon = {
    id: pkm.id,
    name: pkm.name,
    number: pkm.id,
    weight: pkm.weight,
    height: pkm.height,
    image: pkm.sprites.other["official-artwork"]["front_default"],
    types: pkm.types,
    moves: pkm.moves,
  };

  return pokemon;
}

async function listPokemons(offset = 0, limit = 20) {
  const response = await api.get<PokemonsAxiosResponse>(
    `pokemon?limit=${limit}&offset=${offset}`
  );
  const pokemons = response.data.results;

  const pokemonsResponse: PokemonsResponse[] = [];

  const mapOfPokemon = new Map<string, PokemonsResponse>();

  for (const ipkm of pokemons) {
    const response = await axios.get<PokemonAxionsResponse>(ipkm.url);
    const pkm = response.data;

    const pokemon = {
      id: pkm.id,
      name: pkm.name,
      number: pkm.id,
      image: pkm.sprites.other["official-artwork"]["front_default"],
      type: pkm.types[0].type.name,
      url: ipkm.url,
    };

    mapOfPokemon.set(pokemon.id.toString(), pokemon);
  }

  mapOfPokemon.forEach((pokemon) => {
    pokemonsResponse.push(pokemon);
  });

  return pokemonsResponse;
}

export function usePokemon() {
  return {
    listPokemons,
    getPokemon,
  };
}

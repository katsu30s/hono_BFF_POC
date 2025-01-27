import { endpoint } from "@/constants/url.ts";
import type {
  Pokemon,
  FetchPokemonsResponse,
  PokemonListItem,
} from "@/features/Pokemon/pokemonTypes.ts";
import { PokemonService } from "@/generated/pokemon_pb.ts";

import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

const transport = createConnectTransport({
  baseUrl: "http://localhost:8080",
});

export const fetchPokemon = async (id: number): Promise<Pokemon> => {
  const client = createClient(PokemonService, transport);

  const res = await client.fetchPokemon({
    id: id,
  });

  return {
    id: res.id,
    name: res.name,
    baseExperience: res.baseExperience,
    height: res.height,
    isDefault: res.isDefault,
    order: res.order,
    weight: res.weight,
  }
};

export const pikachu: Pokemon = await fetchPokemon(25);

export const fetchPokemons = async (
  next?: string
): Promise<FetchPokemonsResponse> => {
  const url = next ? next : `${endpoint}/pokemon/?limit=20`;
  const response = await fetch(url);
  const json = await response.json();

  const pokemonList: PokemonListItem[] = json.results.map((pokemon: any) => {
    return {
      name: pokemon.name,
      url: pokemon.url,
    };
  });

  return {
    next: json.next,
    results: pokemonList,
  };
};

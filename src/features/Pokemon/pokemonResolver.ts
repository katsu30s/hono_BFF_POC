import {
  fetchPokemon,
  fetchPokemons,
  pikachu,
} from "@/features/Pokemon/pokemonService.ts";
import type { FetchPokemonsResponse, Pokemon } from "./pokemonTypes.ts";

export const pokemonQueryResolvers = {
  Query: {
    pikachu: (): Pokemon => pikachu,
    fetchPokemon: async (_: any, { id }: { id: number }): Promise<Pokemon> => {
      return await fetchPokemon(id);
    },
    fetchPokemons: async (_: any, { next }: { next: string }): Promise<FetchPokemonsResponse> => {
      return next ? await fetchPokemons(next) : await fetchPokemons();
    },
  },
};

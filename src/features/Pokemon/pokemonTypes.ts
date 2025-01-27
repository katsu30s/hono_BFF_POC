import type { PokemonResponse } from "@/generated/pokemon_pb.ts";

export type Pokemon = {
  id: PokemonResponse["id"];
  name: PokemonResponse["name"];
  baseExperience: PokemonResponse["baseExperience"];
  height: PokemonResponse["height"];
  isDefault: PokemonResponse["isDefault"];
  order: PokemonResponse["order"];
  weight: PokemonResponse["weight"];
};

export type PokemonListItem = {
  name: string;
  url: string;
};

export type FetchPokemonsResponse = {
  next: string;
  results: PokemonListItem[];
};

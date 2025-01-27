export const pokemonTypeDefs = `#graphql
  type Pokemon {
    id: Int
    name: String
    base_experience: Int
    height: Int
    is_default: Boolean
    order: Int
    weight: Int
  }

  type PokemonListItem {
    name: String
    url: String
  }

  type FetchPokemonsResponse {
    next: String
    results: [PokemonListItem]
  }

  type Query {
    pikachu: Pokemon
    fetchPokemon(id: Int!): Pokemon
    fetchPokemons(next: String): FetchPokemonsResponse
  }
`;

import { pokemonTypeDefs } from "@/features/Pokemon/pokemonScheme.ts";
import { pokemonQueryResolvers } from "@/features/Pokemon/pokemonResolver.ts";
import { machineTypeDefs } from "@/features/machine/machineScheme.ts";
import { machineQueryResolvers } from "@/features/machine/machineResolver.ts";
import { todoMutationResolvers } from "@/features/todo/todoResolver.ts";
import { todoTypeDefs } from "./todo/todoScheme.ts";
import { searchQueryResolvers } from "./search/searchResolver.ts";
import { searchTypeDefs } from "./search/searchScheme.ts";

export const typeDefs = [pokemonTypeDefs, machineTypeDefs, todoTypeDefs, searchTypeDefs];
export const resolvers = {
  Query: {
    ...pokemonQueryResolvers.Query,
    ...machineQueryResolvers,
    ...searchQueryResolvers.Query,
  },
  Mutation: {
    ...todoMutationResolvers,
  },
};

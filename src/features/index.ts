import { pokemonTypeDefs } from "@/features/Pokemon/pokemonScheme.ts";
import { pokemonQueryResolvers } from "@/features/Pokemon/pokemonResolver.ts";
import { machineTypeDefs } from "@/features/machine/machineScheme.ts";
import { machineQueryResolvers } from "@/features/machine/machineResolver.ts";
import { todoMutationResolvers } from "@/features/todo/todoResolver.ts";
import { todoTypeDefs } from "./todo/todoScheme.ts";

export const typeDefs = [pokemonTypeDefs, machineTypeDefs, todoTypeDefs];
export const resolvers = {
  Query: {
    ...pokemonQueryResolvers.Query,
    ...machineQueryResolvers,
  },
  Mutation: {
    ...todoMutationResolvers,
  },
};

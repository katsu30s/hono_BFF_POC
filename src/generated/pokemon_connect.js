// @generated by protoc-gen-connect-es v0.13.0
// @generated from file pokemon.proto (package pokemon.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { PokemonRequest, PokemonResponse } from "./pokemon_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service pokemon.v1.PokemonService
 */
export const PokemonService = {
  typeName: "pokemon.v1.PokemonService",
  methods: {
    /**
     * @generated from rpc pokemon.v1.PokemonService.FetchPokemon
     */
    fetchPokemon: {
      name: "FetchPokemon",
      I: PokemonRequest,
      O: PokemonResponse,
      kind: MethodKind.Unary,
    },
  }
};


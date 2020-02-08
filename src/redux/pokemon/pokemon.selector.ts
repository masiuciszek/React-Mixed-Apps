import { createSelector } from 'reselect';
import { AppState } from '..';
import { IPokemonState } from './pokemon.types';


const selectPokemon = (state: AppState) => state.pokemons;


export const selectPokemons = createSelector(
  [selectPokemon],
  (pokemon: IPokemonState) => pokemon.pokemons,
);
export const selectLoading = createSelector(
  [selectPokemon],
  (pokemon: IPokemonState) => pokemon.loading,
);

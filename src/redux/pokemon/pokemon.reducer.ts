import { PokemonActionTypes, IPokemonState, ActionTypesPokemon } from './pokemon.types';

const initialState: IPokemonState = {
  pokemons: null,
  gender: [],
  loading: true,
};


export default (state: IPokemonState = initialState, action: PokemonActionTypes) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypesPokemon.GET_POKEMONS:
      return {
        ...state,
        pokemons: payload,
        loading: false,
      };

    default:
      return state;
  }
};

import { Dispatch } from 'redux';
import {
  IPokemon, GetPokemonsAction, ActionTypesPokemon, FetchFailedAction,
} from './pokemon.types';


export const fetchField = (errorMessage: object): FetchFailedAction => ({
  type: ActionTypesPokemon.FETCH_FAILED,
  payload: errorMessage,
});


export const getPokemons = () => async (dispatch: Dispatch<GetPokemonsAction>) => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon');
    const resBody = await res.json();
    dispatch({
      type: ActionTypesPokemon.GET_POKEMONS,
      payload: resBody,
    });
  } catch (err) {
    fetchField(err);
    console.error(err.message);
  }
};

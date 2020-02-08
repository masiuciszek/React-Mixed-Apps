import { Dispatch } from 'redux';
import {
  FetchFailedAction, ActionTypesStarWars, GetCharacterAction,
} from './sw.types';


export const fetchField = (errorMessage: object): FetchFailedAction => ({
  type: ActionTypesStarWars.FAILED_FETCH,
  payload: errorMessage,
});


export const getPokemons = (number: number) => async (dispatch: Dispatch<GetCharacterAction>) => {
  try {
    const res = await fetch(`https://swapi.co/api/people/${number}`);
    const resBody = await res.json();
    dispatch({
      type: ActionTypesStarWars.GET_PERSON,
      payload: resBody,
    });
  } catch (err) {
    fetchField(err);
    console.error(err.message);
  }
};

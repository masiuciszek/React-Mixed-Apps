/* eslint-disable import/extensions */
import { IJokeState, ActionTypesJokes, JokeActionTypes } from './jokes.types';

const initialState: IJokeState = {
  joke: null,
  jokesXS: [],
  loading: true,
  error: null,
};

export default (state: IJokeState = initialState, action: JokeActionTypes) => {
  switch (action.type) {
    case ActionTypesJokes.FETCH_JOKE:
      return {
        ...state,
        joke: action.payload,
        loading: false,
      };
    case ActionTypesJokes.ADD_JOKES:
      return {
        ...state,
        jokesXS: [...state.jokesXS, action.payload],
        loading: false,
      };
    case ActionTypesJokes.FETCH_JOKE_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
import { IJokeState, ActionTypesJokes, JokeActionTypes } from './jokes.types';

const initialState: IJokeState = {
  jokes: [],
  loading: true,
  error: null,
  votes: 0,
};

export default (state: IJokeState = initialState, action: JokeActionTypes) => {
  switch (action.type) {
    case ActionTypesJokes.FETCH_JOKE:
      return {
        ...state,
        jokes: action.payload,
        loading: false,
      };
    case ActionTypesJokes.LIKE_JOKE:
      return {
        ...state,
        jokes: state.jokes.map((j) => (j.id === action.payload ? { ...j, votes: j.votes + 1 } : j)),
      };
    case ActionTypesJokes.DISLIKE_JOKE:
      return {
        ...state,
        jokes: state.jokes.map((j) => (j.id === action.payload ? { ...j, votes: j.votes - 1 } : j)),
      };
    case ActionTypesJokes.CLEAN_JOKES:
      return {
        ...state,
        jokes: state.jokes = [],
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

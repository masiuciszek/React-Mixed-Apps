import { IJokeState, ActionTypesJokes, CardActionTypes } from './jokes.types';

const initialState: IJokeState = {
  jokes: [],
  loading: true,
  error: null,
};

export default (state: IJokeState = initialState, action: CardActionTypes) => {
  switch (action.type) {
    case ActionTypesJokes.FETCH_JOKE:
      return {
        ...state,
        jokes: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

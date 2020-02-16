import { createSelector } from 'reselect';
import { AppState } from '..';
import { IJokeState } from './jokes.types';


const selectJokes = (state: AppState) => state.jokes;


export const selectJokesList = createSelector(
  [selectJokes],
  (joke: IJokeState) => joke.jokes,
);


export const selectJokesLoading = createSelector(
  [selectJokes],
  (joke: IJokeState) => joke.loading,
);

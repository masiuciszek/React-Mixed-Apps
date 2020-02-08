/* eslint-disable import/extensions */
import { createSelector } from 'reselect';
import { AppState } from '..';
import { ISwState } from './sw.types';


const selectStarWars = (state: AppState) => state.starWars;


export const selectStarWarsChar = createSelector(
  [selectStarWars],
  (char: ISwState) => char.person,
);
export const selectLoading = createSelector(
  [selectStarWars],
  (state: ISwState) => state.loading,
);

import { createSelector } from 'reselect';
import { AppState } from '../index';
import { ICardState } from './card.types';

const selectCards = (state: AppState) => state.cards;


export const getDeckSelect = createSelector(
  [selectCards],
  (card: ICardState) => card.deck,
);

export const getCardsSelect = createSelector(
  [selectCards],
  (card: ICardState) => card.cards,
);

export const loadingSelect = createSelector(
  [selectCards],
  (card: ICardState) => card.loading,
);

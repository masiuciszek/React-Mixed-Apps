import { createSelector } from 'reselect';
import { IMealState } from './meal.types';
import { AppState } from '..';

const selectMeals = (state: AppState) => state.meals;


export const selectCategories = createSelector(
  [selectMeals],
  (state: IMealState) => state.categories,
);

export const selectMealLoading = createSelector(
  [selectMeals],
  (state: IMealState) => state.loading,
);

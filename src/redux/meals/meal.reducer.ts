/* eslint-disable import/extensions */
import { IMealState, MealActionTypes, ActionTypesMeals } from './meal.types';

const initialState: IMealState = {
  meals: [],
  meal: null,
  categories: [],
  ingredient: null,
  loading: true,
  error: null,
};


export default (state: IMealState = initialState, action: MealActionTypes) => {
  switch (action.type) {
    case ActionTypesMeals.GET_MEAL:
    case ActionTypesMeals.GET_RANDOM_MEAL:
      return {
        ...state,
        meal: action.payload,
        loading: false,
      };
    case ActionTypesMeals.GET_MEAL_BY_LETTER:
    case ActionTypesMeals.GET_MEAL_BY_NAME:
      return {
        ...state,
        meals: action.payload,
        loading: false,
      };
    case ActionTypesMeals.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case ActionTypesMeals.CLEAR_SEARCH:
      return {
        ...state,
        meals: [],
      };
    case ActionTypesMeals.GET_MEAL_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

/* eslint-disable @typescript-eslint/class-name-casing */
/* eslint-disable @typescript-eslint/interface-name-prefix */
export interface IMeal {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: null | any;
  strCategory: string;
  strArea: string;
  strInstructions: string;
}

export interface IIngredient {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}
export interface IMealState {
  meals: IMeal[];
  meal: IMeal | null;
  ingredient: IIngredient | null;
  loading: boolean;
  error: null;
}


export enum ActionTypesMeals {
  GET_MEAL = 'GET_MEAL',
  GET_RANDOM_MEAL = 'GET_RANDOM_MEAL',
  GET_MEAL_BY_LETTER = 'GET_MEAL_BY_LETTER',
  GET_MEAL_FAILED = 'GET_MEAL_FAILED',
}

export interface GetMealAction {
  type: ActionTypesMeals.GET_MEAL;
  payload: IMeal;
}

export interface GetMealRandomMealAction {
  type: ActionTypesMeals.GET_RANDOM_MEAL;
  payload: IMeal;
}


export interface GetMealByLetterAction {
  type: ActionTypesMeals.GET_MEAL_BY_LETTER;
  payload: IMeal[];
}


export interface GetMealFailed {
  type: ActionTypesMeals.GET_MEAL_FAILED;
  payload: Record<string, any>;
}

export type MealActionTypes =
 GetMealAction |
 GetMealRandomMealAction |
 GetMealFailed|
 GetMealByLetterAction

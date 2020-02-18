import axios from 'axios';
import { Dispatch } from 'react';
import {
  ActionTypesMeals, GetMealRandomMealAction,
  ClearSearchAction,
  GetMealFailed, GetMealByLetterAction, GetCategoriesAction, GetMealsByNameAction,
} from './meal.types';

export const catchErr = (err: Record<string, any>): GetMealFailed => (
  { type: ActionTypesMeals.GET_MEAL_FAILED, payload: err }
);


export const GetRandomMeal = () => async (dispatch: Dispatch<GetMealRandomMealAction>) => {
  try {
    const res = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
    const resBody = await res.data.meals;
    dispatch({
      type: ActionTypesMeals.GET_RANDOM_MEAL,
      payload: resBody,
    });
  } catch (err) {
    console.error(err);
    catchErr(err);
  }
};


export const getMealByLetter = (letter: string) => async (
  dispatch: Dispatch<GetMealByLetterAction>): Promise<void> => {
  try {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
    const resBody = await res.data;
    dispatch({
      type: ActionTypesMeals.GET_MEAL_BY_LETTER,
      payload: resBody,
    });
  } catch (err) {
    console.error(err);
    catchErr(err);
  }
};


export const getMealByCategories = () => async (
  dispatch: Dispatch<GetCategoriesAction>): Promise<void> => {
  try {
    const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    const resBody = await res.data;
    dispatch({
      type: ActionTypesMeals.GET_CATEGORIES,
      payload: resBody.categories,
    });
  } catch (err) {
    console.error(err);
    catchErr(err);
  }
};

export const getMealByName = (mealName: string) => async (
  dispatch: Dispatch<GetMealsByNameAction>): Promise<void> => {
  try {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
    const resBody = await res.data;
    dispatch({
      type: ActionTypesMeals.GET_MEAL_BY_NAME,
      payload: resBody.meals,
    });
  } catch (err) {
    console.error(err);
    catchErr(err);
  }
};

export const clearMeals = (): ClearSearchAction => ({
  type: ActionTypesMeals.CLEAR_SEARCH,
});

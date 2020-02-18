/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import * as React from 'react';

import { StyledMeal } from './Styled.Meal';
import SearchBar from './SearchBar';
import Title from '../styled/title/Title';
import Categories from './category/Categories';
import { IMeal } from '../../redux/meals/meal.types';

import MealItem from './MealItem';

interface P {
  mealList: IMeal[];
  loading: boolean;
}

const MealComp: React.FC<P> = ({ loading, mealList }) => (

  <StyledMeal>
    <Title mainTitle="Meals DB APP" color="#D9CB9E" size="4rem" />
    <SearchBar mealList={mealList} />
    {!loading && mealList !== null && mealList.map(
      (meal) => <MealItem key={meal.idMeal} meal={meal} />,
    ) }
    <Categories />
  </StyledMeal>
);


export default MealComp;

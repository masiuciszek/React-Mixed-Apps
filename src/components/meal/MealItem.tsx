import * as React from 'react';
import { IMeal } from '../../redux/meals/meal.types';

interface P {
  meal: IMeal;
}

const MealItem: React.FC<P> = ({ meal }) => {
  const { strMeal } = meal;
  return (
    <div>
      {' '}
      <h1>
        {' '}
        {strMeal}
        {' '}
      </h1>
      {' '}
    </div>
  );
};
export default MealItem;

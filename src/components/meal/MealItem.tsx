/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { IMeal } from '../../redux/meals/meal.types';
import { StyledMealItem, StyledMealItemHeader, StyledMealItemBody } from './Styled.Meal';
import useToggle from '../../hooks/useToggle';

interface P {
  meal: IMeal;
}

const MealItem: React.FC<P> = ({ meal }) => {
  const [showDesc, toggleDesc] = useToggle(false);
  const {
    strMeal, strArea, strCategory, strInstructions, strMealThumb,
  } = meal;

  return (
    <StyledMealItem>
      <StyledMealItemHeader>
        <div className="overlay" />
        <img src={strMealThumb} alt={strMeal} />
      </StyledMealItemHeader>

      <StyledMealItemBody className="body">

        <h4>
          Meal:
          {' '}
          {strMeal}
        </h4>
        <span>
          {strArea}
          {' '}
          -
          {' '}
          {strCategory}
        </span>
        <span id="showDesc" onClick={toggleDesc}>⬇</span>
        {showDesc && (
          <p>
            {strInstructions.slice(0, 100)}
            ...
          </p>
        )}
      </StyledMealItemBody>
    </StyledMealItem>
  );
};
export default MealItem;

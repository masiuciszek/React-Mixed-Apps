/* eslint-disable react/prop-types */
import * as React from 'react';
import { IFoodCategory } from '../../../redux/meals/meal.types';
import { StyledCategoryItem, StyledCategoryItemHeader, StyledCategoryItemBody } from './style.category';
import useToggle from '../../../hooks/useToggle';

interface P {
  category: IFoodCategory;
}

const CateGoreItem: React.FC<P> = ({ category }) => {
  const { strCategory, strCategoryDescription, strCategoryThumb } = category;
  const [showDesc, toggleDesc] = useToggle(false);
  return (
    <StyledCategoryItem>
      <StyledCategoryItemHeader>
        <img src={strCategoryThumb} alt={strCategory} />
        <span>
          {strCategory}
          {' '}
          <span onClick={toggleDesc}>&#8595;</span>
          {' '}
        </span>
      </StyledCategoryItemHeader>

      <StyledCategoryItemBody>
        {showDesc && (
          <p>
            {strCategoryDescription.slice(0, 100)}
            ...
          </p>
        ) }


      </StyledCategoryItemBody>
    </StyledCategoryItem>
  );
};
export default CateGoreItem;

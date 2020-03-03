/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import * as React from 'react';
import { connect } from 'react-redux';
import { StyledSearchBar, StyledIcon, StyledSearchWrapper } from './Styled.Meal';
import { getMealByName, clearMeals } from '../../redux/meals/mealActions';
import { IMeal } from '../../redux/meals/meal.types';
import useToggle from '../../hooks/useToggle';

interface P {
  getMealByName: Function;
  clearMeals: () => void;
  mealList: IMeal[];
}

const SearchBar: React.FC<P> = ({ getMealByName, clearMeals, mealList }) => {
  const [textValue, setTextValue] = React.useState('');
  const [showSearchBar, toggleSearchBar] = useToggle(false);
  React.useEffect(() => {
    if (mealList === [] || mealList === null) {
      setTextValue('');
    }
  }, []);

  const handleSearchMealName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTextValue(e.target.value);
    if (e.target.value !== '') {
      getMealByName(textValue);
    } else {
      clearMeals();
    }
  };


  return (
    <>
      <StyledSearchWrapper>
        <StyledIcon>
          <span onClick={toggleSearchBar}>Search</span>
        </StyledIcon>
        {
          showSearchBar && (
            <StyledSearchBar onChange={handleSearchMealName} placeholder="meal" value={textValue} />
          )

        }
      </StyledSearchWrapper>
    </>
  );
};


export default connect(null, { getMealByName, clearMeals })(SearchBar);

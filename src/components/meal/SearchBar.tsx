/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import * as React from 'react';
import { connect } from 'react-redux';
import { StyledSearchBar } from './Styled.Meal';
import { getMealByName, clearMeals } from '../../redux/meals/mealActions';
import { IMeal } from '../../redux/meals/meal.types';

interface P {
  getMealByName: Function;
  clearMeals: () => void;
  mealList: IMeal[];
}

const SearchBar: React.FC<P> = ({ getMealByName, clearMeals, mealList }) => {
  const [textValue, setTextValue] = React.useState('');
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
      <StyledSearchBar onChange={handleSearchMealName} placeholder="meal" value={textValue} />
    </>
  );
};


export default connect(null, { getMealByName, clearMeals })(SearchBar);

/* eslint-disable no-shadow */
import * as React from 'react';
import { connect } from 'react-redux';
import { StyledSearchBar } from './Styled.Meal';
import { getMealByLetter } from '../../redux/meals/mealActions';

interface P {
  getMealByLetter: Function;
}

const SearchBar: React.FC<P> = ({ getMealByLetter }) => {
  let a;
  return (
    <>

      <StyledSearchBar onChange={(e) => getMealByLetter(e.target.value)} placeholder="Search for a meal" />

    </>
  );
};

export default connect(null, { getMealByLetter })(SearchBar);

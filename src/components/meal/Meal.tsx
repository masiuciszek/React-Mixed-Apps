/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import * as React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { StyledMeal } from './Styled.Meal';
import SearchBar from './SearchBar';
import Title from '../styled/title/Title';
import Categories from './category/Categories';


interface P {

}

const MealComp: React.FC<P> = () => {
  const [m, setM] = React.useState(null);


  React.useEffect(() => {
    const fetchByLetter = async (letter: string) => {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
      const b = await res.data.meals;
      setM(b);
    };

    fetchByLetter('l');
  }, []);


  return (
    <StyledMeal>
      <Title mainTitle="Meals DB APP" color="#fe3" size="4rem" />
      <SearchBar />
      <Categories />
    </StyledMeal>
  );
};


export default connect(null)(MealComp);

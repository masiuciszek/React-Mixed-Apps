/* eslint-disable no-shadow */
import * as React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { StyledMeal } from './Styled.Meal';
import SearchBar from './SearchBar';
import Title from '../styled/title/Title';
import { getMealByLetter } from '../../redux/meals/mealActions';


interface P {

}

const MealComp: React.FC<P> = () => {
  const [state, setState] = React.useState(null);
  const [m, setM] = React.useState(null);


  React.useEffect(() => {
    const fetchRandomMeal = async () => {
      const res = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      const body = await res.data.meals;
      setState(body);
    };
    const fetchByLetter = async (letter: string) => {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
      const b = await res.data.meals;
      setM(b);
    };
    fetchRandomMeal();
    fetchByLetter('l');
  }, []);

  console.log(state);
  console.log(m);

  return (
    <StyledMeal>
      <Title mainTitle="Meals DB APP" color="#fe3" size="4rem" />
      <SearchBar />

    </StyledMeal>
  );
};


export default connect(null)(MealComp);

/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../../redux';
import { selectCategories, selectMealLoading } from '../../../redux/meals/meal.select';
import { getMealByCategories } from '../../../redux/meals/mealActions';
import { IFoodCategory } from '../../../redux/meals/meal.types';
import CateGoreItem from './CateGoreItem';
import Spinner from '../../styled/Spinner';
import { StyledCategory } from './style.category';
import useToggle from '../../../hooks/useToggle';
import { StyledBtn } from '../../styled/Buttons';

interface P {
  foodCategories: IFoodCategory[];
  getMealByCategories: Function;
  loading: boolean;
}

const Categories: React.FC<P> = ({ foodCategories, getMealByCategories, loading }) => {
  React.useEffect(() => {
    getMealByCategories();
  }, []);

  const [showCategories, toggleCategories] = useToggle(false);

  return (
    <>
      <StyledCategory>
        <StyledBtn id="CategoriesBtn" onClick={toggleCategories}>Categories</StyledBtn>
        {
          showCategories && (
            !loading && foodCategories.length > 0 ? foodCategories.map(
              (f) => <CateGoreItem key={f.idCategory} category={f} />,
            ) : <Spinner />

          )
        }
      </StyledCategory>
    </>
  );
};


const mapStateToProps = (state: AppState) => ({
  foodCategories: selectCategories(state),
  loading: selectMealLoading(state),
});
export default connect(mapStateToProps, { getMealByCategories })(Categories);

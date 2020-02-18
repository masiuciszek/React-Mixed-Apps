import * as React from 'react';
import { connect } from 'react-redux';
import MealComp from '../components/meal/Meal';
import { PageWrapper, BgWrapper } from '../components/styled/Wrappers';
import { selectMealList, selectMealLoading } from '../redux/meals/meal.select';
import { AppState } from '../redux';
import { IMeal } from '../redux/meals/meal.types';

interface P {
  mealsList: IMeal[];
  loading: boolean;
}

const Meal: React.FC<P> = ({ mealsList, loading }) => (
  <>
    <BgWrapper bg="#37474F">
      <PageWrapper>
        <MealComp mealList={mealsList} loading={loading} />
      </PageWrapper>
    </BgWrapper>
  </>
);

const mapStateToProps = (state: AppState) => ({
  mealsList: selectMealList(state),
  loading: selectMealLoading(state),
});

export default connect(mapStateToProps)(Meal);

import * as React from 'react';
import MealComp from '../components/meal/Meal';
import { PageWrapper, BgWrapper } from '../components/styled/Wrappers';

interface P {

}

const Meal: React.FC<P> = () => (
  <>
    <BgWrapper bg="#37474F">
      <PageWrapper>
        <MealComp />
      </PageWrapper>
    </BgWrapper>
  </>
);
export default Meal;

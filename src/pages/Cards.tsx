import * as React from 'react';
import CardComp from '../components/cards/Cards';
import { PageWrapper } from '../components/styled/Wrappers';

interface P {

}

const CardsPage: React.FC<P> = () => (
  <>
    <PageWrapper>
      <CardComp />
    </PageWrapper>
  </>
);
export default CardsPage;

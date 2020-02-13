import * as React from 'react';
import CardComp from '../components/cards/Cards';
import { PageWrapper, BgWrapper } from '../components/styled/Wrappers';

interface P {

}

const CardsPage: React.FC<P> = () => (
  <>
    <BgWrapper bg="#333">
      <PageWrapper>
        <CardComp />
      </PageWrapper>
    </BgWrapper>
  </>
);
export default CardsPage;

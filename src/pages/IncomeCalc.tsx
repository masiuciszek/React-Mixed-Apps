import * as React from 'react';
import IncomeCalc from '../components/incomeCalc/IncomeCalc';
import { PageWrapper, BgWrapper } from '../components/styled/Wrappers';

interface P {

}

const IncomeCalcPage: React.FC<P> = () => (
  <>
    <BgWrapper>
      <PageWrapper>
        <IncomeCalc />
      </PageWrapper>
    </BgWrapper>
  </>
);
export default IncomeCalcPage;

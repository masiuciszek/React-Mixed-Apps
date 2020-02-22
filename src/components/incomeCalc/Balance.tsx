import * as React from 'react';
import { StyledBalance } from './Styles.income';

interface P {

}

const Balance: React.FC<P> = () => {
  let a;
  return (
    <StyledBalance>
      <h3>Balance: 576.76$</h3>
    </StyledBalance>
  );
};
export default Balance;

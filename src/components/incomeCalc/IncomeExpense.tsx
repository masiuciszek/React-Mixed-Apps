/* eslint-disable import/extensions */
import * as React from 'react';
import { StyledIncomeExpense } from './Styles.income';

interface P {

}

const IncomeExpense: React.FC<P> = () => {
  let a;
  return (
    <StyledIncomeExpense>
      <div className="box">
        <h4>Income</h4>
        <span id="income">500$</span>
      </div>

      <div className="box">
        <h4>Expense</h4>
        <span id="expense">240$</span>
      </div>
    </StyledIncomeExpense>
  );
};
export default IncomeExpense;

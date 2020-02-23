/* eslint-disable import/extensions */
import * as React from 'react';
import { connect } from 'react-redux';
import { StyledIncomeExpense } from './Styles.income';
import { AppState } from '../../redux';
import { selectCalculateExpense, selectCalculateIncome } from '../../redux/incomeCalc/income.select';

interface P {
  expense: number;
  income: number;
}

const IncomeExpense: React.FC<P> = ({ expense, income }) => (
  <StyledIncomeExpense>
    <div className="box">
      <h4>Income</h4>
      <span id="income">
        {income}
        $
      </span>
    </div>

    <div className="box">
      <h4>Expense</h4>
      <span id="expense">
        {expense}
        $
      </span>
    </div>
  </StyledIncomeExpense>
);
const mapStateToProps = (state: AppState) => ({
  expense: selectCalculateExpense(state),
  income: selectCalculateIncome(state),
});
export default connect(mapStateToProps)(IncomeExpense);

/* eslint-disable react/prop-types */
import * as React from 'react';
import { connect } from 'react-redux';
import { StyledBalance } from './Styles.income';
import { AppState } from '../../redux';
import { selectBalance } from '../../redux/incomeCalc/income.select';

interface P {
  currentBalance: number;
}

const Balance: React.FC<P> = ({ currentBalance }) => (
  <StyledBalance>
    <h3>
      Balance:
      {' '}
      {currentBalance}
      $
    </h3>
  </StyledBalance>
);

const mapStateToProps = (state: AppState) => ({
  currentBalance: selectBalance(state),
});
export default connect(mapStateToProps)(Balance);

/* eslint-disable import/extensions */
import * as React from 'react';
import Title from '../styled/title/Title';
import Balance from './Balance';
import IncomeExpense from './IncomeExpense';
import { StyledIncomeCalc } from './Styles.income';
import TransactionList from './transactionList/TransactionList';
import TransactionForm from './transactionList/TransactionForm';

interface P {

}

const IncomeCalc: React.FC<P> = () => (
  <>

    <StyledIncomeCalc>
      <Title mainTitle="Income Calculator" color="#333" />
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <TransactionForm />
    </StyledIncomeCalc>

  </>
);
export default IncomeCalc;

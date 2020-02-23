/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
import * as React from 'react';
import { connect } from 'react-redux';
import { getTransactionsSelect } from '../../../redux/incomeCalc/income.select';
import { StyleTransactionList } from '../Styles.income';
import TransactionItem from './TransactionItem';
import { ITransactionItem } from '../../../utils/incomeData';
import { AppState } from '../../../redux';
import { getTransactions } from '../../../redux/incomeCalc/income.actions';

interface P {
  transactions: ITransactionItem[];
  getTransactions: Function;
}


const TransactionList: React.FC<P> = ({ transactions, getTransactions }) => {
  React.useEffect(() => {
    getTransactions();
  }, []);

  return (
    <StyleTransactionList>
      {transactions.map((x) => <TransactionItem key={x.id} data={x} />)}
    </StyleTransactionList>
  );
};


const mapStateToProps = (state: AppState) => ({
  transactions: getTransactionsSelect(state),
});

export default connect(mapStateToProps, { getTransactions })(TransactionList);

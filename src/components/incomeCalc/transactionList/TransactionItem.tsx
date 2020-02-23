/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { connect } from 'react-redux';
import { ITransactionItem } from '../../../utils/incomeData';
import { StyleTransactionItem } from '../Styles.income';
import { deleteTransaction } from '../../../redux/incomeCalc/income.actions';

interface P {
  data: ITransactionItem;
  deleteTransaction: Function;
}

const TransactionItem: React.FC<P> = ({ data, deleteTransaction }) => {
  const { id, title, amount } = data;

  const handleDelete = () => {
    const answer = prompt('are you sure you want to delete? Enter yes or no ! ');
    if (answer === 'yes') {
      deleteTransaction(id);
    }
  };


  return (
    <StyleTransactionItem amount={amount}>
      {' '}
      <h4 onClick={handleDelete}>
        {title}
      </h4>
      <h4>
        {amount}
        <span className="label" />
      </h4>
      {' '}
    </StyleTransactionItem>
  );
};


export default connect(null, { deleteTransaction })(TransactionItem);

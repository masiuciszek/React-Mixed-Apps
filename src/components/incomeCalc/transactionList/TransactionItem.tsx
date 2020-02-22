/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { ITransaction } from './TransactionList';
import { StyleTransactionItem } from '../Styles.income';

interface P {
  data: ITransaction;
}

const TransactionItem: React.FC<P> = ({ data }) => {
  const { title, amount } = data;
  return (
    <StyleTransactionItem amount={amount}>
      {' '}
      <h4>
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
export default TransactionItem;

import * as React from 'react';
import uuid from 'uuid/v4';
import { StyleTransactionList } from '../Styles.income';
import TransactionItem from './TransactionItem';

interface P {

}

export interface ITransaction {
  id: string;
  title: string;
  amount: number;
}

const TransactionList: React.FC<P> = () => {
  const [transactions, setTransactions] = React.useState<ITransaction[]>([
    {
      id: uuid(),
      title: 'Vacation',
      amount: -300,
    },
    {
      id: uuid(),
      title: 'income',
      amount: +1200,
    },
    {
      id: uuid(),
      title: 'Lunch',
      amount: -5,
    },
    {
      id: uuid(),
      title: 'book',
      amount: -5,
    },
  ]);
  return (
    <StyleTransactionList>
      {transactions.map((x) => <TransactionItem key={x.id} data={x} />)}
    </StyleTransactionList>
  );
};
export default TransactionList;

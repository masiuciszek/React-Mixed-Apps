/* eslint-disable @typescript-eslint/interface-name-prefix */
import uuid from 'uuid/v4';

export interface ITransactionItem {
  id: string;
  title: string;
  amount: number;
}

const incomeData: ITransactionItem[] = [
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
];


export default incomeData;

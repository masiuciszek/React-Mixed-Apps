import { ITransactionItem } from '../../utils/incomeData';


export const calculateExpense = (data: ITransactionItem[]) => data.map(
  (x) => (x.amount < 0 ? x.amount : 0),
).reduce((acc, expense) => acc + expense, 0);

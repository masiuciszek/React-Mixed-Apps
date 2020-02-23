import {
  GetTransactionsAction, ActionTypesIncome, AddTransactionsAction, RemoveTransactionsAction,
} from './income.types';
import incomeData, { ITransactionItem } from '../../utils/incomeData';


export const getTransactions = (): GetTransactionsAction => ({
  type: ActionTypesIncome.GET_TRANSACTIONS,
  payload: incomeData,
});

export const addTransaction = (formData: ITransactionItem): AddTransactionsAction => ({
  type: ActionTypesIncome.ADD_TRANSACTION,
  payload: formData,
});

export const deleteTransaction = (id: string): RemoveTransactionsAction => ({
  type: ActionTypesIncome.DELETE_TRANSACTION,
  payload: id,
});
import {
  GetTransactionsAction, ActionTypesIncome, AddTransactionsAction, RemoveTransactionsAction, UpdateTransactionsAction, SetCurrentAction, ClearCurrentAction,
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
//
export const deleteTransaction = (id: string): RemoveTransactionsAction => ({
  type: ActionTypesIncome.DELETE_TRANSACTION,
  payload: id,
});

export const updateTransaction = (formData: ITransactionItem): UpdateTransactionsAction => ({
  type: ActionTypesIncome.UPDATE_TRANSACTION,
  payload: formData,
});

export const setCurrent = (transitionItem: ITransactionItem): SetCurrentAction => ({
  type: ActionTypesIncome.SET_CURRENT,
  payload: transitionItem,
});
export const clearCurrent = (): ClearCurrentAction => ({
  type: ActionTypesIncome.CLEAR_CURRENT,
});

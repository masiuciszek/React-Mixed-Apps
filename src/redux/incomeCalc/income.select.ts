import { createSelector } from 'reselect';
import { IStateIncome } from './income.types';
import { AppState } from '..';


const selectIncomes = (state: AppState) => state.incomes;


export const getTransactionsSelect = createSelector(
  [selectIncomes],
  (incomeState: IStateIncome) => incomeState.transactions,
);

export const addTransactionSelect = createSelector(
  [selectIncomes],
  (incomeState: IStateIncome) => incomeState.transactions,
);

export const selectBalance = createSelector(
  [selectIncomes],
  (incomeState: IStateIncome) => incomeState.balance,
);

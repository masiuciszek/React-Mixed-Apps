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


export const selectCurrentTransaction = createSelector(
  [selectIncomes],
  (incomeState: IStateIncome) => incomeState.current,
);


export const selectCalculateBalance = createSelector(
  [selectIncomes],
  (incomeState: IStateIncome) => incomeState.transactions.reduce((acc, cur) => acc + cur.amount, 0),
);


export const selectCalculateExpense = createSelector(
  [selectIncomes],
  (incomeState: IStateIncome) => incomeState.transactions.map(
    (x) => (x.amount < 0 ? x.amount : 0),
  ).reduce((acc, exp) => acc + exp, 0),
);


export const selectCalculateIncome = createSelector(
  [selectIncomes],
  (incomeState: IStateIncome) => incomeState.transactions.map(
    (x) => (x.amount > 0 ? x.amount : 0),
  ).reduce((acc, income) => acc + income, 0),
);

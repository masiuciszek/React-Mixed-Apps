/* eslint-disable @typescript-eslint/interface-name-prefix */

interface ITransaction {
  id: string;
  title: string;
  amount: number;
}

export interface IStateIncome{
  transactions: ITransaction[];
  current: null | ITransaction;
}

export enum ActionTypesIncome {
  GET_TRANSACTIONS='GET_TRANSACTIONS',
  ADD_TRANSACTION = 'ADD_TRANSACTION',
  UPDATE_TRANSACTION = 'UPDATE_TRANSACTION',
  DELETE_TRANSACTION = 'DELETE_TRANSACTION',
  SET_CURRENT = 'SET_CURRENT',
  CLEAR_CURRENT = 'CLEAR_CURRENT',
}

export interface GetTransactionsAction {
  type: ActionTypesIncome.GET_TRANSACTIONS;
  payload: ITransaction[];
}

export interface AddTransactionsAction {
  type: ActionTypesIncome.ADD_TRANSACTION;
  payload: ITransaction;
}

export interface UpdateTransactionsAction {
  type: ActionTypesIncome.UPDATE_TRANSACTION;
  payload: ITransaction;
}

export interface RemoveTransactionsAction {
  type: ActionTypesIncome.DELETE_TRANSACTION;
  payload: string; // id
}
export interface SetCurrentAction {
  type: ActionTypesIncome.SET_CURRENT;
  payload: ITransaction;
}
export interface ClearCurrentAction {
  type: ActionTypesIncome.CLEAR_CURRENT;
}


export type IncomeActionTypes =
  GetTransactionsAction
  | AddTransactionsAction
  | UpdateTransactionsAction
  | RemoveTransactionsAction
  | SetCurrentAction
  | ClearCurrentAction

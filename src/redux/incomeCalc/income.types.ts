/* eslint-disable @typescript-eslint/interface-name-prefix */

interface ITransaction {
  id: string;
  title: string;
  amount: number;
}

export interface IStateIncome{
  balance: number;
  income: number; // TODO: Check to se if this is needed
  expense: number; // TODO: Check to se if this is needed
  transactions: ITransaction[];
}

export enum ActionTypesIncome {
  GET_TRANSACTIONS='GET_TRANSACTIONS',
  ADD_TRANSACTION = 'ADD_TRANSACTION',
  UPDATE_TRANSACTION = 'UPDATE_TRANSACTION',
  DELETE_TRANSACTION = 'DELETE_TRANSACTION',
  FIRE_MODAL = 'FIRE_MODAL',
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
  payload: string; // id
}

export interface RemoveTransactionsAction {
  type: ActionTypesIncome.DELETE_TRANSACTION;
  payload: string; // id
}
export interface FireModalAction {
  type: ActionTypesIncome.FIRE_MODAL;
}


export type IncomeActionTypes =
  GetTransactionsAction
  | AddTransactionsAction
  | UpdateTransactionsAction
  | RemoveTransactionsAction
  | FireModalAction

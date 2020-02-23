import { IStateIncome, ActionTypesIncome, IncomeActionTypes } from './income.types';

const initialState: IStateIncome = {
  transactions: [],
};


export default (state: IStateIncome = initialState, action: IncomeActionTypes) => {
  switch (action.type) {
    case ActionTypesIncome.GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case ActionTypesIncome.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case ActionTypesIncome.UPDATE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.map(
          (item) => (item.id === action.payload.id
            ? { ...item, title: action.payload.title, amount: action.payload.amount } : item),
        ),
      };
    case ActionTypesIncome.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

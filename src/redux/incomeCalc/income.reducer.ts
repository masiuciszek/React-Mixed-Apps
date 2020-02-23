import { IStateIncome, ActionTypesIncome, IncomeActionTypes } from './income.types';

const initialState: IStateIncome = {
  transactions: [],
  current: null,
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
    case ActionTypesIncome.SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case ActionTypesIncome.CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case ActionTypesIncome.UPDATE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.map(
          (x) => (x.id === state.current?.id ? action.payload : x),
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

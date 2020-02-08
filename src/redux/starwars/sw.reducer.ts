import { ISwState, SwActionTypes, ActionTypesStarWars } from './sw.types';

const initialState: ISwState = {
  person: null,
  loading: true,
  errorMessage: Object,
};


export default (state: ISwState = initialState, action: SwActionTypes) => {
  switch (action.type) {
    case ActionTypesStarWars.GET_PERSON:

      return {
        ...state,
        person: action.payload,
      };
    case ActionTypesStarWars.FAILED_FETCH:
      return {
        ...state,
        errorMessage: state.errorMessage,
      };
    default:
      return state;
  }
};

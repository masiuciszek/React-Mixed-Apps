import { ICardState, CardActionTypes, ActionTypesCards } from './card.types';

const initialState: ICardState = {
  deck: null,
  cards: null,
  loading: true,
};


export default (state: ICardState = initialState, action: CardActionTypes) => {
  switch (action.type) {
    case ActionTypesCards.FETCH_CARD:
      return {
        ...state,
        deck: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

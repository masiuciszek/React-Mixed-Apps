import { ICardState, CardActionTypes, ActionTypesCards } from './card.types';

const initialState: ICardState = {
  deck: null,
  cards: [],
  loading: true,
  error: null,
};


export default (state: ICardState = initialState, action: CardActionTypes) => {
  switch (action.type) {
    case ActionTypesCards.FETCH_DECK:
      return {
        ...state,
        deck: action.payload,
        loading: false,
      };
    case ActionTypesCards.GET_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload],
        loading: false,
      };
    case ActionTypesCards.FETCH_CARD_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

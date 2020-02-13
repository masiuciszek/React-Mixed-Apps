import { Dispatch } from 'react';
import axios from 'axios';
import {
  FetchDeckAction, ActionTypesCards, FetchCardFailed, GetCardAction, IDeck,
} from './card.types';
//

export const fetchFailed = (error: Record<string, any>): FetchCardFailed => ({
  type: ActionTypesCards.FETCH_CARD_FAILED,
  payload: error,
});


export const fetchDeck = () => async (dispatch: Dispatch<FetchDeckAction>) => {
  try {
    const res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/');
    const resBody = await res.data;
    dispatch({ type: ActionTypesCards.FETCH_DECK, payload: resBody });
  } catch (err) {
    console.error(err);
    fetchFailed(err);
  }
};


export const getCards = (deck: IDeck) => async (dispatch: Dispatch<GetCardAction>) => {
  const id = deck.deck_id;
  try {
    const res = await axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/`);
    if (!res.data.success) {
      throw new Error('No more cards');
    }
    const resBody = await res.data.cards[0];
    console.log('resBody   ', resBody);
    dispatch({ type: ActionTypesCards.GET_CARD, payload: resBody });
  } catch (err) {
    console.error(err);
    fetchFailed(err);
  }
};

import { Dispatch } from 'react';
import axios from 'axios';
import {
  FetchCardAction, ActionTypesCards, FetchCardFailed, GetCardAction,
} from './card.types';


export const fetchFailed = (error: Record<string, any>): FetchCardFailed => ({
  type: ActionTypesCards.FETCH_CARD_FAILED,
  payload: error,
});


const url = 'https://deckofcardsapi.com/api/deck';


export const fetchCard = () => async (dispatch: Dispatch<FetchCardAction>) => {
  try {
    const res = await axios.get(`${url}/new/shuffle/`);

    const resBody = await res.data;
    dispatch({ type: ActionTypesCards.FETCH_CARD, payload: resBody });
  } catch (err) {
    console.error(err);
    fetchFailed(err);
  }
};


export const getCards = (id: any) => async (dispatch: Dispatch<GetCardAction>) => {
  try {
    const res = await axios.get(`${url}/${id}/draw/`);
    const resBody = await res.data;

    dispatch({ type: ActionTypesCards.GET_CARD, payload: resBody });
  } catch (err) {
    console.error(err);
    fetchFailed(err);
  }
};

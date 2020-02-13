/* eslint-disable @typescript-eslint/interface-name-prefix */
export interface IDeck{
  remaining: number;
  deck_id: string;
  shuffled: boolean;
  success: boolean;
}
export interface ICard {
  suit: string;
  value: string;
  code: string;
  images: {
    svg: string;
    png: string;
  };
}

export interface ICardState {
  deck: IDeck | null;
  cards: ICard[];
  loading: boolean;
  error: null;
}


export enum ActionTypesCards {
  FETCH_DECK = 'FETCH_DECK',
  GET_CARD = 'GET_CARD',
  FETCH_CARD_FAILED = 'FETCH_CARD_FAILED',
}

export interface FetchDeckAction {
  type: ActionTypesCards.FETCH_DECK;
  payload: IDeck;
}


export interface GetCardAction {
  type: ActionTypesCards.GET_CARD;
  payload: ICard;
}

export interface FetchCardFailed {
  type: ActionTypesCards.FETCH_CARD_FAILED;
  payload: Record<string, any>;
}

export type CardActionTypes = FetchDeckAction | GetCardAction | FetchCardFailed

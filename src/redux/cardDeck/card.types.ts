/* eslint-disable @typescript-eslint/interface-name-prefix */
export interface IDeck{
  deck_id: string;
  remaining: number;
  shuffled: boolean;
  success: boolean;
}

export interface ICard {
  id: string;
  image: string;
  suit: string;
  value: string;
}

export interface ICardState {
  deck: IDeck | null;
  cards: ICard[] | null;
  loading: boolean;
}


export enum ActionTypesCards {
  FETCH_CARD = 'FETCH_CARD',
  GET_CARD = 'GET_CARD',
  FETCH_CARD_FAILED = 'FETCH_CARD_FAILED',
}

export interface FetchCardAction {
  type: ActionTypesCards.FETCH_CARD;
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

export type CardActionTypes = FetchCardAction | GetCardAction

/* eslint-disable @typescript-eslint/interface-name-prefix */


export interface IJoke {
  id: string;
  joke: string;
  status: number;
}


export interface IJokeState {
  jokes: IJoke[];
  loading: boolean;
  error: null;
}


export enum ActionTypesJokes {
  FETCH_JOKE = 'FETCH_JOKE',
  LIKE_JOKE = 'LIKE_JOKE',
  FETCH_JOKE_FAILED = 'FETCH_JOKE_FAILED',
}

export interface FetchJoke {
  type: ActionTypesJokes.FETCH_JOKE;
  payload: IJoke;
}

export interface LikeJoke {
  type: ActionTypesJokes.LIKE_JOKE;

}

export interface FetchJokeFailed {
  type: ActionTypesJokes.FETCH_JOKE_FAILED;
  payload: Record<string, any>;
}


export type CardActionTypes = FetchJoke | LikeJoke |FetchJokeFailed
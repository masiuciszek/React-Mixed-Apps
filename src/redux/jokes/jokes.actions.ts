/* eslint-disable import/extensions */
/* eslint-disable no-await-in-loop */
import axios from 'axios';
import uuid from 'uuid/v4';
import { Dispatch } from 'react';
import {
  FetchJoke, FetchJokeFailed, ActionTypesJokes, IJoke, LikeJoke, DisLikeJoke,
} from './jokes.types';


export const fetchJoesFailed = (err: Record<string, any>): FetchJokeFailed => ({
  type: ActionTypesJokes.FETCH_JOKE_FAILED,
  payload: err,
});

export const fetchJokes = () => async (dispatch: Dispatch<FetchJoke>) => {
  try {
    const xs = [];
    while (xs.length <= 10) {
      const res = await axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
      // xs.push(res.data);
      xs.push({
        id: uuid(), joke: res.data.joke, status: res.data.status, votes: 0,
      });
    }
    dispatch({
      type: ActionTypesJokes.FETCH_JOKE,
      payload: xs,
    });
  } catch (err) {
    console.error(err);
    fetchJoesFailed(err);
  }
};


export const likeJoke = (id: string): LikeJoke => (
  { type: ActionTypesJokes.LIKE_JOKE, payload: id });

export const dislikeJoke = (id: string): DisLikeJoke => (
  { type: ActionTypesJokes.DISLIKE_JOKE, payload: id });

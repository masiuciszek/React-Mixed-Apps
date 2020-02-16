import axios from 'axios';
import { Dispatch } from 'react';
import {
  FetchJoke, FetchJokeFailed, ActionTypesJokes, AddJokes, IJoke,
} from './jokes.types';


export const fetchJoesFailed = (err: Record<string, any>): FetchJokeFailed => ({
  type: ActionTypesJokes.FETCH_JOKE_FAILED,
  payload: err,
});

export const fetchJokes = () => async (dispatch: Dispatch<FetchJoke>) => {
  try {
    const res = await axios.get('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } });
    const resBody = await res.data;
    dispatch({
      type: ActionTypesJokes.FETCH_JOKE,
      payload: resBody,
    });
  } catch (err) {
    console.error(err);
    fetchJoesFailed(err);
  }
};


export const addJokes = (joke: IJoke): AddJokes => ({
  type: ActionTypesJokes.ADD_JOKES,
  payload: joke,
});

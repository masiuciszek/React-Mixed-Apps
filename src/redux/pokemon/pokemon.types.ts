/* eslint-disable @typescript-eslint/interface-name-prefix */
interface IGender {
  name: string;
  url: string;
}
export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonObj {
  count: number;
  next: string | null;
  previous: null | number;
  results: IPokemon[];
}


export interface IPokemonState {
  gender: IGender[];
  pokemons: IPokemonObj | null | any;
  loading: boolean;
}

export enum ActionTypesPokemon {
  GET_POKEMONS ='GET_POKEMONS',
  GET_GENDER ='GET_GENDER',
  FETCH_START = 'FETCH_START',
  FETCH_FAILED ='FETCH_FAILED'
}


export interface GetPokemonsAction {
  type: ActionTypesPokemon.GET_POKEMONS;
  payload: IPokemonObj;
}


export interface FetchFailedAction {
  type: ActionTypesPokemon.FETCH_FAILED;
  payload: object;
}


export type PokemonActionTypes = GetPokemonsAction | FetchFailedAction

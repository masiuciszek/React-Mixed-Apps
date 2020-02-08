/* eslint-disable @typescript-eslint/interface-name-prefix */

interface IPerson {
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string [];
  starships: string [];
  created: Date;
  edited: Date;
  url: string;
}
export interface ISwState {
  person: IPerson | null;
  loading: boolean;
  errorMessage: Record<string, any>;
}

export enum ActionTypesStarWars {
  GET_PERSON ='GET_PERSON',
  FAILED_FETCH ='FAILED_FETCH',
}

export interface GetCharacterAction {
  type: ActionTypesStarWars.GET_PERSON;
  payload: IPerson;
}

export interface FetchFailedAction {
  type: ActionTypesStarWars.FAILED_FETCH;
  payload: object;
}

export type SwActionTypes = GetCharacterAction | FetchFailedAction

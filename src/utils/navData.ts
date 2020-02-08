/* eslint-disable @typescript-eslint/interface-name-prefix */
import uuid from 'uuid/v4';

export interface INavData {
  id: string;
  text: string;
  path: string;
}


export interface IHomeData {
  id: string;
  title: string;
  path: string;
  text: string;
  backgroundUrl: string;
}

export const navData: INavData[] = [
  {
    id: uuid(),
    text: 'home',
    path: '/',
  },
  {
    id: uuid(),
    text: 'pokemons',
    path: '/pokemon',
  },
  {
    id: uuid(),
    text: 'star-wars',
    path: '/starwars',
  },
];
export const HomeData: IHomeData[] = [
  {
    id: uuid(),
    title: 'home',
    text: 'Home page where it all starts',
    path: '/',
    backgroundUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/769286/lake-macquarie-71208_1920.jpg',
  },
  {
    id: uuid(),
    title: 'pokemons',
    path: '/pokemon',
    text: 'pokemons api is used here and it\'s cool , I like it',
    backgroundUrl: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: uuid(),
    title: 'star wars',
    text: 'Who doesn\'t love Star wars, it\'s the best',
    path: '/starwars',
    backgroundUrl: 'https://images.unsplash.com/photo-1537420327992-d6e192287183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  },
];

/* eslint-disable @typescript-eslint/interface-name-prefix */
import uuid from 'uuid/v4';
import * as React from 'react';


export interface ISocialData {
  id: string;
  url: string;
  icon: string;
}
export interface IWeb{
  id: string;
  title: string;
  url: string;
}

export const socialData: ISocialData[] = [
  {
    id: uuid(),
    url: 'https://twitter.com/CiszekMarcell',
    icon: 'λ',
  },
  {
    id: uuid(),
    url: 'https://github.com/masiuciszek?tab=repositories',
    icon: 'λ',
  },
  {
    id: uuid(),
    url: 'https://www.linkedin.com/in/marcell-ciszek/',
    icon: 'λ',
  },
];


export const webs: IWeb[] = [
  {
    id: uuid(),
    title: 'My Blog',
    url: 'https://www.marcellable.com/',
  },
  {
    id: uuid(),
    title: 'My Personal web',
    url: 'https://masiuciszek.com/',
  },
];

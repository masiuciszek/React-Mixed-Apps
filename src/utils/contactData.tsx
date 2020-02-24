/* eslint-disable @typescript-eslint/interface-name-prefix */
import uuid from 'uuid/v4';
import * as React from 'react';
import { Twitter, Github, Linkedin } from 'styled-icons/fa-brands';


export interface ISocialData {
  id: string;
  url: string;
  icon: React.ReactNode;
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
    icon: <Twitter size="35" />,
  },
  {
    id: uuid(),
    url: 'https://github.com/masiuciszek?tab=repositories',
    icon: <Github size="35" />,
  },
  {
    id: uuid(),
    url: 'https://www.linkedin.com/in/marcell-ciszek/',
    icon: <Linkedin size="35" />,
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

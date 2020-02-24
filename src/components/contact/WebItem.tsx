import * as React from 'react';
import { IWeb } from '../../utils/contactData';
import { StyledWebItem } from './Styles.contact';

interface P {
  item: IWeb;
}

const WebItem: React.FC<P> = ({ item }) => {
  const { title, url } = item;
  return (
    <StyledWebItem>
      <a href={url} target="_blank" rel="noopener noreferrer"><h3>{title}</h3></a>
    </StyledWebItem>
  );
};
export default WebItem;

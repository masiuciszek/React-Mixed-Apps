/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { StyledCardItem } from './Cards.styles';
import { ICard } from '../../redux/cardDeck/card.types';

interface P {
  card: ICard;
}


const CardItem: React.FC<P> = ({ card }) => (
  <>
    <StyledCardItem>
      <img src={card.images.png} alt={card.value} style={{ rotate: '23deg' }} />
    </StyledCardItem>
  </>
);
export default CardItem;

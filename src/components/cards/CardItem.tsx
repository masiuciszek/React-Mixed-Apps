/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { StyledCardItem, CardItemHeader } from './Cards.styles';
import { ICard } from '../../redux/cardDeck/card.types';
import { randomPos } from '../../utils/helpers';

interface P {
  card: ICard;
}


const CardItem: React.FC<P> = ({ card }) => (
  <>
    <CardItemHeader />
    <StyledCardItem>
      <img src={card.images.png} alt={card.value} style={{ rotate: `${Math.floor(Math.random() * randomPos(50))}deg` }} />
    </StyledCardItem>
  </>
);
export default CardItem;

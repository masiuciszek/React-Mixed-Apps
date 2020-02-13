/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { StyledCardItem } from './Cards.styles';

interface P {
  card: CardType;
}

const CardItem: React.FC<P> = ({ card }) => {
  const { image, suit, value } = card;
  return (
    <>
      <StyledCardItem>
        <img src={image} alt={suit} />
      </StyledCardItem>

    </>
  );
};
export default CardItem;

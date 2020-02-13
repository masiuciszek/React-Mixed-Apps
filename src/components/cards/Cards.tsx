/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import { connect } from 'react-redux';
import { StyledCard } from './Cards.styles';
import CardItem from './CardItem';
import { AppState } from '../../redux';
import { getDeckSelect, getCardsSelect, loadingSelect } from '../../redux/cardDeck/card.selector';
import { fetchDeck, getCards } from '../../redux/cardDeck/card.actions';
import { IDeck, ICard } from '../../redux/cardDeck/card.types';
import { StyledBtn } from '../styled/Buttons';


interface P {
  deck: IDeck | null;
  cards: ICard[];
  loading: boolean;
  fetchDeck: Function;
  getCards: Function;
}


const CardsComp: React.FC<P> = ({
  deck, fetchDeck, cards, getCards, loading,
}) => {
  React.useEffect(() => {
    fetchDeck();
  }, []);

  return (
    <StyledCard>
      <StyledBtn disabled={loading} as="button" type="button" font onClick={() => getCards(deck)}>Get a Card</StyledBtn>
      {!loading
         && cards.length > 0 && cards.map((card) => <CardItem key={card.code} card={card} />) }
    </StyledCard>
  );
};
const mapStateToProps = (state: AppState) => ({
  deck: getDeckSelect(state),
  cards: getCardsSelect(state),
  loading: loadingSelect(state),
});


export default connect(mapStateToProps, { fetchDeck, getCards })(CardsComp);

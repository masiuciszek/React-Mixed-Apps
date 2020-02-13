/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import { connect } from 'react-redux';
import { StyledCard } from './Cards.styles';
import CardItem from './CardItem';
import { AppState } from '../../redux';
import { getDeckSelect, getCardsSelect, loadingSelect } from '../../redux/cardDeck/card.selector';
import { fetchCard, getCards } from '../../redux/cardDeck/card.actions';
import { IDeck, ICard } from '../../redux/cardDeck/card.types';


interface P {
  deck: IDeck | null;
  cards: ICard[] | null;
  loading: boolean;
  fetchCard: Function;
  getCards: Function;
}


const CardsComp: React.FC<P> = ({
  deck, cards, loading, fetchCard, getCards,
}) => {
  const url = 'https://deckofcardsapi.com/api/deck';

  React.useEffect(() => {
    fetchCard();
    console.log(cards);
  }, [cards]);


  return (
    <StyledCard>
      <button type="button" onClick={() => getCards(deck?.deck_id)}>click</button>
    </StyledCard>
  );
};

const mapStateToProps = (state: AppState) => ({
  deck: getDeckSelect(state),
  cards: getCardsSelect(state),
  // cards: state.cards.cards,
  loading: loadingSelect(state),
});


export default connect(mapStateToProps, { fetchCard, getCards })(CardsComp);

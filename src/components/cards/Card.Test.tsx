/* eslint-disable @typescript-eslint/interface-name-prefix */
import * as React from 'react';
import axios from 'axios';
import { StyledCard } from './Cards.styles';
import CardItem from './CardItem';

interface P {

}

interface IState {
  deck_id: string;
  remaining: number;
  shuffled: boolean;
  success: boolean;
}

const CardsComp: React.FC<P> = () => {
  const [state, setState] = React.useState<IState| null>(null);
  const [cards, setCards] = React.useState<CardType[]>([]);

  console.log('ISTATE', state);
  const url = 'https://deckofcardsapi.com/api/deck';
  // const url2 = 'https://deckofcardsapi.com/api/deck/new/shuffle/';


  React.useEffect(() => {
    const fetchCard = async (): Promise<void> => {
      const deck = await axios.get(`${url}/new/shuffle/`);
      setState(deck.data);
    };

    fetchCard();
  }, []);


  const getCard = async (): Promise<void> => {
    const id = state?.deck_id;
    try {
      const cardUrl = `${url}/${id}/draw/`;
      const cardRes = await axios.get(cardUrl);
      if (!cardRes.data.success) {
        throw new Error('No more cards');
      }
      const card = cardRes.data.cards[0];
      setCards((c: any) => [...c, {
        id: card.code, suit: card.suit, image: card.image, value: card.value,
      }]);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(cards);


  return (
    <StyledCard>
      <button type="button" onClick={getCard}>click</button>
      {cards.map((card) => <CardItem key={card.id} card={card} />)}
    </StyledCard>
  );
};
export default CardsComp;

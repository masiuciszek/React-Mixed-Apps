import * as React from 'react';
import axios from 'axios';
import { StyledCard } from './Cards.styles';

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
  const [cards, setCards] = React.useState<any>([]);


  const url = 'https://deckofcardsapi.com/api/deck';
  // const url2 = 'https://deckofcardsapi.com/api/deck/new/shuffle/';


  React.useEffect(() => {
    const fetchCard = async (): Promise<void> => {
      const deck = await axios.get(`${url}/new/shuffle/`);
      setState(deck.data);
    };

    fetchCard();
  }, []);
  console.log(state);


  const getCard = async (): Promise<void> => {
    const id = state?.deck_id;
    const cardUrl = `${url}/${id}/draw/`;
    const cardRes = await axios.get(cardUrl);
    // console.log(cardRes.data.cards);
    const card = cardRes.data.cards[0];
    setCards((c: any) => [...c, {
      id: card.code, suit: card.suit, image: card.image, value: card.value,
    }]);
    console.log(card);
  };

  console.log(cards);


  return (
    <StyledCard>

      <h1> Legia CWSKS </h1>
      <button onClick={getCard}>click</button>
    </StyledCard>
  );
};
export default CardsComp;

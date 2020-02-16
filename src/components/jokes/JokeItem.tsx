import * as React from 'react';
import { IJoke } from '../../redux/jokes/jokes.types';
import { StyledJokeItem } from './Styles.jokes';

interface P {
  j: any;
}

const JokeItem: React.FC<P> = ({ j }) => {
  const { id, joke, status } = j;


  return (
    <StyledJokeItem>
      {' '}
      <strong>
        {' '}
        <h1>s</h1>
        {' '}
      </strong>
      {' '}
    </StyledJokeItem>
  );
};
export default JokeItem;

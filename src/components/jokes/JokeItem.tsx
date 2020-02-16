/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/extensions */
import * as React from 'react';
import { connect } from 'react-redux';
import { IJoke } from '../../redux/jokes/jokes.types';
import { StyledJokeItem, LikeArea, FaceArea } from './Styles.jokes';

import { dislikeJoke, likeJoke } from '../../redux/jokes/jokes.actions';

interface P {
  j: IJoke;
  dislikeJoke: Function;
  likeJoke: Function;
}

const JokeItem: React.FC<P> = ({
  j, dislikeJoke, likeJoke,
}) => {
  const {
    id, joke, votes,
  } = j;


  return (
    <StyledJokeItem>
      <LikeArea votes={votes}>
        <button disabled={votes >= 20} type="button" onClick={() => likeJoke(id)}>&#8673;</button>
        <span>{votes}</span>
        <button type="button" disabled={votes === 0} onClick={() => dislikeJoke(id)}>&#8675;</button>
      </LikeArea>
      <strong>
        {joke}
      </strong>
      <FaceArea>
        <span className="face">
          {' '}
          {votes <= 3 ? '😭' : votes <= 6 ? '🥺' : votes <= 9 ? '😊' : '😎' }
          {' '}
        </span>
      </FaceArea>
    </StyledJokeItem>
  );
};


export default connect(null, { likeJoke, dislikeJoke })(JokeItem);

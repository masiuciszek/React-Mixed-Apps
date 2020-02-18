/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable import/extensions */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux';
import { fetchJokes, cleanJokes } from '../../redux/jokes/jokes.actions';
import { IJoke } from '../../redux/jokes/jokes.types';
import { selectJokesList, selectJokesLoading } from '../../redux/jokes/joke.select';
import JokeItem from './JokeItem';
import {
  StyledJokeWrapper, StyledSide, StyledJokes, JokeTitle,
} from './Styles.jokes';
import { StyledBtn } from '../styled/Buttons';
import Spinner from '../styled/Spinner';

interface P {
  jokes: IJoke[];
  fetchJokes: Function;
  cleanJokes: Function;
  loading: boolean;
}


const Jokes: React.FC<P> = ({
  jokes, fetchJokes, loading, cleanJokes,
}) => {
  React.useEffect(() => {
    fetchJokes();
  }, []);

  const handleNewJokes = () => {
    cleanJokes();
    fetchJokes();
  };


  return (
    <>
      <StyledJokeWrapper>
        <StyledSide>
          <JokeTitle>
            <span className="Smiley" role="img">😉</span>
            <h3>Jokes App</h3>
          </JokeTitle>
          <StyledBtn as="button" onClick={handleNewJokes}>Fetch new Jokes</StyledBtn>
        </StyledSide>
        <StyledJokes>
          {!loading && jokes.length > 0 ? jokes.map(
            (joke: IJoke) => <JokeItem key={joke.id} j={joke} />,
          ) : <Spinner /> }
        </StyledJokes>
      </StyledJokeWrapper>
    </>
  );
};


const mapStateToProps = (state: AppState) => ({
  jokes: selectJokesList(state),
  loading: selectJokesLoading(state),
});


export default connect(mapStateToProps, { fetchJokes, cleanJokes })(Jokes);

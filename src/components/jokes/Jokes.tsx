/* eslint-disable import/extensions */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux';
import { fetchJokes } from '../../redux/jokes/jokes.actions';
import { IJoke } from '../../redux/jokes/jokes.types';
import { selectJokesList, selectJokesLoading } from '../../redux/jokes/joke.select';
import JokeItem from './JokeItem';
import {
  StyledJokeWrapper, StyledSide, StyledJokes, JokeTitle,
} from './Styles.jokes';

interface P {
  jokes: IJoke[];
  fetchJokes: Function;
  loading: boolean;
}


const Jokes: React.FC<P> = ({
  jokes, fetchJokes, loading,
}) => {
  React.useEffect(() => {
    fetchJokes();
  }, []);


  // const addJoke = (): void => {
  //   setJokesPlaceHolder((c: any) => [...c, { id: joke?.id, joke: joke?.joke }]);
  // };


  return (
    <>
      <StyledJokeWrapper>
        <StyledSide>
          <JokeTitle>
            <span className="Smiley">😉</span>
            <h3>Jokes App</h3>
          </JokeTitle>
          <button type="button">Add joke</button>
        </StyledSide>
        <StyledJokes>
          {!loading && jokes.length > 0 ? jokes.map(
            (joke) => <JokeItem key={joke.id} j={joke} />,
          ) : <h3 className="info">...Loading</h3> }
        </StyledJokes>
      </StyledJokeWrapper>
    </>
  );
};


const mapStateToProps = (state: AppState) => ({
  jokes: selectJokesList(state),
  loading: selectJokesLoading(state),
});


export default connect(mapStateToProps, { fetchJokes })(Jokes);

/* eslint-disable import/extensions */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux';
import { fetchJokes, addJokes } from '../../redux/jokes/jokes.actions';
import { IJoke } from '../../redux/jokes/jokes.types';
import { selectJokesList, selectJokesLoading, selectAddJokesXS } from '../../redux/jokes/joke.select';
import JokeItem from './JokeItem';
import {
  StyledJokeWrapper, StyledSide, StyledJokes, JokeTitle,
} from './Styles.jokes';

interface P {
  joke: IJoke | null;
  jokesXS: IJoke[];
  fetchJokes: Function;
  addJokes: Function;
  loading: boolean;
}


const Jokes: React.FC<P> = ({
  joke, fetchJokes, loading, addJokes, jokesXS,
}) => {
  const [jokesPlaceHolder, setJokesPlaceHolder] = React.useState<IJoke[]>([]);

  React.useEffect(() => {
    const xs = [];
    while (xs.length < 10) {
      fetchJokes();
      xs.push(joke);
    }
    console.log(xs);
  }, []);


  // const addJoke = (): void => {
  //   setJokesPlaceHolder((c: any) => [...c, { id: joke?.id, joke: joke?.joke }]);
  // };


  console.log('jokesXS  ', jokesXS);

  return (
    <>
      <StyledJokeWrapper>
        <StyledSide>
          <JokeTitle>
            <h3>Jokes App</h3>
          </JokeTitle>
          <button type="button" onClick={() => addJokes(joke)}>Add joke</button>
        </StyledSide>
        <StyledJokes>
          {!loading && jokesPlaceHolder.length > 0 ? jokesPlaceHolder.map(
            (joke) => <JokeItem key={joke.id} j={joke} />,
          ) : <h3 className="info">Click to Fetch some jokes</h3> }
        </StyledJokes>
      </StyledJokeWrapper>
    </>
  );
};


const mapStateToProps = (state: AppState) => ({
  joke: selectJokesList(state),
  jokesXS: selectAddJokesXS(state),
  loading: selectJokesLoading(state),
});


export default connect(mapStateToProps, { fetchJokes, addJokes })(Jokes);

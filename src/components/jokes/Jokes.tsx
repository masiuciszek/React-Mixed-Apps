/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../redux';
import { fetchJokes } from '../../redux/jokes/jokes.actions';
import { IJoke } from '../../redux/jokes/jokes.types';
import { selectJokesList, selectJokesLoading } from '../../redux/jokes/joke.select';

interface P {
  jokes: IJoke | null;
  fetchJokes: Function;
  loading: boolean;
}


const Jokes: React.FC<P> = ({ jokes, fetchJokes, loading }) => {
  const [JokesPlaceHolder, setJokesPlaceHolder] = React.useState<IJoke[]>([]);

  React.useEffect(() => {
    fetchJokes();
  }, []);

  console.log('JOKE OBJ ', jokes?.joke);


  return (
    <div>
      {' '}
      <h1> Legia CWSKS </h1>
      {' '}
    </div>
  );
};


const mapStateToProps = (state: AppState) => ({
  jokes: selectJokesList(state),
  loading: selectJokesLoading(state),
});

export default connect(mapStateToProps, { fetchJokes })(Jokes);

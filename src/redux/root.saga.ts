import { call, all } from 'redux-saga/effects';
import { pokemonsSagas } from './pokemon/pokemon.saga';

export default function* rootSaga() {
  yield all([
    call(pokemonsSagas),
  ]);
}

import {
  takeLatest, put, call, all,
} from 'redux-saga/effects';
import { getPokemons, fetchField } from './pokemon.action';
import { ActionTypesPokemon } from './pokemon.types';


export function* fetchPokemonsAsync() {
  try {
    const res = yield call(fetch, 'https://pokeapi.co/api/v2/pokemon');
    const resBody = res.json();
  } catch (err) {
    yield put(fetchField(err));
  }
}


export function* fetchPokemonsStart() {
  yield takeLatest(
    ActionTypesPokemon.FETCH_START,
    fetchPokemonsAsync,
  );
}


export function* pokemonsSagas() {
  yield all([call(fetchPokemonsStart)]);
}

/* eslint-disable import/extensions */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import starWarsReducer from './starwars/sw.reducer';
import cardReducer from './cardDeck/card.reducer';
import jokeReducer from './jokes/jokes.reducer';


const logger = createLogger();

const rootReducer = combineReducers({
  starWars: starWarsReducer,
  cards: cardReducer,
  jokes: jokeReducer,
});


// const sagaMiddleware = createSagaMiddleware();
export type AppState = ReturnType<typeof rootReducer>


export default () => {
  const middleWares = [logger, thunk];
  const middlewareEnhancer = applyMiddleware(...middleWares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewareEnhancer),
  );

  // sagaMiddleware.run(rootSaga);
  return store;
};

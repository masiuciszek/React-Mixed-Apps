import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './root.saga';
import thunk from 'redux-thunk';


const logger = createLogger();

const rootReducer = combineReducers({
  starWars: () => 'star wars',
  apa: () => 'apa',
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

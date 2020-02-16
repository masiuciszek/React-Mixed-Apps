/* eslint-disable import/extensions */
import {
  createStore, applyMiddleware, Store, Middleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';

const logger = createLogger();


// const sagaMiddleware = createSagaMiddleware();
export type AppState = ReturnType<typeof rootReducer>


export const configureStore = () => {
  const middleWares: Middleware[] = [];
  if (process.env.NODE_ENV === 'development') {
    middleWares.push(logger, thunk);
  }
  if (process.env.NODE_ENV === 'production') {
    middleWares.push(thunk);
  }
  if (process.env.NODE_ENV === 'test') {
    middleWares.push(logger, thunk);
  }
  const middlewareEnhancer = applyMiddleware(...middleWares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewareEnhancer),
  );
  return store;
};


export const store: any = configureStore();

export const persistor = persistStore(store);

// const middleware = [];


// const middleWareEnhancer = applyMiddleware(...middleware);

// export const store: any = createStore(
//   rootReducer,
//   composeWithDevTools(middleWareEnhancer),
// );

// export const persistor = persistStore(store);

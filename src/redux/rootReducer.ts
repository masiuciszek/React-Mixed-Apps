/* eslint-disable @typescript-eslint/interface-name-prefix */
import { persistStore, persistReducer, WebStorage } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import starWarsReducer from './starwars/sw.reducer';
import cardReducer from './cardDeck/card.reducer';
import jokesReducer from './jokes/jokes.reducer';


interface IPersistConfig {
  key: string;
  storage: WebStorage;
  whitelist: string[];
}


const persistConfig: IPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['jokes'],
};


const rootReducer = combineReducers({
  starWars: starWarsReducer,
  cards: cardReducer,
  jokes: jokesReducer,
});


export default persistReducer(persistConfig, rootReducer);

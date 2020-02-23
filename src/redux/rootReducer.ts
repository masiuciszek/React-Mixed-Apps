/* eslint-disable @typescript-eslint/interface-name-prefix */
import { persistReducer, WebStorage } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import cardReducer from './cardDeck/card.reducer';
import jokesReducer from './jokes/jokes.reducer';
import mealReducer from './meals/meal.reducer';
import incomeReducer from './incomeCalc/income.reducer';

interface IPersistConfig {
  key: string;
  storage: WebStorage;
  whitelist: string[];
}


const persistConfig: IPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['incomes'],
};


const rootReducer = combineReducers({
  incomes: incomeReducer,
  cards: cardReducer,
  jokes: jokesReducer,
  meals: mealReducer,
});


export default persistReducer(persistConfig, rootReducer);

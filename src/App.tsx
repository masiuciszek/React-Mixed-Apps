/* eslint-disable import/extensions */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ConverterPage from './pages/converterPage';
import CardsPage from './pages/Cards';
import JokesApp from './pages/Jokes';
import Meal from './pages/Meal';

interface P {

}

const App: React.FC<P> = () => (
  <>
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cards" component={CardsPage} />
        <Route exact path="/jokes" component={JokesApp} />
        <Route exact path="/meals" component={Meal} />
        <Route exact path="/converter" component={ConverterPage} />
      </Switch>

    </Layout>
  </>
);


export default App;

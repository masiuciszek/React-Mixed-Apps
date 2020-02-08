/* eslint-disable import/extensions */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';

import PokemonPage from './pages/Pokemon';
import HomePage from './pages/HomePage';
import StarWarsPage from './pages/Starwars';

interface P {

}

const App: React.FC<P> = () => (
  <>
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/pokemons" component={PokemonPage} />
        <Route path="/star-wars" component={StarWarsPage} />
      </Switch>

    </Layout>
  </>
);


export default App;

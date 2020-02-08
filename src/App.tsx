/* eslint-disable import/extensions */
import React from 'react';
import Layout from './components/layout/Layout';
import PokemonsList from './components/pokemons/PokemonsList';


interface P {

}

const App: React.FC<P> = () => (
  <>
    <Layout>
      <PokemonsList />
    </Layout>
  </>
);


export default App;

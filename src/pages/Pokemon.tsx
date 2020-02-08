import * as React from 'react';
import PokemonsList from '../components/pokemons/PokemonsList';
import { PageWrapper } from '../components/styled/Wrappers';

interface P {

}

const PokemonPage: React.FC<P> = () => (
  <>
    <PageWrapper>
      <PokemonsList />
    </PageWrapper>
  </>
);
export default PokemonPage;

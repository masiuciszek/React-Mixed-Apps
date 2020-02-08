import * as React from 'react';
import { IPokemon } from '../../redux/pokemon/pokemon.types';

interface P {
  pokeData: IPokemon;
}

const PokeItem: React.FC<P> = ({ pokeData }) => {
  const { name, url } = pokeData;
  return (
    <>
      {' '}
      <h3>
        Name:
        {' '}
        {name}
      </h3>

      {' '}
    </>
  );
};
export default PokeItem;

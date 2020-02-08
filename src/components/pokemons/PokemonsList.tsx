/* eslint-disable no-shadow */
import * as React from 'react';
import { connect } from 'react-redux';
import { getPokemons } from '../../redux/pokemon/pokemon.action';
import { selectPokemons, selectLoading } from '../../redux/pokemon/pokemon.selector';
import { IPokemon, IPokemonObj } from '../../redux/pokemon/pokemon.types';
import { AppState } from '../../redux';
import PokeItem from './PokeItem';

interface P {
  pokemons: IPokemonObj | Record<string, any>;
  getPokemons: Function;
  loading: boolean;
}

const PokemonsList: React.FC<P> = ({ pokemons, getPokemons, loading }) => {
  React.useEffect(() => {
    getPokemons();
  }, []);


  const pokemonsArr = pokemons?.results;
  return (
    <>
      <h1>Pokemons</h1>
      {!loading && pokemonsArr?.length > 0 && pokemonsArr.map((poke: IPokemon) => <PokeItem key={poke.name} pokeData={poke} />) }
    </>
  );
};


const mapStateToProps = (state: AppState) => ({
  pokemons: selectPokemons(state),
  loading: selectLoading(state),
});

export default connect(mapStateToProps, { getPokemons })(PokemonsList);

import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import PokemonCard from '../components/pokemon-card';
import PokemonService from '../services/pokemon-service';
import { Link } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';

const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    PokemonService.getPokemons().then(pokemons => setPokemons(pokemons));
  }, []);

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container"> 
        <div className="row">
          <PokemonSearch />
          {pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          ))}
        </div>
      </div>
      <Link className="btn-floating btn-large waves-effect waves-light red z-depth-3"
        style={{position: 'fixed', bottom: '25px', right: '25px'}}
        to="/pokemon/add">
        <i className="material-icons">add</i>
      </Link>
    </div> 
  );
}

export default PokemonList;
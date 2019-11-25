import React, { FunctionComponent } from 'react';
import Pokemon from '../models/pokemon'

type Props = {
  pokemon: Pokemon
};

const PokemonCard: FunctionComponent<Props> = ({pokemon}) => {
   
  return (
    <div>
      Afficher le pokémon : {pokemon.name}
    </div>
  );
}
 
export default PokemonCard;
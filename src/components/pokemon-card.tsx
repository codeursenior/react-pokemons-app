import React, { FunctionComponent } from 'react';
 
const PokemonCard: FunctionComponent = (pokemon) => {
   
  return (
    <div>
      Afficher le pokémon : {pokemon.name}
    </div>
  );
}
 
export default PokemonCard;
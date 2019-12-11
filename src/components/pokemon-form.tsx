import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Pokemon from '../models/pokemon';
import formatType from '../helpers/format-type';

type Props = {
  pokemon: Pokemon
};

type Fields = {
    value: any,
    error?: string
};

type Form = {
  name: Fields,
  hp: Fields,
  cp: Fields,
  types: Fields
}

const PokemonForm: FunctionComponent<Props> = ({pokemon}) => {

  const history = useHistory();

  const [form, setForm] = useState<Form>({
    name: { value: pokemon.name },
    hp: { value: pokemon.hp },
    cp: { value: pokemon.cp },
    types: { value: pokemon.types }
  });

  const types: string[] = [
    'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
    'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
  ];

  const hasType = (type: string): boolean => {
    return form.types.value.includes(type);
  }

  const selectType = (type: string, e: React.ChangeEvent<HTMLInputElement>): void => {
    const checked = e.target.checked;

    if(checked) {
      // Si l'utilisateur coche un type, on l'ajoute à la liste des types du pokémon.
      const newTypes = form.types.value.concat([type]);
      const updateState = {types: { value: newTypes }};

      setForm({...form, ...updateState});
    } else {
      // Si l'utilisateur décoche un type, on le retire à la liste des types du pokémon.
      const newTypes = form.types.value.filter((currentType: string) => currentType !== type);
      const updateState = {types: { value: newTypes }};

      setForm({...form, ...updateState});
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const updateState = {[fieldName]: { value: fieldValue }};

    setForm({...form, ...updateState});
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    history.push(`/pokemons/${pokemon.id}`);
  }
 
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable"> 
            <div className="card-image">
              <img src={pokemon.picture} alt={pokemon.name} style={{width: '250px', margin: '0 auto'}}/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                {/* Pokemon name */}
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input id="name" type="text" name="name" className="form-control" value={form.name.value} onChange={e => handleInputChange(e)}></input>
                </div>
                {/* Pokemon hp */}
                <div className="form-group">
                  <label htmlFor="hp">Point de vie</label>
                  <input id="hp" type="number" name="hp" className="form-control" value={form.hp.value} onChange={e => handleInputChange(e)}></input>
                </div>
                {/* Pokemon cp */}
                <div className="form-group">
                  <label htmlFor="cp">Dégâts</label>
                  <input id="cp" type="number" name="cp" className="form-control" value={form.cp.value} onChange={e => handleInputChange(e)}></input>
                </div>
                {/* Pokemon types */}
                <div className="form-group">
                  <label>Types</label>
                  {types.map(type => (
                    <div key={type} style={{marginBottom: '10px'}}>
                      <label>
                        <input id={type} type="checkbox" name="types" className="filled-in" value={type} checked={hasType(type)} onChange={e => selectType(type, e)}></input>
                        <span>
                          <p className={formatType(type)}>{ type }</p>
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-action center">
                {/* Submit button */}
                <button type="submit" className="btn">Valider</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
 
export default PokemonForm;
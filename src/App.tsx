import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PokemonsList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';
import PokemonEdit from './pages/pokemon-edit';
import PokemonAdd from './pages/pokemon-add';
import PageNotFound from './pages/page-not-found';
 
const App: FunctionComponent = () => {
 
  return (
    <Router>
      <div>
      <nav> 
        <div className="nav-wrapper teal">
          <Link to="/" className="brand-logo center">Pokédex</Link>
        </div> 
      </nav>
      <Switch>
        <Route exact path="/" component={PokemonsList} />
        <Route exact path="/pokemons" component={PokemonsList} />
        <Route exact path="/pokemon/add" component={PokemonAdd} />
        <Route exact path="/pokemons/edit/:id" component={PokemonEdit} />
        <Route path="/pokemons/:id" component={PokemonsDetail} />
        <Route component={PageNotFound} />
      </Switch>
      </div>
    </Router>
  );
}
 
export default App;
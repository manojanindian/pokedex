import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';

import Pokemons from './components/pokemons';
import PokemonDetail from './components/pokemon-detail';
import PokemonType from './components/pokemon-type';

const root = document.getElementById('root');

ReactDOM.render((
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path="/" exact component={Pokemons} />
				<Route path="/pokemons" exact component={Pokemons} />
				<Route path="/pokemons/:offset" exact component={Pokemons} />
				<Route path="/pokemonInfo/:id" exact component={PokemonDetail} />
				<Route path="/pokemonType/:id" exact component={PokemonType} />
			</Switch>
		</Router>
	</Provider>), root);

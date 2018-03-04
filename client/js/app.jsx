import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';

import Pokemons from './components/pokemons';
import PokemonInfo from './components/pokemon-info';

const history = syncHistoryWithStore(createBrowserHistory(), store);

const root = document.getElementById('root');

ReactDOM.render((
	<Provider store={store}>
		<Router history={history}>
			<Pokemons>
				<Route path="/info" component={PokemonInfo} />
			</Pokemons>
		</Router>
	</Provider>), root);

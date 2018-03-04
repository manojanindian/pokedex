import React from 'react';
import { connect } from 'react-redux';

import loadPokemon from '../actions/pokemon-actions';

@connect(store => ({
	pokemons: store.pokemon.pokemons,
}))
export default class Pokemons extends React.Component {
	static pad(n, length) {
		const len = length - n.toString().length;
		return (len > 0 ? new Array(len + 1).join('0') : '') + n;
	}

	componentDidMount() {
		this.props.dispatch(loadPokemon());
	}

	render() {
		const pokemonsList = this.props.pokemons.map((pokemon) => {
			const pokmonNumber = pokemon.url.split('/');
			return (
				<li key={pokemon.name}>
					<img alt={pokemon.name} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${Pokemons.pad(pokmonNumber[6], 3)}.png`} />
					{pokemon.name}
				</li>
			);
		});

		return (
			<div>
				<h1>Pokemon List</h1>
				<ul>{pokemonsList}</ul>
			</div>
		);
	}
}

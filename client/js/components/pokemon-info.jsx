import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadPokemonInfo } from '../actions/pokemon-actions';

@connect(store => ({
	pokemonInfo: store.pokemonInfo.pokemons,
}))
export default class PokemonInfo extends React.Component {
	static pad(n, length) {
		const len = length - n.toString().length;
		return (len > 0 ? new Array(len + 1).join('0') : '') + n;
	}

	constructor() {
		super();
		this.loading = true;
	}

	componentWillMount() {
		if (this.props.pokemonInfo === undefined || !this.props.pokemonInfo[this.props.id]) {
			this.props.dispatch(loadPokemonInfo(this.props.id));
		}
	}

	shouldComponentUpdate() {
		return this.loading;
	}

	render() {
		if (this.props.pokemonInfo !== undefined && this.props.pokemonInfo[this.props.id]) {
			this.loading = false;
		}

		if (this.loading) {
			return (<li>LOADING...</li>);
		}

		const pokemon = this.props.pokemonInfo[this.props.id];

		const types = pokemon.types.map(type => (
			<li key={type.type.name}>
				<Link to={`/pokemonType/${type.type.url.split('/')[6]}`} href={`/pokemonType/${type.type.url.split('/')[6]}`}>{type.type.name}</Link>
			</li>
		));

		return (
			<li>
				<img alt={pokemon.name} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${PokemonInfo.pad(pokemon.id, 3)}.png`} />
				{pokemon.name}
				<ul>
					{types}
				</ul>
			</li>
		);
	}
}

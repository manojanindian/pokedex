import React from 'react';
import { connect } from 'react-redux';

import { loadPokemonInfo } from '../actions/pokemon-actions';

@connect(store => ({
	pokemonInfo: store.pokemonInfo.pokemons,
}))
export default class PokemonDetail extends React.Component {
	static pad(n, length) {
		const len = length - n.toString().length;
		return (len > 0 ? new Array(len + 1).join('0') : '') + n;
	}

	constructor(props) {
		super(props);
		this.loading = true;
		this.pokemonId = props.match.params.id;
	}

	componentWillMount() {
		if (this.props.pokemonInfo === undefined || !this.props.pokemonInfo[this.pokemonId]) {
			this.props.dispatch(loadPokemonInfo(this.pokemonId));
		}
	}

	shouldComponentUpdate() {
		return this.loading;
	}

	render() {
		if (this.props.pokemonInfo !== undefined && this.props.pokemonInfo[this.pokemonId]) {
			this.loading = false;
		}

		if (this.loading) {
			return (<li>LOADING...---</li>);
		}

		const pokemon = this.props.pokemonInfo[this.pokemonId];

		const types = pokemon.types.map(type => (
			<li key={type.type.name}>{type.type.name}</li>
		));

		return (
			<li>
				<img alt={pokemon.name} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${PokemonDetail.pad(pokemon.id, 3)}.png`} />
				{pokemon.name}
				<ul>
					{types}
				</ul>
			</li>
		);
	}
}

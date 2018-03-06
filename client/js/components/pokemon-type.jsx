import React from 'react';
import { connect } from 'react-redux';

import { loadTypeInfo } from '../actions/pokemon-actions';
import PokemonInfo from '../components/pokemon-info';


@connect(store => ({
	pokemons: store.typeInfo.pokemons,
}))
export default class PokemonType extends React.Component {
	constructor(props) {
		super(props);
		this.typeId = props.match.params.id;
	}

	componentDidMount() {
		this.props.dispatch(loadTypeInfo(this.typeId));
	}

	render() {
		const pokemonsList = [];
		if (this.props.pokemons[this.typeId]) {
			const pokemons = this.props.pokemons[this.typeId].pokemon;
			for (let i = 0; i < pokemons.length;) {
				const pokmonUrl = pokemons[i].pokemon.url.split('/');
				const row = (
					<PokemonInfo
						id={pokmonUrl[6]}
						name={pokemons[i].pokemon.name}
						key={pokemons[i].pokemon.name}
					/>
				);
				pokemonsList.push(row);
				i += 1;
			}
		}
		return (
			<div>
				<h1>Pokemon List By Type</h1>
				<ul>{pokemonsList}</ul>
			</div>
		);
	}
}

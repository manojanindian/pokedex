import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loadPokemon } from '../actions/pokemon-actions';
import PokemonInfo from '../components/pokemon-info';


@connect(store => ({
	pokemons: store.pokemon.pokemons,
}))
export default class Pokemons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			offset: (props.match.params.offset) ? parseInt(props.match.params.offset, 0) : 0,
		};

		this.limit = 2;
		this.setLimit = this.setLimit.bind(this);
	}

	componentDidMount() {
		this.props.dispatch(loadPokemon());
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ offset: parseInt(nextProps.match.params.offset, 0) });
	}

	setLimit(e) {
		const {
			id,
		} = e.target.dataset;
		this.setState({ offset: id * this.limit });
	}

	renderPagination() {
		const totalPokemons = 1000;
		const rows = [];

		for (let i = 0; i < (totalPokemons / this.limit);) {
			const row = (
				<li key={i} className="page-item">
					<Link
						to={`/pokemons/${i * this.limit}`}
						className="page-link"
						href={`/pokemons/${i * this.limit}`}
					>
						{i + 1}
					</Link>
				</li>
			);
			rows.push(row);
			i += 1;
		}
		return rows;
	}

	render() {
		const pokemonsList = [];
		if (this.props.pokemons.length > 0) {
			for (let i = this.state.offset; i < (this.state.offset + this.limit);) {
				const pokmonUrl = this.props.pokemons[i].url.split('/');
				const row = (
					<PokemonInfo
						id={pokmonUrl[6]}
						name={this.props.pokemons[i].name}
						key={this.props.pokemons[i].name}
					/>
				);
				pokemonsList.push(row);
				i += 1;
			}
		}

		return (
			<div>
				<h1>Pokemon List</h1>
				<ul>{pokemonsList}</ul>
				<ul className="pagination">
					{this.renderPagination()}
				</ul>
			</div>
		);
	}
}

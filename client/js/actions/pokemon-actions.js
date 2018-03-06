import axios from 'axios';


module.exports.loadPokemon = () => ({
	type: 'LOAD_POKEMON',
	payload: axios.get('http://pokeapi.co/api/v2/pokemon/?limit=949&offset=0'),
});

module.exports.loadPokemonInfo = id => ({
	type: 'LOAD_POKEMONINFO',
	payload: axios.get(`http://pokeapi.co/api/v2/pokemon/${id}`),
});

module.exports.loadTypeInfo = id => ({
	type: 'LOAD_TYPEINFO',
	payload: axios.get(`http://pokeapi.co/api/v2/type/${id}`),
});

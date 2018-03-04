import axios from 'axios';

const loadPokemon = () => ({
	type: 'LOAD_POKEMON',
	payload: axios.get('http://pokeapi.co/api/v2/pokemon'),
});
export default loadPokemon;

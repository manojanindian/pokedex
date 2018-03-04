const initialState = {
	pokemons: [],
	loading: false,
	loaded: false,
	error: null,
};

const pokemon = (state = initialState, action) => {
	switch (action.type) {
	case 'LOAD_POKEMON_PENDING':
		return {
			...state,
			loading: true,
			loaded: false,
			error: null,
		};

	case 'LOAD_POKEMON_REJECTED':
		return {
			...state,
			loading: false,
			loaded: false,
			error: action.payload.message,
		};

	case 'LOAD_POKEMON_FULFILLED':
		return {
			...state,
			loading: false,
			loaded: true,
			error: null,
			pokemons: action.payload.data.results,
		};

	default:
		return state;
	}
};

export default pokemon;

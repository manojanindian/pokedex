const initialState = {
	pokemons: {},
	loading: false,
	loaded: false,
	error: null,
};

const pokemonInfo = (state = initialState, action) => {
	switch (action.type) {
	case 'LOAD_POKEMONINFO_PENDING':
		return {
			...state,
			loading: true,
			loaded: false,
			error: null,
		};

	case 'LOAD_POKEMONINFO_REJECTED':
		return {
			...state,
			loading: false,
			loaded: false,
			error: action.payload.message,
		};

	case 'LOAD_POKEMONINFO_FULFILLED':
		return {
			...state,
			loading: false,
			loaded: true,
			error: null,
			pokemons: { ...state.pokemons, [action.payload.data.id]: action.payload.data },
		};

	default:
		return state;
	}
};

export default pokemonInfo;

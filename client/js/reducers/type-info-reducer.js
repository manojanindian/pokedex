const initialState = {
	pokemons: {},
	loading: false,
	loaded: false,
	error: null,
};

const typeInfo = (state = initialState, action) => {
	switch (action.type) {
	case 'LOAD_TYPEINFO_PENDING':
		return {
			...state,
			loading: true,
			loaded: false,
			error: null,
		};

	case 'LOAD_TYPEINFO_REJECTED':
		return {
			...state,
			loading: false,
			loaded: false,
			error: action.payload.message,
		};

	case 'LOAD_TYPEINFO_FULFILLED':
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

export default typeInfo;

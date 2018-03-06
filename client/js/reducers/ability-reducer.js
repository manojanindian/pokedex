const initialState = {
	abilities: [],
	loading: false,
	loaded: false,
	error: null,
};

const ability = (state = initialState, action) => {
	switch (action.type) {
	case 'LOAD_ABILITY_PENDING':
		return {
			...state,
			loading: true,
			loaded: false,
			error: null,
		};

	case 'LOAD_ABILITY_REJECTED':
		return {
			...state,
			loading: false,
			loaded: false,
			error: action.payload.message,
		};

	case 'LOAD_ABILITY_FULFILLED':
		return {
			...state,
			loading: false,
			loaded: true,
			error: null,
			abilities: action.payload.data.results,
		};

	default:
		return state;
	}
};

export default ability;

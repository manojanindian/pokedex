const initialState = {
	types: [],
	loading: false,
	loaded: false,
	error: null,
};

const type = (state = initialState, action) => {
	switch (action.type) {
	case 'LOAD_TYPE_PENDING':
		return {
			...state,
			loading: true,
			loaded: false,
			error: null,
		};

	case 'LOAD_TYPE_REJECTED':
		return {
			...state,
			loading: false,
			loaded: false,
			error: action.payload.message,
		};

	case 'LOAD_TYPE_FULFILLED':
		return {
			...state,
			loading: false,
			loaded: true,
			error: null,
			types: action.payload.data.results,
		};

	default:
		return state;
	}
};

export default type;

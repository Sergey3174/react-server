const initialState = {
	isLoading: true,
	refresh: true,
	search: '',
	sorted: false,
};
export const optionReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOADING_OFF':
			return { ...state, isLoading: false };
		case 'LOADING_ON':
			return { ...state, isLoading: true };
		case 'REFRESH':
			return { ...state, refresh: !state.refresh };
		case 'SET_SEARCH':
			return { ...state, search: action.payload };
		case 'SET_SORTED':
			return { ...state, sorted: !state.sorted };
		default:
			return state;
	}
};

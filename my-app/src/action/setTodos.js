export const setTodos = (linkQuery) => (dispatch) => {
	dispatch({ type: 'LOADING_ON' });
	fetch(`${linkQuery}`)
		.then((response) => response.json())
		.then((json) => {
			dispatch({
				type: 'SET_TODOS',
				payload: json,
			});
		})
		.finally(() => dispatch({ type: 'LOADING_OFF' }));
};

import { REFRESH } from '../action';

export const useOnSubmitTodo = (dispatch) => {
	const onSubmitTodo = (title) => {
		fetch('http://localhost:3005/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				userId: 1,
				title: title,
				completed: false,
			}),
		}).finally(() => dispatch(REFRESH));
	};

	return { onSubmitTodo };
};

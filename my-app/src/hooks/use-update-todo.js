import { REFRESH } from '../action';

export const useUpdateTodo = (dispatch, setIsChangeTodo) => {
	const updateTodo = (todo, title) => {
		fetch(`http://localhost:3005/todos/${todo.id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				userId: 1,
				title: title,
				completed: false,
			}),
		}).finally(() => dispatch(REFRESH));
		setIsChangeTodo(false);
	};

	return { updateTodo };
};

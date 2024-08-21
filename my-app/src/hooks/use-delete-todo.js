import { REFRESH } from '../action';

export const useDeleteTodo = (dispatch) => {
	const deleteTodo = (id) => {
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		}).finally(() => {
			dispatch(REFRESH);
		});
	};

	return { deleteTodo };
};

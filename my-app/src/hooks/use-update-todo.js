import { useParams } from 'react-router-dom';

export const useUpdateTodo = (refreshTodoList, setIsChangeTodo) => {
	const params = useParams();
	const updateTodo = (event, title) => {
		event.preventDefault();
		fetch(`http://localhost:3005/todos/${params.id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				userId: 1,
				title: title,
				completed: false,
			}),
		}).then(() => refreshTodoList());
		setIsChangeTodo(false);
	};

	return { updateTodo };
};

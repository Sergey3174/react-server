export const useUpdateTodo = (refreshTodoList, setIsChangeTodo) => {
	const updateTodo = (todo, title) => {
		fetch(`http://localhost:3005/todos/${todo.id}`, {
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

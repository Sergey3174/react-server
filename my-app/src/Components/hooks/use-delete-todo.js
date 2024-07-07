export const useDeleteTodo = (refreshTodoList) => {
	const deleteTodo = (id) => {
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		}).then(refreshTodoList);
	};
	return { deleteTodo };
};

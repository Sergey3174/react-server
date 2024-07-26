export const useDeleteTodo = (refreshTodoList) => {
	const deleteTodo = (id) => {
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		}).finally(() => {
			refreshTodoList();
		});
	};

	return { deleteTodo };
};

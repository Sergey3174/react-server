export const useOnSubmitTodo = (refreshTodoList) => {
	const onSubmitTodo = (title) => {
		fetch('http://localhost:3005/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				userId: 1,
				title: title,
				completed: false,
			}),
		}).then(refreshTodoList);
	};

	return { onSubmitTodo };
};

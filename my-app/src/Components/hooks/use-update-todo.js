import { useState } from 'react';

export const useUpdateTodo = (refreshTodoList) => {
	const [updateId, setUpdateId] = useState(null);
	const [updateTodoTitle, setUpdateTodoTitle] = useState(false);

	const updateTodo = (event) => {
		event.preventDefault();
		fetch(`http://localhost:3005/todos/${updateId}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				userId: 1,
				title: updateTodoTitle,
				completed: false,
			}),
		}).then(refreshTodoList);
		setUpdateId(null);
		setUpdateTodoTitle(null);
	};

	return { updateId, setUpdateId, updateTodoTitle, setUpdateTodoTitle, updateTodo };
};

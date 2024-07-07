import { useState } from 'react';

export const useOnSubmitTodo = (todos, refreshTodoList) => {
	const [error, setError] = useState(null);
	const [newTodo, setNewTodo] = useState('');

	const onSubmitTodo = (event) => {
		event.preventDefault();
		if (todos.some(({ title }) => title === newTodo)) {
			setError('Такая задача существует');
		} else {
			fetch('http://localhost:3005/todos', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					userId: 1,
					title: newTodo,
					completed: false,
				}),
			}).then(refreshTodoList);
			setNewTodo('');
			setError(null);
		}
	};

	return { error, setNewTodo, newTodo, onSubmitTodo };
};

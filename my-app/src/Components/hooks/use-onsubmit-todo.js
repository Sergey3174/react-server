import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../../firebase';

export const useOnSubmitTodo = (todos) => {
	const [error, setError] = useState(null);
	const [newTodo, setNewTodo] = useState('');

	const onSubmitTodo = (event) => {
		event.preventDefault();
		if (Object.values(todos).some(({ title }) => title === newTodo)) {
			setError('Такая задача существует');
		} else {
			const todosDbRef = ref(db, 'todos');

			push(todosDbRef, {
				userId: 1,
				title: newTodo,
				completed: false,
			});

			setNewTodo('');
			setError(null);
		}
	};

	return { error, setNewTodo, newTodo, onSubmitTodo };
};

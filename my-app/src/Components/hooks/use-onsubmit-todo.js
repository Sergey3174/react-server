import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../../firebase';

export const useOnSubmitTodo = () => {
	const [newTodo, setNewTodo] = useState('');

	const onSubmitTodo = (event) => {
		event.preventDefault();

		const todosDbRef = ref(db, 'todos');

		push(todosDbRef, {
			userId: 1,
			title: newTodo,
			completed: false,
		});

		setNewTodo('');
	};

	return { setNewTodo, newTodo, onSubmitTodo };
};

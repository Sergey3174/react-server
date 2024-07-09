import { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../../firebase';

export const useUpdateTodo = () => {
	const [updateId, setUpdateId] = useState(null);
	const [updateTodoTitle, setUpdateTodoTitle] = useState(false);

	const updateTodo = (event) => {
		event.preventDefault();

		const todoDbRef = ref(db, `todos/${updateId}`);

		set(todoDbRef, {
			userId: 1,
			title: updateTodoTitle,
			completed: false,
		});

		setUpdateId(null);
		setUpdateTodoTitle(null);
	};

	return { updateId, setUpdateId, updateTodoTitle, setUpdateTodoTitle, updateTodo };
};

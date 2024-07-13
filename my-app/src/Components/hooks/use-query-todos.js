import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase';
import { searchTodoQuery } from '../utils/search';
import { sortedTodoQuery } from '../utils/sorted';

export const useQueryTodos = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchTodo, setSeachTodo] = useState(null);
	const [sorted, setSorted] = useState(false);

	useEffect(() => {
		const todoDbRef = ref(db, 'todos');

		return onValue(todoDbRef, (snapshot) => {
			if (searchTodo) {
				searchTodoQuery(todoDbRef, searchTodo).then((snapshot) => {
					const loaded = snapshot.val() || {};
					setTodos(loaded);
				});
			} else if (sorted) {
				sortedTodoQuery(todoDbRef)
					.then((snapshot) => {
						const sortedTodo = {};
						snapshot.forEach((el) => {
							sortedTodo[el.key] = el.val();
						});
						setTodos(sortedTodo);
					})
					.catch((error) => {
						console.error(error);
					});
			} else {
				const loadedTodos = snapshot.val() || {};
				setTodos(loadedTodos);
				console.log(loadedTodos);
			}
			setIsLoading(false);
		});
	}, [sorted, searchTodo, setTodos]);

	return { isLoading, setSeachTodo, setSorted, sorted, todos };
};

import { useState, useEffect } from 'react';
import { linkQuery } from '../utils';

const LINK = 'http://localhost:3005/todos';

export const useQueryTodos = (refreshTodosFlag, setTodos) => {
	const [isLoading, setIsLoading] = useState(false);
	const [searchTodo, setSeachTodo] = useState(null);
	const [sorted, setSorted] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch(`${linkQuery(sorted, searchTodo, LINK)}`)
			.then((response) => response.json())
			.then((json) => setTodos(json))
			.finally(() => setIsLoading(false));
	}, [refreshTodosFlag, sorted, searchTodo, setTodos]);

	return { isLoading, setSeachTodo, setSorted, sorted };
};

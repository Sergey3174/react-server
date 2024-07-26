import { useState, useEffect } from 'react';
import { linkQuery } from '../utils';

const LINK = 'http://localhost:3005/todos';

export const useQueryTodos = (refreshTodosFlag) => {
	const [isLoadingTodo, setIsLoading] = useState(false);
	const [searchTodo, setSeachTodo] = useState(null);
	const [sorted, setSorted] = useState(false);
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetch(`${linkQuery(sorted, searchTodo, LINK)}`)
			.then((response) => response.json())
			.then((json) => setTodos(json))
			.finally(() => setIsLoading(false));
	}, [refreshTodosFlag, sorted, searchTodo]);

	return { isLoadingTodo, setSeachTodo, setSorted, sorted, todos };
};

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const useQueryTodo = (refreshTodosFlag, deleteCompleted, setIsLoading) => {
	const [todo, setTodo] = useState({});
	const navigate = useNavigate();
	const params = useParams();

	useEffect(() => {
		if (!deleteCompleted) {
			setIsLoading(true);
			fetch(`http://localhost:3005/todos/${params.id}`)
				.then((response) => response.json())
				.then((json) => {
					if (Object.keys(json).length === 0) {
						navigate('/404');
					} else setTodo(json);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}
	}, [params.id, refreshTodosFlag, navigate, deleteCompleted, setIsLoading]);

	return { todo };
};

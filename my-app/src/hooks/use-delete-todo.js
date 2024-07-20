import { useParams } from 'react-router-dom';
import { useState } from 'react';
export const useDeleteTodo = (setIsLoading) => {
	// const navigate = useNavigate();
	const [deleteCompleted, setDeleteComplited] = useState(false);
	const params = useParams();
	const deleteTodo = () => {
		setIsLoading(true);
		fetch(`http://localhost:3005/todos/${params.id}`, {
			method: 'DELETE',
		}).finally(() => {
			setDeleteComplited(true);
			setIsLoading(false);
		});
	};

	return { deleteTodo, deleteCompleted };
};

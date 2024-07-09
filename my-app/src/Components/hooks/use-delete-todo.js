import { ref, remove } from 'firebase/database';
import { db } from '../../firebase';

export const useDeleteTodo = () => {
	const deleteTodo = (id) => {
		const removeDbRef = ref(db, `todos/${id}`);
		remove(removeDbRef);
	};
	return { deleteTodo };
};

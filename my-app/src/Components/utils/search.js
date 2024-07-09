import { query, orderByChild, get, startAt, endBefore } from 'firebase/database';

export const searchTodoQuery = (db, searchTodo) => {
	const recentPostsRef = query(
		db,
		orderByChild('title'),
		startAt(`${searchTodo}`),
		endBefore(searchTodo + '\uf8ff'),
	);

	return get(recentPostsRef);
};

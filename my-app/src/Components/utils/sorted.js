import { query, orderByChild, get } from 'firebase/database';

export const sortedTodoQuery = (db) => {
	return get(query(db, orderByChild('title')));
};

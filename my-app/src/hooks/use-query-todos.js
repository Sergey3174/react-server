import { useEffect } from 'react';
import { linkQuery } from '../utils';
import { setTodos } from '../action';
import { useSelector } from 'react-redux';
import { selectSearch, selectSorted } from '../selectors';

const LINK = 'http://localhost:3005/todos';

export const useQueryTodos = (refresh, dispatch) => {
	const search = useSelector(selectSearch);
	const sorted = useSelector(selectSorted);

	useEffect(() => {
		dispatch(setTodos(linkQuery(sorted, search, LINK)));
	}, [dispatch, refresh, search, sorted]);
};

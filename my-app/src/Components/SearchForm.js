import styles from '../app.module.css';
import { useContext } from 'react';
import { AppContext } from '../context';
import { debounce } from '../utils';

export const SearchForm = () => {
	const { dispatch } = useContext(AppContext);
	const searchTodoQuery = debounce(({ target }) => {
		dispatch({ type: 'SET_SEARCH_TODO', payload: target.value });
	}, 1000);
	return (
		<form className={styles.formSearch}>
			<input
				placeholder="search"
				onChange={searchTodoQuery}
				className={styles.inputSearch}
				type="text"
			/>
		</form>
	);
};

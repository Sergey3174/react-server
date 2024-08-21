import { useDispatch } from 'react-redux';
import styles from '../app.module.css';
import { debounce } from '../utils';
import { setSearch } from '../action';

export const SearchForm = () => {
	const dispatch = useDispatch();
	const searchTodoQuery = debounce(({ target }) => {
		dispatch(setSearch(target.value));
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

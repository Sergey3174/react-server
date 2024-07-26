import styles from '../app.module.css';
import { useContext } from 'react';
import { AppContext } from '../context';
import { debounce } from '../utils';

export const SearchForm = () => {
	const { setSeachTodo } = useContext(AppContext);
	const searchTodoQuery = debounce(({ target }) => {
		setSeachTodo(target.value);
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

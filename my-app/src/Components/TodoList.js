import { TodoItem } from './TodoItem';
import styles from '../app.module.css';
import { Loader } from './Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectTodos } from '../selectors';

export const TodoList = () => {
	const todos = useSelector(selectTodos);
	const isLoading = useSelector(selectIsLoading);
	return (
		<>
			<h3>Список дел</h3>
			<ol className={styles.rounded}>
				{isLoading ? (
					<Loader />
				) : todos.length ? (
					todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
				) : (
					<span>Список пуст</span>
				)}
			</ol>
		</>
	);
};

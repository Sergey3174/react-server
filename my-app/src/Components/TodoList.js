import { useContext } from 'react';
import { TodoItem } from './TodoItem';
import styles from '../app.module.css';
import { Loader } from './Loader';
import { AppContext } from '../context';

export const TodoList = ({ isLoading }) => {
	const { todos } = useContext(AppContext);
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

import { TodoItem } from './TodoItem';
import styles from '../app.module.css';
import { Loader } from './Loader';

export const TodoList = ({ isLoading, todos, refreshTodoList }) => {
	return (
		<>
			<h3>Список дел</h3>
			<ol className={styles.rounded}>
				{isLoading ? (
					<Loader />
				) : todos.length ? (
					todos.map((todo) => (
						<TodoItem
							key={todo.id}
							todo={todo}
							refreshTodoList={refreshTodoList}
						/>
					))
				) : (
					<span>Список пуст</span>
				)}
			</ol>
		</>
	);
};

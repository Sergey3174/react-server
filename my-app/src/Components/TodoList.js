import { TodoItem } from './TodoItem';
import styles from '../app.module.css';

export const TodoList = ({ isLoading, todos }) => {
	return (
		<>
			<h3>Список дел</h3>
			<ol className={styles.rounded}>
				{isLoading ? (
					<div className={styles.loader}></div>
				) : Object.keys(todos).length ? (
					Object.entries(todos).map(([id, todo]) => (
						<TodoItem key={id} todo={todo} id={id} />
					))
				) : (
					<span>Список пуст</span>
				)}
			</ol>
		</>
	);
};

import { TodoItem } from './TodoItem';
import styles from '../app.module.css';

export const TodoList = ({
	isLoading,
	todos,
	updateId,
	updateTodo,
	updateTodoTitle,
	setUpdateTodoTitle,
	setUpdateId,
	deleteTodo,
	error,
}) => {
	return (
		<>
			<h3>Список дел</h3>
			<ol className={styles.rounded}>
				{isLoading ? (
					<div className={styles.loader}></div>
				) : Object.keys(todos).length ? (
					Object.entries(todos).map(([id, todo]) => (
						<TodoItem
							key={id}
							todo={todo}
							updateId={updateId}
							updateTodo={updateTodo}
							updateTodoTitle={updateTodoTitle}
							setUpdateTodoTitle={setUpdateTodoTitle}
							setUpdateId={setUpdateId}
							deleteTodo={deleteTodo}
							error={error}
							id={id}
						/>
					))
				) : (
					<span>Список пуст</span>
				)}
			</ol>
		</>
	);
};

import styles from '../app.module.css';
import { TodoForm } from './TodoForm';

export const TodoItem = ({
	todo,
	updateId,
	updateTodo,
	updateTodoTitle,
	setUpdateTodoTitle,
	setUpdateId,
	deleteTodo,
}) => {
	return (
		<li className={styles.todo}>
			{updateId === todo.id ? (
				<TodoForm
					onSubmit={updateTodo}
					todoValue={updateTodoTitle}
					changeTodo={setUpdateTodoTitle}
				/>
			) : (
				<span>{todo.title}</span>
			)}
			<div>
				<button
					onClick={() => {
						setUpdateId(todo.id);
						setUpdateTodoTitle(todo.title);
					}}
				>
					Изменить
				</button>
				<button onClick={() => deleteTodo(todo.id)}>Удалить</button>
			</div>
		</li>
	);
};

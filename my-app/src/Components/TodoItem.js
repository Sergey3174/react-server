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
	id,
}) => {
	return (
		<li className={styles.todo}>
			{updateId === id ? (
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
						setUpdateId(id);
						setUpdateTodoTitle(todo.title);
						console.log(id);
					}}
				>
					Изменить
				</button>
				<button onClick={() => deleteTodo(id)}>Удалить</button>
			</div>
		</li>
	);
};

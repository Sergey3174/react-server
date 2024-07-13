import styles from '../app.module.css';
import { TodoForm } from './TodoForm';
import { useUpdateTodo, useDeleteTodo } from './hooks/';

export const TodoItem = ({ todo, id }) => {
	const { updateId, setUpdateId, updateTodoTitle, setUpdateTodoTitle, updateTodo } =
		useUpdateTodo();
	const { deleteTodo } = useDeleteTodo();

	return (
		<li className={styles.todo}>
			{updateId === id ? (
				<TodoForm
					onSubmit={updateTodo}
					todoValue={updateTodoTitle}
					changeTodo={setUpdateTodoTitle}
				>
					{'Сохранить'}
				</TodoForm>
			) : (
				<span>{todo.title}</span>
			)}
			<div>
				<button
					onClick={() => {
						setUpdateId(id);
						setUpdateTodoTitle(todo.title);
					}}
				>
					Изменить
				</button>
				<button onClick={() => deleteTodo(id)}>Удалить</button>
			</div>
		</li>
	);
};

import { useState } from 'react';
import styles from '../app.module.css';
import { TodoForm } from './TodoForm';
import { useDeleteTodo, useUpdateTodo } from '../hooks';

export const TodoItem = ({ todo, refreshTodoList }) => {
	const [isChangeTodo, setIsChangeTodo] = useState(false);

	const { updateTodo } = useUpdateTodo(refreshTodoList, setIsChangeTodo);
	const { deleteTodo } = useDeleteTodo(refreshTodoList);
	return (
		<li className={styles.todo}>
			{isChangeTodo ? (
				<TodoForm
					value={todo.title}
					onSubmitTodo={(title) => updateTodo(todo, title)}
					type="update"
				>
					Сохранить
				</TodoForm>
			) : (
				<div className={styles.todoText}>{todo.title}</div>
			)}
			<div>
				<button
					className={styles.btn}
					onClick={() => {
						setIsChangeTodo(!isChangeTodo);
					}}
				>
					Изменить
				</button>
				<button className={styles.btn} onClick={() => deleteTodo(todo.id)}>
					Удалить
				</button>
			</div>
		</li>
	);
};

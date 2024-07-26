import { useState, useContext } from 'react';
import styles from '../app.module.css';
import { TodoForm } from './TodoForm';
import { useDeleteTodo, useUpdateTodo } from '../hooks';
import { AppContext } from '../context';
import { Button } from './Button';

export const TodoItem = ({ todo }) => {
	const [isChangeTodo, setIsChangeTodo] = useState(false);

	const { refreshTodoList } = useContext(AppContext);
	const { updateTodo } = useUpdateTodo(refreshTodoList, setIsChangeTodo);
	const { deleteTodo } = useDeleteTodo(refreshTodoList);
	return (
		<li className={styles.todo}>
			{isChangeTodo ? (
				<TodoForm
					value={todo.title}
					onSubmitTodo={(title) => updateTodo(todo, title)}
				>
					Сохранить
				</TodoForm>
			) : (
				<div className={styles.todoText}>{todo.title}</div>
			)}
			<div>
				{!isChangeTodo && (
					<Button onClick={() => setIsChangeTodo(!isChangeTodo)}>
						Изменить
					</Button>
				)}

				<Button onClick={() => deleteTodo(todo.id)}>Удалить</Button>
			</div>
		</li>
	);
};

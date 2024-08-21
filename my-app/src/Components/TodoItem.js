import { useState } from 'react';
import styles from '../app.module.css';
import { TodoForm } from './TodoForm';
import { useDeleteTodo, useUpdateTodo } from '../hooks';
import { Button } from './Button';
import { useDispatch } from 'react-redux';

export const TodoItem = ({ todo }) => {
	const [isChangeTodo, setIsChangeTodo] = useState(false);

	const dispatch = useDispatch();

	const { updateTodo } = useUpdateTodo(dispatch, setIsChangeTodo);
	const { deleteTodo } = useDeleteTodo(dispatch);
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

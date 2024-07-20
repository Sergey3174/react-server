import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoForm } from './TodoForm';
import styles from '../app.module.css';
import { useUpdateTodo, useDeleteTodo } from '../hooks';
import { Loader } from './Loader';
import { useQueryTodo } from '../hooks';

export const TodoPage = () => {
	const navigate = useNavigate();
	const [isChangeTodo, setIsChangeTodo] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);

	const refreshTodoList = () => setRefreshTodosFlag(!refreshTodosFlag);

	const { updateTodo } = useUpdateTodo(refreshTodoList, setIsChangeTodo);
	const { deleteTodo, deleteCompleted } = useDeleteTodo(setIsLoading);
	const { todo } = useQueryTodo(refreshTodosFlag, deleteCompleted, setIsLoading);

	return (
		<>
			<div className={styles.headerTodo}>
				<button className={styles.arrow} onClick={() => navigate(-1)}></button>
				<div>
					<h1>Страница задачи</h1>
				</div>
				<div>
					<button
						className={styles.btn}
						onClick={() => {
							setIsChangeTodo(!isChangeTodo);
						}}
						disabled={deleteCompleted}
					>
						Изменить
					</button>
					<button
						className={styles.btn}
						onClick={deleteTodo}
						disabled={deleteCompleted}
					>
						Удалить
					</button>
				</div>
			</div>
			<div className={styles.todoPage}>
				{isLoading ? (
					<Loader />
				) : deleteCompleted ? (
					<span>Задача успешно удалена, вернитесь на главную страницу</span>
				) : isChangeTodo ? (
					<TodoForm
						value={todo.title}
						onSubmitTodo={updateTodo}
						type="textarea"
					>
						Сохранить
					</TodoForm>
				) : (
					<span>{todo.title}</span>
				)}
			</div>
		</>
	);
};

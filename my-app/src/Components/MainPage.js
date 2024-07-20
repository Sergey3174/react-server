import { useState } from 'react';
import styles from '../app.module.css';
import { TodoList } from './TodoList';
import { useOnSubmitTodo, useQueryTodos } from '../hooks';
import { TodoForm } from './TodoForm';
import { debounce } from '../utils';

export const MainPage = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);

	const refreshTodoList = () => setRefreshTodosFlag(!refreshTodosFlag);

	const { isLoadingTodo, setSeachTodo, setSorted, sorted, todos } =
		useQueryTodos(refreshTodosFlag);

	const { onSubmitTodo } = useOnSubmitTodo(refreshTodoList);

	const searchTodoQuery = debounce((event) => {
		setSeachTodo(event.target.value);
	}, 1000);

	return (
		<>
			<header>
				<TodoForm onSubmitTodo={onSubmitTodo} value={''} type="input">
					Добавить задачу
				</TodoForm>

				<div className={styles.func}>
					<form className={styles.formSearch}>
						<input
							placeholder="search"
							onChange={(e) => searchTodoQuery(e)}
							className={styles.inputSearch}
							type="text"
						/>
					</form>

					<div>
						<button
							className={styles.btn + ' ' + (sorted ? styles.sorted : null)}
							onClick={() => setSorted(!sorted)}
						>
							Сортировка
						</button>
					</div>
				</div>
			</header>
			<TodoList isLoading={isLoadingTodo} todos={todos} />
		</>
	);
};

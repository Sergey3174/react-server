import { useMemo } from 'react';
import styles from './app.module.css';
import { TodoList } from './Components/TodoList';
import {
	useOnSubmitTodo,
	useUpdateTodo,
	useDeleteTodo,
	useQueryTodos,
} from './Components/hooks/';
import { TodoForm } from './Components/TodoForm';
import { debounce } from './Components/utils';

export const App = () => {
	const { isLoading, setSeachTodo, setSorted, sorted, todos } = useQueryTodos();

	const { error, setNewTodo, newTodo, onSubmitTodo } = useOnSubmitTodo(todos);

	const { updateId, setUpdateId, updateTodoTitle, setUpdateTodoTitle, updateTodo } =
		useUpdateTodo();

	const { deleteTodo } = useDeleteTodo();

	const searchTodoTimeout = useMemo(
		() =>
			debounce((event) => {
				setSeachTodo(event.target.value);
			}, 1000),
		[setSeachTodo],
	);

	return (
		<div className={styles.todosContainer}>
			<header>
				<TodoForm
					error={error}
					onSubmit={onSubmitTodo}
					todoValue={newTodo}
					changeTodo={setNewTodo}
				>
					{'Добавить задачу'}
				</TodoForm>

				{/* <div>
				<input
					placeholder="search"
					onChange={(e) => searchTodoTimeout(e)}
				></input>
			</div> */}
				<div className={styles.func}>
					<form className={styles.formSearch}>
						<input
							onChange={(e) => searchTodoTimeout(e)}
							className={styles.inputSearch}
							type="text"
							placeholder="Поиск"
						/>
					</form>

					<div>
						<button
							className={styles.btn + ' ' + (sorted ? styles.sorted : null)}
							onClick={() => setSorted(!sorted)}
						>
							Сортировка по алфавиту
						</button>
					</div>
				</div>
			</header>

			<TodoList
				isLoading={isLoading}
				todos={todos}
				updateId={updateId}
				updateTodo={updateTodo}
				updateTodoTitle={updateTodoTitle}
				setUpdateTodoTitle={setUpdateTodoTitle}
				setUpdateId={setUpdateId}
				deleteTodo={deleteTodo}
				error={error}
			/>
		</div>
	);
};

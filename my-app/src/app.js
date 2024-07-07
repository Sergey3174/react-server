import { useState, useMemo } from 'react';
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
	const [todos, setTodos] = useState([]);
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);

	const refreshTodoList = () => setRefreshTodosFlag(!refreshTodosFlag);

	const { isLoading, setSeachTodo, setSorted, sorted } = useQueryTodos(
		refreshTodosFlag,
		setTodos,
	);

	const { error, setNewTodo, newTodo, onSubmitTodo } = useOnSubmitTodo(
		todos,
		refreshTodoList,
	);

	const { updateId, setUpdateId, updateTodoTitle, setUpdateTodoTitle, updateTodo } =
		useUpdateTodo(refreshTodoList);

	const { deleteTodo } = useDeleteTodo(refreshTodoList);

	const searchTodoQuery = useMemo(
		() =>
			debounce((event) => {
				setSeachTodo(event.target.value);
			}, 1000),
		[setSeachTodo],
	);

	return (
		<div className={styles.todosContainer}>
			<TodoForm
				error={error}
				onSubmit={onSubmitTodo}
				todoValue={newTodo}
				changeTodo={setNewTodo}
			/>

			<div>
				<input placeholder="search" onChange={(e) => searchTodoQuery(e)}></input>
			</div>

			<div>
				<button
					className={sorted ? styles.sorted : null}
					onClick={() => setSorted(!sorted)}
				>
					Сортировка по алфавиту
				</button>
			</div>

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

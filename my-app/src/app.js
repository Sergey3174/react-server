import { useState } from 'react';
import styles from './app.module.css';
import { TodoList } from './Components/TodoList';
import { useOnSubmitTodo, useQueryTodos } from './hooks';
import { TodoForm } from './Components/TodoForm';
import { AppContext } from './context';
import { SearchForm } from './Components/SearchForm';
import { Button } from './Components/Button';

export const App = () => {
	const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);

	const refreshTodoList = () => setRefreshTodosFlag(!refreshTodosFlag);

	const dispatch = (action) => {
		const { type, payload } = action;
		switch (type) {
			case 'SET_SEARCH_TODO': {
				setSeachTodo(payload);
				break;
			}
			default:
		}
	};

	const { isLoadingTodos, setSeachTodo, setSorted, sorted, todos } =
		useQueryTodos(refreshTodosFlag);

	const { onSubmitTodo } = useOnSubmitTodo(refreshTodoList);

	const data = { refreshTodoList, todos, sorted, dispatch };

	return (
		<AppContext.Provider value={data}>
			<div className={styles.todosContainer}>
				<header>
					<TodoForm onSubmitTodo={onSubmitTodo}>Добавить задачу</TodoForm>
					<div className={styles.func}>
						<SearchForm />
						<div>
							<Button onClick={() => setSorted(!sorted)} type="sorted">
								Сортировка
							</Button>
						</div>
					</div>
				</header>
				<TodoList isLoading={isLoadingTodos} />
			</div>
		</AppContext.Provider>
	);
};

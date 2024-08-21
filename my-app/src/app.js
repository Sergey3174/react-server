import { useDispatch, useSelector } from 'react-redux';
import styles from './app.module.css';
import { TodoList } from './Components/TodoList';
import { useOnSubmitTodo, useQueryTodos } from './hooks';
import { TodoForm } from './Components/TodoForm';
import { SearchForm } from './Components/SearchForm';
import { Button } from './Components/Button';
import { selectRefresh } from './selectors';
import { SET_SORTED } from './action';

export const App = () => {
	const refresh = useSelector(selectRefresh);

	const dispatch = useDispatch();

	useQueryTodos(refresh, dispatch);

	const { onSubmitTodo } = useOnSubmitTodo(dispatch);

	return (
		<div className={styles.todosContainer}>
			<header>
				<TodoForm onSubmitTodo={onSubmitTodo}>Добавить задачу</TodoForm>
				<div className={styles.func}>
					<SearchForm />
					<div>
						<Button onClick={() => dispatch(SET_SORTED)} type="sorted">
							Сортировка
						</Button>
					</div>
				</div>
			</header>
			<TodoList />
		</div>
	);
};

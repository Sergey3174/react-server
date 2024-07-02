import { useEffect, useState } from 'react';
import styles from './app.module.css';
export const App = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('http://localhost:3005/todos')
			.then((response) => response.json())
			.then((json) => setTodos(json))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div className={styles.todosContainer}>
			<div>
				<form>
					<input placeholder="Введите задачу"></input>
					<button>Добавить задачу</button>
				</form>
			</div>

			<h3>Список дел</h3>
			<ol className={styles.rounded}>
				{isLoading ? (
					<div className={styles.loader}></div>
				) : (
					Object.values(todos).map(({ id, title }) => (
						<li className={styles.todo} key={id}>
							{title}
						</li>
					))
				)}
			</ol>
		</div>
	);
};

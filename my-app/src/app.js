import { useEffect, useState } from 'react';
import styles from './app.module.css';
export const App = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((json) => setTodos(json))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div className={styles.todosContainer}>
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

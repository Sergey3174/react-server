import { useState } from 'react';
import styles from '../app.module.css';

export const TodoForm = ({ onSubmitTodo, value = '', children }) => {
	const [title, setTitle] = useState(value);

	const onSubmit = (event) => {
		event.preventDefault();
		onSubmitTodo(title);
		setTitle('');
	};

	return (
		<div>
			<form onSubmit={onSubmit} className={styles.formSearch}>
				<input
					className={styles.inputSearch}
					value={title}
					onChange={({ target }) => setTitle(target.value)}
					placeholder="Введите задачу"
				></input>

				<button className={styles.btn} type="submit" disabled={!title}>
					{children}
				</button>
			</form>
		</div>
	);
};

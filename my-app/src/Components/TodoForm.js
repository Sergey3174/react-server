import { useState } from 'react';
import styles from '../app.module.css';

export const TodoForm = ({ onSubmitTodo, value, children, type }) => {
	const [title, setTitle] = useState(value);
	return (
		<div>
			<form
				onSubmit={(event) => {
					onSubmitTodo(event, title);
					setTitle('');
				}}
				className={styles.formSearch}
			>
				{type === 'input' && (
					<input
						className={styles.inputSearch}
						value={title}
						onChange={({ target }) => setTitle(target.value)}
						placeholder="Введите задачу"
					></input>
				)}

				{type === 'textarea' && (
					<textarea
						className={styles.inputSearch}
						value={title}
						onChange={({ target }) => setTitle(target.value)}
						placeholder="Введите задачу"
					></textarea>
				)}
				<button className={styles.btn} type="submit" disabled={!title}>
					{children}
				</button>
			</form>
		</div>
	);
};

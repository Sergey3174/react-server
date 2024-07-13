import styles from '../app.module.css';

export const TodoForm = ({ onSubmit, todoValue, changeTodo, children }) => {
	return (
		<div>
			<form onSubmit={onSubmit} className={styles.formSearch}>
				<input
					className={styles.inputSearch}
					value={todoValue}
					onChange={({ target }) => changeTodo(target.value)}
					placeholder="Введите задачу"
				></input>
				<button className={styles.btn} type="submit" disabled={!todoValue}>
					{children}
				</button>
			</form>
			{/* {error && <span style={{ color: 'red' }}>Такая задача существует</span>} */}
		</div>
	);
};

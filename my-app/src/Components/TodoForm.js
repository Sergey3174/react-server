export const TodoForm = ({ error, onSubmit, todoValue, changeTodo }) => {
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input
					value={todoValue}
					onChange={({ target }) => changeTodo(target.value)}
					placeholder="Введите задачу"
				></input>
				<button type="submit" disabled={!todoValue}>
					Добавить задачу
				</button>
			</form>
			{error && <span style={{ color: 'red' }}>Такая задача существует</span>}
		</div>
	);
};

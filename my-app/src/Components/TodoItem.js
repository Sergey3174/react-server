import styles from '../app.module.css';
import { Link } from 'react-router-dom';

export const TodoItem = ({ todo }) => {
	return (
		<>
			<li className={styles.todo}>
				<Link className={styles.todoText} to={`/todos/${todo.id}`}>
					{todo.title}
				</Link>
			</li>
		</>
	);
};

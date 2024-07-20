import styles from '../app.module.css';
import { useNavigate } from 'react-router-dom';
export const ErrorPage = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.todoPage}>
			<h1>Ошибка 404. Такой страницы не существует</h1>
			<button className={styles.btn} onClick={() => navigate('/')}>
				На гланую
			</button>
		</div>
	);
};

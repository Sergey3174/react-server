import styles from './app.module.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { TodoPage } from './Components/TodoPage';
import { MainPage } from './Components/MainPage';
import { ErrorPage } from './Components/ErrorPage';

export const App = () => {
	return (
		<div className={styles.todosContainer}>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/todos/:id" element={<TodoPage />} />
				<Route path="/404" element={<ErrorPage />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</div>
	);
};

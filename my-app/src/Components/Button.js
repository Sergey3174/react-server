import { useContext } from 'react';
import styles from '../app.module.css';
import { AppContext } from '../context';

export const Button = ({ onClick, children, type = '' }) => {
	const { sorted } = useContext(AppContext);
	return (
		<button
			className={
				styles.btn + ' ' + (type === 'sorted' && (sorted ? styles.sorted : null))
			}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

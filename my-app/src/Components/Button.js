import styles from '../app.module.css';
import { useSelector } from 'react-redux';
import { selectSorted } from '../selectors';

export const Button = ({ onClick, children, type = '' }) => {
	const sorted = useSelector(selectSorted);
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

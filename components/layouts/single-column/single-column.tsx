import styles from "./single-column.module.css";

const SingleColumn: React.FC<SingleColumnProps> = ({ children }) => {
	return (
		<div className={styles.column}>
			{children}
		</div>
	);
};

interface SingleColumnProps {
	children?: React.ReactNode;
}

export default SingleColumn;

import styles from './Wrapper.module.scss';

interface WrapperProps {
	children: React.ReactNode;
}

const Wrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={styles.wrapper}>
			{children}
		</div>
	)
}

export default Wrapper;

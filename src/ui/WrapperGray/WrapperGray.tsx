import styles from './WrapperGray.module.scss';

interface WrapperGrayProps {
	children: React.ReactNode;
}

const WrapperGray = ({ children }: WrapperGrayProps) => {

	return (
		<span className={styles.gray}>
			{children}
		</span>
	)
}

export default WrapperGray;

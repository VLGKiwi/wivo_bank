import styles from './TextHandler.module.scss';
import { TextHandlerProps } from './TextHandler.types';

const TextHandler = ({ title, description, textAlign, mobTextAlign, titleSize }: TextHandlerProps) => {

	const textAlignClass = textAlign || 'left';
	const mobTextAlignClass = mobTextAlign || 'mobLeft';
	const titleSizeClass = titleSize || 'heading-2';

	return (
		<div className={styles.container}>
			<h2 className={`${styles.container_title} ${styles[textAlignClass]} ${styles[mobTextAlignClass]} ${styles[titleSizeClass]}`}>{title}</h2>
			<p className={`${styles.container_description} ${styles[textAlignClass]} ${styles[mobTextAlignClass]}`}>{description}</p>
		</div>
	)
}

export default TextHandler;

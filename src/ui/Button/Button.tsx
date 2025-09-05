import classNames from "classnames";
import { ButtonProps } from "./Button.types";

import styles from './Button.module.scss';

const defaultTagName = "button";

const Button = ({
	type,
	color,
	text,
	tagName,
}: ButtonProps) => {

	const buttonClass = classNames(`${styles.button} ${styles[type]} ${styles[color]}`);

	const TagName = tagName || defaultTagName;

	return (
		<TagName className={buttonClass}>
			{text}
		</TagName>
	)
};

export default Button;

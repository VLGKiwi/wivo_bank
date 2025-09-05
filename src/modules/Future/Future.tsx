import { FutureProps } from "./Future.types";
import styles from './Future.module.scss';
import Button from "@/ui/Button/Button";
import Image from "next/image";

const Future = ({ title, description, buttons, image, imgAlt }: FutureProps) => {
	const buttonList = buttons || [];

	return (
		<section className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.container_text}>
					<h1 className={styles.container_text_title}>{title}</h1>
					<div className={styles.container_text_content}>
						<p className={styles.container_text_content_description}>
							{description}
						</p>
						<div className={styles.container_text_content_buttons}>
							{Array.isArray(buttonList) && buttonList.length > 0 ? (
								buttonList.map((button, index) => (
									<Button key={index} {...button} />
								))
							) : (
								<></>
							)}
						</div>
					</div>
				</div>
				<div className={styles.container_image}>
					<Image src={image} alt={imgAlt} width={550} height={650} quality={100} />
				</div>
			</div>
		</section>
	)
}

export default Future;

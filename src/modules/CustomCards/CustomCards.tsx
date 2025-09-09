import Image from 'next/image';
import styles from './CustomCards.module.scss';

import { CustomCardsProps } from './CustomCards.types';
import TextHandler from '@/ui/TextHandler/TextHandler';
import WrapperGray from '@/ui/WrapperGray/WrapperGray';

const CustomCards = ({ image, imgAlt }: CustomCardsProps) => {
	return (
		<section className={styles.container}>
			<div className={styles.container_text}>
				<TextHandler
						title={<>Get noticed with a custom card to <WrapperGray>fit your style</WrapperGray></>}
						description={"Stand out from the crowd by not settling for a boring bank card. Choose a card color that reflects your style, and the app will adapt to match it."}
						textAlign='center'
						mobTextAlign='mobCenter'
						titleSize='heading-1'
					/>
			</div>
			<div className={styles.container_image}>
				<Image src={image} alt={imgAlt} width={550} height={650} quality={100} />
			</div>
		</section>
	)
}

export default CustomCards;
